import { RoomComponent } from './room/room.component';
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

import { PeerClientModule } from '@seek-peer/client';

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RoomComponent }]

@NgModule({
  declarations: [AppComponent, RoomComponent],
  imports: [
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    PeerClientModule.forRoot({
      socket: {
        uri: 'http://localhost:3000'
      }
    }),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
