import { PeerAction } from './peer-action.enum';

export interface IPeerMessage {
  type: PeerAction
  from: string,
  to: string,
}
export interface IPeerSdpMessage extends IPeerMessage {
  sdp: RTCSessionDescriptionInit
}
export interface IPeerIceMessage extends IPeerMessage {
  ice: RTCIceCandidate
}

export type PeerMessages = IPeerSdpMessage & IPeerIceMessage

export class PeerMessage {
  static offer(
    // type: PeerAction,
    from: string,
    to: string,
    sdp: RTCSessionDescriptionInit
  ): IPeerSdpMessage {
    return { type: PeerAction.Offer, from, to, sdp }
  }
  static answer(
    from: string,
    to: string,
    sdp: RTCSessionDescriptionInit
  ): IPeerSdpMessage {
    return { type: PeerAction.Answer, from, to, sdp }
  }
  static candidate(
    // type: PeerAction,
    from: string,
    to: string,
    ice: RTCIceCandidate
  ): IPeerIceMessage {
    return { type: PeerAction.IceCandidate, from, to, ice }
  }
}
