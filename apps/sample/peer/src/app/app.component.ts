import { ClientConnection } from '@seek-peer/client'
import { Component, ElementRef } from '@angular/core'

@Component({
  selector: 'sample-peer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-peer'
  active$ = this.connectionService.active$

  constructor(
    private connectionService: ClientConnection,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  public connectToRoom() {
    this.connectionService.connectToRoom()
    const footer = this.elementRef?.nativeElement?.querySelector('footer')
    footer.scrollTo({ behavior: 'smooth' })
    console.log(footer);
  }
}
