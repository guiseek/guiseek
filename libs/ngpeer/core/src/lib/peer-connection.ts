import { peerUUID } from './utilities'

export type TPeerConnection = RTCPeerConnection & {
  onaddstream: (evt: MediaStreamEvent) => void
  onremovestream: (evt: Event) => void
  addStream(stream: MediaStream): void
}

export class PeerConnection extends RTCPeerConnection implements TPeerConnection {
  logs = new Map<Date, Event>([])
  id: string
  constructor(configuration?: RTCConfiguration) {
    super(configuration)
    this.id = peerUUID()
    this.onconnectionstatechange = (ev: Event) => this.logs.set(new Date, ev)
    this.ondatachannel = (ev: RTCDataChannelEvent) => this.logs.set(new Date, ev)
    this.onicecandidate = (ev: RTCPeerConnectionIceEvent) => this.logs.set(new Date, ev)
    this.onicecandidateerror = (ev: RTCPeerConnectionIceErrorEvent) => this.logs.set(new Date, ev)
    this.oniceconnectionstatechange = (ev: Event) => this.logs.set(new Date, ev)
    this.onicegatheringstatechange = (ev: Event) => this.logs.set(new Date, ev)
    this.onnegotiationneeded = (ev: Event) => this.logs.set(new Date, ev)
    this.onsignalingstatechange = (ev: Event) => this.logs.set(new Date, ev)
    this.onstatsended = (ev: RTCStatsEvent) => this.logs.set(new Date, ev)
    this.ontrack = (ev: RTCTrackEvent) => this.logs.set(new Date, ev)

  }

  addStream() {}
  onremovestream = () => {}
  onaddstream = () => {}
}



/*
  canTrickleIceCandidates: boolean;
  connectionState: RTCPeerConnectionState;
  currentLocalDescription: RTCSessionDescription;
  currentRemoteDescription: RTCSessionDescription;
  iceConnectionState: RTCIceConnectionState;
  iceGatheringState: RTCIceGatheringState;
  idpErrorInfo: string;
  idpLoginUrl: string;
  localDescription: RTCSessionDescription;
  onconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
  ondatachannel: (this: RTCPeerConnection, ev: RTCDataChannelEvent) => any;
  onicecandidate: (this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any;
  onicecandidateerror: (this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any;
  oniceconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
  onicegatheringstatechange: (this: RTCPeerConnection, ev: Event) => any;
  onnegotiationneeded: (this: RTCPeerConnection, ev: Event) => any;
  onsignalingstatechange: (this: RTCPeerConnection, ev: Event) => any;
  onstatsended: (this: RTCPeerConnection, ev: RTCStatsEvent) => any;
  ontrack: (this: RTCPeerConnection, ev: RTCTrackEvent) => any;
  peerIdentity: Promise<RTCIdentityAssertion>;
  pendingLocalDescription: RTCSessionDescription;
  pendingRemoteDescription: RTCSessionDescription;
  remoteDescription: RTCSessionDescription;
  sctp: RTCSctpTransport;
  signalingState: RTCSignalingState;
  addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender {
    throw new Error('Method not implemented.');
  }
  addTransceiver(trackOrKind: string | MediaStreamTrack, init?: RTCRtpTransceiverInit): RTCRtpTransceiver {
    throw new Error('Method not implemented.');
  }
  close(): void {
    throw new Error('Method not implemented.');
  }
  createAnswer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
    throw new Error('Method not implemented.');
  }
  createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel {
    throw new Error('Method not implemented.');
  }
  createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
    throw new Error('Method not implemented.');
  }
  getConfiguration(): RTCConfiguration {
    throw new Error('Method not implemented.');
  }
  getIdentityAssertion(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  getReceivers(): RTCRtpReceiver[] {
    throw new Error('Method not implemented.');
  }
  getSenders(): RTCRtpSender[] {
    throw new Error('Method not implemented.');
  }
  getStats(selector?: MediaStreamTrack): Promise<RTCStatsReport> {
    throw new Error('Method not implemented.');
  }
  getTransceivers(): RTCRtpTransceiver[] {
    throw new Error('Method not implemented.');
  }
  removeTrack(sender: RTCRtpSender): void {
    throw new Error('Method not implemented.');
  }
  setConfiguration(configuration: RTCConfiguration): void {
    throw new Error('Method not implemented.');
  }
  setIdentityProvider(provider: string, options?: RTCIdentityProviderOptions): void {
    throw new Error('Method not implemented.');
  }
  setLocalDescription(description: RTCSessionDescriptionInit): Promise<void> {
    throw new Error('Method not implemented.');
  }
  setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addEventListener<K extends 'connectionstatechange' | 'datachannel' | 'icecandidate' | 'icecandidateerror' | 'iceconnectionstatechange' | 'icegatheringstatechange' | 'negotiationneeded' | 'signalingstatechange' | 'statsended' | 'track'>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: any, listener: any, options?: any) {
    throw new Error('Method not implemented.');
  }
  removeEventListener<K extends 'connectionstatechange' | 'datachannel' | 'icecandidate' | 'icecandidateerror' | 'iceconnectionstatechange' | 'icegatheringstatechange' | 'negotiationneeded' | 'signalingstatechange' | 'statsended' | 'track'>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: any, listener: any, options?: any) {
    throw new Error('Method not implemented.');
  }
  dispatchEvent(event: Event): boolean {
    throw new Error('Method not implemented.');
  }
  onaddstream: (evt: MediaStreamEvent) => void;
  onremovestream: (evt: Event) => void;
  addStream(stream: MediaStream): void {
    throw new Error('Method not implemented.');
  }
*/
