import { Component, OnInit } from '@angular/core'
import { getDisplayMedia, NgPeerClientService } from '@ngpeer/client';
import { PeerConnection } from '@ngpeer/core'
import * as io from 'socket.io-client';

@Component({
  selector: 'ngpeer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'samples-ngpeer-client'
  pc = new PeerConnection()
  logs = Array.from(this.pc.logs.entries()).map(([date, ev]) => {
    console.log(date, ev);
    return `${date}: ${ev.type}`
  })

  constructor(private peerService: NgPeerClientService) {}

  ngOnInit() {
    // getDisplayMedia().then((stream) => {
    //   console.log(stream);
    // })
    // this.pc.createOffer()
    console.log(this.pc.id);

  }
}
