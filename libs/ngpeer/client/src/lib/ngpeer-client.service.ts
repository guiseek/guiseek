import { Inject, Injectable } from '@angular/core';
import * as SocketClient from 'socket.io-client';
import { bindCallback } from 'rxjs';

import { getUserMedia } from './utilities';
import { NgPeerConfig, NGPEER_CONFIG, rtcOfferOptions } from './config';
import { PeerConnection, PeerAction, PeerMessage, PeerMessages, PeerClient } from '@ngpeer/core';
import { NgPeerClientStoreService } from './ngpeer-client-store.service';

@Injectable()
export class NgPeerClientService {
  socket: SocketIOClient.Socket

  pc: PeerConnection
  media: MediaStream
  peers = new Map<string, PeerConnection>([])

  constructor(
    @Inject(NGPEER_CONFIG)
    private ngPeerConfig: NgPeerConfig,
    private ngPeerClientStore: NgPeerClientStoreService
  ) {

    const { socket, rtc } = this.ngPeerConfig

    this.pc = new PeerConnection(rtc)
    this.socket = SocketClient(socket.uri);

    this.socket.on(PeerAction.Connected, ({ id }) => this.makeOffer(id, rtc))

    this.socket.on(PeerAction.Message, (data: PeerMessages) => this.handleMessage(data))

    this.socket.on(PeerAction.Disconnected, ({ id }) => console.log(`Disconnected: ${id}`))
  }

  private async makeOffer(id: string, rtc?: RTCConfiguration) {
    const peer = this.getPeer(id)

    const sdp = await peer.createOffer(rtcOfferOptions)
    await peer.setLocalDescription(sdp)
    this.socket.emit(
      PeerAction.Message,
      PeerMessage.offer(this.pc.id, id, sdp)
    )
  }

  private async handleMessage({ type, from, sdp, ice }: PeerMessages) {
    const peer = this.getPeer(from)
    switch (type) {
      case PeerAction.Offer: return this.handleOffer(peer, sdp)
      case PeerAction.Answer: return this.handleAnswer(peer, sdp)
      case PeerAction.IceCandidate: return peer.addIceCandidate(ice)
    }

    const ice$ = bindCallback<string, RTCPeerConnectionIceEvent>(peer.addEventListener)
    ice$('candidate').subscribe(({ candidate }) => {
      this.socket.emit(
        PeerAction.Message,
        PeerMessage.candidate(this.pc.id, from, candidate)
      )
    })
  }

  private async handleOffer(peer: PeerConnection, sdp: RTCSessionDescriptionInit) {
    const description = new RTCSessionDescription(sdp)
    await peer.setRemoteDescription(description)
    const answer = await peer.createAnswer(rtcOfferOptions)
    this.socket.emit(
      PeerAction.Message,
      PeerMessage.answer(this.pc.id, peer.id, answer)
    )
  }

  private async handleAnswer(peer: PeerConnection, sdp: RTCSessionDescriptionInit) {
    const description = new RTCSessionDescription(sdp)
    await peer.setRemoteDescription(description)
  }

  public async connectToRoom() {
    const stream = await getUserMedia()
    this.media = stream
    this.socket.emit(PeerAction.ConnectToRoom)

    const client = new PeerClient({
      id: this.socket.id,
      stream: stream
    })
    this.ngPeerClientStore.addClient(client)
  }

  getPeer(id: string, rtc?: RTCConfiguration) {
    return this.peers.has(id)
      ? this.peers.get(id)
      : new PeerConnection(rtc)
  }
}
