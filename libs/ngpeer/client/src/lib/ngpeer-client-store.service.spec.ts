import { TestBed } from '@angular/core/testing';

import { NgPeerClientStoreService } from './ngpeer-client-store.service';

describe('NgPeerClientStoreService', () => {
  let service: NgPeerClientStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPeerClientStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
