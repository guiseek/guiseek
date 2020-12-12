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
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/List'
import { MatMenuModule } from '@angular/material/menu'

import { UtilLoggerModule } from '@seek-peer/util-logger'
import { PeerPlayerModule } from '@seek-peer/player'
import { PeerClientModule } from '@seek-peer/client'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { DemoComponent } from './demo/demo.component'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'demo', component: DemoComponent },
  {
    path: 'call',
    loadChildren: () => import('./call/call.module').then((m) => m.CallModule),
  },
  {
    path: 'labs',
    loadChildren: () => import('./labs/labs.module').then((m) => m.LabsModule),
  },

]

@NgModule({
  declarations: [AppComponent, RoomComponent, DemoComponent],
  imports: [
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,

    PeerPlayerModule,
    PeerClientModule.forRoot(environment.connection),

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
      },
    ]),

    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
