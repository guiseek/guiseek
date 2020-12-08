import { Component } from '@angular/core'
import { ClientConnection } from '@seek-peer/client'

@Component({
  selector: 'sample-peer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-peer'
  active$ = this.connectionService.active$

  constructor(private connectionService: ClientConnection) {}

  public connectToRoom() {
    this.connectionService.connectToRoom()
  }
}
