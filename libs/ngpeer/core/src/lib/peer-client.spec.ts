import { IPeerClient, PeerClient } from './peer-client';

describe('PeerClient', () => {
  let client: IPeerClient

  beforeAll(() => {
    client = { id: '1', stream: null }
  })
  it('should be defined', () => {
    const peer = new PeerClient(client)
    expect(peer).toBeDefined()
  });
});
