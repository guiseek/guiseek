import { Injectable } from '@angular/core';
import { PeerClient } from '@ngpeer/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgPeerClientStoreService {
  private peers = new BehaviorSubject<PeerClient[]>([])
  public peers$ = this.peers.asObservable()

  public addClient(client: PeerClient): void {
    this.peers.next([...this.peers.value, client])
  }
  public removeClient() {}
}
