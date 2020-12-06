import { TestBed } from '@angular/core/testing';

import { NgPeerClientService } from './ngpeer-client.service';

describe('NgPeerClientService', () => {
  let service: NgPeerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPeerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
