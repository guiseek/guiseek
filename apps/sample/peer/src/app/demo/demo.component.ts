import { getDisplayMedia, getUserMedia } from '@seek-peer/core'
import { Component, ElementRef, Renderer2 } from '@angular/core'
import { from } from 'rxjs'
import { ClientConnection } from '@seek-peer/client'

@Component({
  selector: 'sample-peer-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  stream$ = from(
    getUserMedia({
      video: {
        height: 720,
        echoCancellation: true,
      },
    })
  )
  constructor(
    private clientConnection: ClientConnection,
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  shareScreen() {
    this.stream$.subscribe(async (stream) => {
      stream.getVideoTracks().forEach((t) => t.stop())
      const screen = await getDisplayMedia()
    })
  }
}
