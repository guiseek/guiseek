import { ClientConnection } from '@seek-peer/client'
import { Component, ElementRef } from '@angular/core'
import { LogService } from '@seek-peer/util-logger';

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
    private elementRef: ElementRef<HTMLElement>,
    private logger: LogService
  ) {
    this.logger.log('hahaha')
    this.logger.fatal('eita')
  }

  public connectToRoom() {
    this.connectionService.connectToRoom()
    const footer = this.elementRef?.nativeElement?.querySelector('footer')
    footer.scrollTo({ behavior: 'smooth' })
    console.log(footer);
  }
}
