import { RoomComponent } from './room/room.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSidenavModule } from '@angular/material/sidenav'

import { UtilLoggerModule } from '@seek-peer/util-logger'
import { PeerPlayerModule } from '@seek-peer/player'
import { PeerClientModule } from '@seek-peer/client'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { DemoComponent } from './demo/demo.component'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'demo', component: DemoComponent },
]

@NgModule({
  declarations: [AppComponent, RoomComponent, DemoComponent],
  imports: [
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    PeerPlayerModule,
    PeerClientModule.forRoot({
      socket: {
        uri: 'http://localhost:8080',
      },
    }),
    UtilLoggerModule.forRoot([
      {
        loggerName: 'console',
        loggerLocation: '',
        isActive: true,
      },
      {
        loggerName: 'localstorage',
        loggerLocation: 'logging',
        isActive: true,
      }
    ]),
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
