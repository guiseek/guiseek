import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { EventHandler } from '../utilities'

@Component({
  selector: 'peer-volume',
  template: `
    <div class="volume-control">
      <button mat-icon-button (click)="toggleMuted()">
        <i class="material-icons" *ngIf="muted || volume === 0">volume_off</i>
        <i class="material-icons" *ngIf="!muted && volume > 0 && volume < 0.25"
          >volume_mute</i
        >
        <i
          class="material-icons"
          *ngIf="!muted && volume >= 0.25 && volume < 0.5"
          >volume_down</i
        >
        <i class="material-icons" *ngIf="!muted && volume >= 0.5">volume_up</i>
      </button>
      <mat-slider
        min="0"
        max="1"
        step="0.01"
        value="1"
        class="volume-slider"
        [color]="color"
        (input)="setVolume($event.value)"
      >
      </mat-slider>
    </div>
  `,
  styles: [
    `
      .volume-control {
        display: inline-block;
        min-width: 120px;
      }

      .volume-slider {
        margin-left: -15px;
      }

      ::ng-deep.mat-slider-thumb {
        border-color: transparent !important;
      }

      ::ng-deep.mat-slider-track-background {
        background-color: lightgrey !important;
        transform: translateX(0px) !important;
      }

      .volume-control .volume-slider {
        visibility: hidden;
        opacity: 0;
        min-width: 0px;
        width: 0px;
        transition: visibility 0s 0.2s, opacity 0.2s linear, width 0.2s linear;
      }

      .volume-control:hover .volume-slider {
        visibility: visible;
        opacity: 1;
        min-width: 90px;
        width: 90px;
        transition: opacity 0.2s linear, width 0.2s linear,
          min-width 0.2s linear;
      }
    `,
  ],
})
export class VolumeControl {
  @Input() video: HTMLVideoElement = null

  @Input() color: ThemePalette = 'primary'

  @Input() volume = 1

  @Output() volumeChanged = new EventEmitter<number>()

  private _muted = false
  @Input()
  get muted() {
    return this._muted
  }
  set muted(v: boolean) {
    this._muted = v
    if (this.video) {
      this.video.muted = this._muted
    }
  }

  @Output() mutedChanged = new EventEmitter<boolean>()

  @Input() keyboard = true

  constructor(private evt: EventHandler) {}

  setVolume(value: number): void {
    this.volume = value
    this.video.volume = this.volume
    this.volumeChanged.emit(this.volume)

    if (this.volume > 0) this.setMuted(false)
  }

  setMuted(value: boolean): void {
    if (this.muted !== value) this.toggleMuted()
  }

  toggleMuted(): void {
    this.muted = !this.muted
    this.updateMuted()
  }

  updateMuted(): void {
    this.video.muted = this.muted
    this.mutedChanged.emit(this.muted)
  }

  @HostListener('document:keyup.m', ['$event'])
  onMuteKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleMuted()
      event.preventDefault()
    }
  }
}
