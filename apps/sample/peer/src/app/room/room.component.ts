import { catchError, map } from 'rxjs/operators'
import { ClientStore } from '@seek-peer/client'
import { Component } from '@angular/core'
import { throwError } from 'rxjs'

@Component({
  selector: 'sample-peer-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  public peers$ = this.clientStoreService.clients$.pipe(
    map((clientList) => clientList.toArray()),
    catchError((err) => throwError('E:', err))
  )

  constructor(private clientStoreService: ClientStore) {}
}
