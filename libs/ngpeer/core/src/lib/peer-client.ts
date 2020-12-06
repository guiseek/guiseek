export interface IPeerClient {
  id?: string
  owner?: boolean
  muted?: boolean
  controls?: boolean
  stream: MediaStream
}

export class PeerClient {

  constructor(public data: IPeerClient) {
    Object.freeze(this.data)
  }

  get id(): string {
    return this.data.id
  }

  get stream(): MediaStream {
    return this.data.stream
  }

  get controls(): boolean {
    return this.data.controls
  }

  get muted(): boolean {
    return this.data.muted
  }
}
