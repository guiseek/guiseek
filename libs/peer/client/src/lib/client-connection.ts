import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {
  Logger,
  PeerEvent,
  PeerClient,
  PeerTransport,
  IPeerTransport,
  getUserMedia,
} from '@seek-peer/core'
import { PeerConfig, PEER_CONFIG } from './config'
import { Inject, Injectable } from '@angular/core'
import { ClientStore } from './client-store'
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root',
})
export class ClientConnection {
  private socket: SocketIOClient.Socket
  private peerConnections: RTCPeerConnection[] = []
  private myMediaStream: MediaStream = undefined
  private peerId: string
  private logger: Logger = new Logger()
  private active = new BehaviorSubject<boolean>(false);
  public active$ = this.active.asObservable()

  constructor(
    @Inject(PEER_CONFIG)
    private config: PeerConfig,
    private clientStore: ClientStore
  ) {
    const { rtc, socket } = this.config

    this.logger.info(socket)

    this.socket = io.connect(config.socket.uri)
    // this.socket = io(socket.uri, socket)

    this.socket.on('connect', () => {
      this.logger.log('Socket connected. I am', this.socket.id)
      this.peerId = this.socket.id
    })

    this.socket.on('disconnect', ({ id }) => {
      this.logger.log('Socket disconnected. I was', id, this.socket.id)
    })

    this.socket.on(PeerEvent.Connected, ({ id }) => this.makeOffer(id))

    this.socket.on(PeerEvent.Disconnected, ({ id }) => {
      this.active.next(false)
      this.clientStore.removeClient(id)
    })

    this.socket.on(PeerEvent.Message, (data: IPeerTransport) =>
      this.handleMessage(data)
    )
  }

  public async connectToRoom() {
    const video = {
      height: 720,
      echoCancellation: true,
    }
    try {
      const stream = await getUserMedia({ video })
      this.myMediaStream = stream
      this.socket.emit(PeerEvent.ConnectToRoom)
      const client = new PeerClient({
        id: this.socket.id,
        stream: stream,
      })
      this.clientStore.addClient(client)
      this.active.next(true)
    } catch (err) {
      this.logger.error("Can't get media stream", err)
    }
  }

  private async makeOffer(clientId: string) {
    try {
      const peer = this.getPeer(clientId)

      const sdp = await peer.createOffer({
        offerToReceiveVideo: true,
        offerToReceiveAudio: true,
      })

      return peer.setLocalDescription(sdp).then(() => {
        this.socket.emit(
          PeerEvent.Message,
          PeerTransport.offer(this.peerId, clientId, sdp)
        )
      })
    } catch (err) {
      this.logger.error("Can't get media stream", err)
    }
  }

  private async handleMessage(message: IPeerTransport) {
    const peer = this.getPeer(message.by)
    this.logger.log(peer)

    this.logger.log(message)
    switch (message.type) {
      case PeerEvent.SdpOffer:
        return this.handleOffer(peer, message)
      case PeerEvent.SdpAnswer:
        return this.handleAnswer(peer, message)
      case PeerEvent.Ice:
        return this.handleIce(peer, message)
    }
  }
  private async handleOffer(peer: RTCPeerConnection, message: IPeerTransport) {
    try {
      await peer.setRemoteDescription(new RTCSessionDescription(message.sdp))
      this.logger.log('Setting remote description by offer')

      const sdp = await peer.createAnswer()

      return peer.setLocalDescription(sdp).then(() => {
        const transport = PeerTransport.answer(this.peerId, message.by, sdp)
        this.socket.emit(PeerEvent.Message, transport)
      })
    } catch (err) {
      this.logger.error('Error on SDP-Offer:', err)
    }
  }

  private async handleAnswer(peer: RTCPeerConnection, message: IPeerTransport) {
    try {
      await peer.setRemoteDescription(new RTCSessionDescription(message.sdp))
      this.logger.log('Setting remote description by answer')
    } catch (err) {
      this.logger.error('Error on SDP-Answer:', err)
    }
  }

  private async handleIce(peer: RTCPeerConnection, message: IPeerTransport) {
    if (message.ice) {
      this.logger.log('Adding ice candidate')
      peer.addIceCandidate(message.ice)
    }
  }

  private getPeer(id: string): RTCPeerConnection {
    if (this.peerConnections[id]) {
      return this.peerConnections[id]
    }

    const peerConnection = new RTCPeerConnection()
    this.peerConnections[id] = peerConnection

    peerConnection.addEventListener(
      'icecandidate',
      ({ candidate }: RTCPeerConnectionIceEvent) => {
        const message = PeerTransport.candidate(this.peerId, id, candidate)
        this.socket.emit(PeerEvent.Message, message)
      }
    )

    peerConnection.addEventListener('onnegotiationneeded', () => {
      this.logger.log('Need negotiation:', id)
    })

    peerConnection.addEventListener('onsignalingstatechange', () => {
      this.logger.log(
        'ICE signaling state changed to:',
        peerConnection.signalingState,
        'for client',
        id
      )
    })

    // Workaround for Chrome
    // see: https://github.com/webrtc/adapter/issues/361
    if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      // Chrome
      // DEPECRATED https://developer.mozilla.org/de/docs/Web/API/RTCPeerConnection/addStream
      ;(peerConnection as any).addStream(this.myMediaStream)
      ;(peerConnection as any).onaddstream = ({ stream }) => {
        this.logger.log('Received new stream')
        const client = new PeerClient({ id: id, stream: stream })
        this.clientStore.addClient(client)
      }
    } else {
      // Firefox
      peerConnection.addTrack(
        this.myMediaStream.getVideoTracks()[0],
        this.myMediaStream
      )
      peerConnection.ontrack = ({ streams }: RTCTrackEvent) => {
        this.logger.log('Received new stream')
        const client = new PeerClient({ id: id, stream: streams[0] })
        this.clientStore.addClient(client)
      }
    }

    return peerConnection
  }
}
