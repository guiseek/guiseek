import { peerUUID } from './peer-uuid';

describe('peerUUID', () => {
  it('should create an instance', () => {
    expect(peerUUID()).toBeTruthy();
  });
  it('should create an instance', () => {
    const uuid = peerUUID()
    expect(uuid.length).toBe(64)
  });
});
