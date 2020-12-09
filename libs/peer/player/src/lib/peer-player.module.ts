import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PlayButton } from './buttons/play.button';
import { FullscreenButton } from './buttons/fullscreen.button';
import { MatButtonModule } from '@angular/material/button';
import { QualityControl } from './controls/quality.control';
import { PlayerComponent } from './player.component'
import { Fullscreen } from './utilities/fullscreen';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [PlayButton, FullscreenButton, QualityControl, PlayerComponent],
  exports: [PlayButton, FullscreenButton, QualityControl, PlayerComponent],
  providers: [Fullscreen],
})
export class PeerPlayerModule {}
