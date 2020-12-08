import { Component, OnInit } from '@angular/core'
import { ClientStore } from '@x-peer/client'
import { PeerClient } from '@x-peer/core'

@Component({
  selector: 'x-peer-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public peerClients: PeerClient[]
  private blobs: string[] = []

  constructor(private clientStoreService: ClientStore) {
    this.clientStoreService.clients$.subscribe(
      (clientList) => (this.peerClients = clientList.toArray()),
      (err) => console.error('Error updating the client list:', err)
    )
  }

  ngOnInit() {
    // this.connectionService.connectToRoom()
  }
}
