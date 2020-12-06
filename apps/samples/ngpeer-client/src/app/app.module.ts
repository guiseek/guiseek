import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { NgPeerClientModule } from '@ngpeer/client'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgPeerClientModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
