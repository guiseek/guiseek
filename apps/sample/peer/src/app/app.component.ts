import { map } from 'rxjs/operators'
import { ClientConnection } from '@seek-peer/client'
import { Component, ElementRef } from '@angular/core'
import { LogService } from '@seek-peer/util-logger'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'sample-peer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-peer'
  active$ = this.connectionService.active$

  mobile$ = this.observer
    .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
    .pipe(map(({ matches }) => !!matches))

  constructor(
    private observer: BreakpointObserver,
    private connectionService: ClientConnection,
    private elementRef: ElementRef<HTMLElement>,
    private logger: LogService
  ) {}

  public connectToRoom() {
    this.connectionService.connectToRoom()
    const footer = this.elementRef?.nativeElement?.querySelector('footer')
    footer.scrollTo({ behavior: 'smooth' })
    console.log(footer)
  }

  screenShare() {
    this.connectionService.connectScreen()
  }

  hangUp() {
    this.connectionService.hangup()
  }
}
