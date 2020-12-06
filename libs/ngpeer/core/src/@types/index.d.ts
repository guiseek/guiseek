declare global {
  interface RTCPeerConnection {
    onaddstream: (evt: MediaStreamEvent) => void
    onremovestream: (evt: Event) => void
    addStream(stream: MediaStream): void
  }
}
