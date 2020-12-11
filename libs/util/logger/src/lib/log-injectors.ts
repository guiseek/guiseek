import { LoggerConfig } from './logger-config';
import { InjectionToken } from '@angular/core';

export const LOGGER_CONFIG = new InjectionToken<string | LoggerConfig[]>('UtilLoggerConfig')
