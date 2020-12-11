import { LogPublisherService } from './log-publisher.service'
import { LogPublisher } from './log-publisher'
import { LogEntry } from './log-entry'
import { LogLevel } from './log-level.enum'
import { Injectable } from '@angular/core'

@Injectable()
export class LogService {
  level: LogLevel = LogLevel.All
  logWithDate = true

  publishers: LogPublisher[]

  constructor(private publishersService: LogPublisherService) {
    // Set publishers
    this.publishers = this.publishersService.publishers
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams)
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams)
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams)
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams)
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams)
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams)
  }
  private shouldLog(level: LogLevel): boolean {
    let ret = false
    if (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    ) {
      ret = true
    }
    return ret
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      const entry: LogEntry = new LogEntry()
      entry.message = msg
      entry.level = level
      entry.extraInfo = params
      entry.logWithDate = this.logWithDate
      for (const logger of this.publishers) {
        logger.log(entry).subscribe((response) => console.log(response))
      }
    }
  }
}
