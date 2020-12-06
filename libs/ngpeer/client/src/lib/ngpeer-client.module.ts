import { mergeConfig, NgPeerConfig, NGPEER_CONFIG } from './config/ngpeer-injectors';
import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgPeerClientService } from './ngpeer-client.service';

@NgModule({
  imports: [CommonModule],
  providers: [NgPeerClientService]
})
export class NgPeerClientModule {
  static forRoot(config?: NgPeerConfig): ModuleWithProviders<NgPeerClientModule> {
    const ngPeerConfig = mergeConfig(config ?? { rtc: {}, media: {}, socket: null })
    return {
      ngModule: NgPeerClientModule,
      providers: [ { provide: NGPEER_CONFIG, useValue: ngPeerConfig } ]
    }
  }
}
