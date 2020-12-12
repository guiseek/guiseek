import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { catchError, map } from 'rxjs/operators'
import { ClientConnection, ClientStore } from '@seek-peer/client'
import { Component } from '@angular/core'
import { throwError } from 'rxjs'

@Component({
  selector: 'sample-peer-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  public clients$ = this.clientStoreService.clients$.pipe(
    map((clientList) => clientList.toArray()),
    catchError((err) => throwError('E:', err))
  )

  mobile$ = this.observer
    .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
    .pipe(map(({ matches }) => !!matches))

  constructor(
    private observer: BreakpointObserver,
    private clientStoreService: ClientStore,
    private clientConnection: ClientConnection
  ) {}

  start() {
    this.clientConnection.connectToRoom()
  }
}
