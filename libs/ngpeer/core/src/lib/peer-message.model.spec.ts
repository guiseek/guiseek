import { PeerAction } from './peer-action.enum';
import { PeerMessage } from './peer-message.model';

describe('PeerMessage', () => {
  it('should create an instance', () => {
    expect(new PeerMessage()).toBeTruthy();
  });
  it('should create an offer message', () => {
    const sdp: RTCSessionDescriptionInit = {}
    const offer = PeerMessage.offer(PeerAction.Offer, 'a', 'b', sdp)
    expect(offer).toEqual({ type: '[Peer] offer', from: 'a', to: 'b', sdp: {} })
  });
  it('should create an ice message', async () => {
    const ice: RTCIceCandidate = null
    const candidate = PeerMessage.candidate(PeerAction.IceCandidate, 'a', 'b', ice)
    expect(candidate).toEqual({ type: '[Peer] IceCandidate', from: 'a', to: 'b', ice: null })
  });
});
