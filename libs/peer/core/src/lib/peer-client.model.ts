import { ImmutableModel } from './immutable.model'

export interface IPeerClient {
  id?: string
  stream: MediaStream
}

export class PeerClient extends ImmutableModel<IPeerClient, PeerClient> {
  constructor(data: IPeerClient) {
    super(PeerClient, data)
  }

  get id(): string {
    return this.data.get('id')
  }

  get stream(): MediaStream {
    return this.data.get('stream')
  }

  setId(val: string): PeerClient {
    return this.setValue('id', val)
  }

  setStream(val: MediaStream): PeerClient {
    return this.setValue('stream', val)
  }
}
