import { InjectionToken } from '@angular/core';

import { socketOptions, SocketOptions } from './socket-options';
import { configuration } from './rtc-configuration';
import { mediaConstraints } from './media-constraints';

export interface NgPeerConfig {
  rtc: RTCConfiguration
  media: MediaStreamConstraints
  socket?: SocketOptions
}

export const NGPEER_CONFIG = new InjectionToken<NgPeerConfig>('ngpeer-rtc-configuration')
export const NGPEER_RTC_CONFIGURATION = new InjectionToken<RTCConfiguration>('ngpeer-rtc-configuration')
export const NGPEER_MEDIA_CONSTRAINTS = new InjectionToken<MediaStreamConstraints>('ngpeer-media-constraints')

export function mergeRtcConfig(config: RTCConfiguration) {
  return Object.assign(configuration, config)
}
export function mergeMediaConstraints(constraints: RTCConfiguration) {
  return Object.assign(mediaConstraints, constraints)
}
export function mergeSocketOptions(options: SocketOptions) {
  return Object.assign(socketOptions, options)

}
export function mergeConfig({ rtc, media, socket }: NgPeerConfig) {
  return {
    rtc: mergeRtcConfig(rtc),
    media: mergeMediaConstraints(media),
    socket: mergeSocketOptions(socket)
  }
}
