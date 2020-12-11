import { ModuleWithProviders, NgModule } from '@angular/core'
import { LOGGER_CONFIG } from './log-injectors'
import { LoggerConfig } from './logger-config'
import { LogService } from './log.service'

@NgModule({
  providers: [LogService],
})
export class UtilLoggerModule {
  static forRoot(
    config: string | LoggerConfig[]
  ): ModuleWithProviders<UtilLoggerModule> {
    return {
      ngModule: UtilLoggerModule,
      providers: [{ provide: LOGGER_CONFIG, useValue: config }],
    }
  }
}
