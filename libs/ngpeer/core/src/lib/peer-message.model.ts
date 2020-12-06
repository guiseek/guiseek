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

export class PeerMessage {
  static offer(
    type: PeerAction,
    from: string,
    to: string,
    sdp: RTCSessionDescriptionInit
  ): IPeerSdpMessage {
    return { type, from, to, sdp }
  }
  static candidate(
    type: PeerAction,
    from: string,
    to: string,
    ice: RTCIceCandidate
  ): IPeerIceMessage {
    return { type, from, to, ice }
  }
}
