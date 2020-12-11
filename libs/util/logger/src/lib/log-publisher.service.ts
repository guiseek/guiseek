import { LOGGER_CONFIG } from './log-injectors'
import { map, catchError } from 'rxjs/operators'
import { LoggerConfig } from './logger-config'
import { LogWebApi } from './log-web-api'
import { HttpClient } from '@angular/common/http'
import { LogLocalStorage } from './log-local-storage'
import { LogConsole } from './log-console'
import { Inject, Injectable } from '@angular/core'
import { LogPublisher } from './log-publisher'
import { Observable, of, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LogPublisherService {
  constructor(
    private http: HttpClient,
    @Inject(LOGGER_CONFIG) private config: string | LoggerConfig[]
  ) {
    // Build publishers arrays
    this.buildPublishers()
  }

  // Public properties
  publishers: LogPublisher[] = []

  getLoggers(): Observable<LoggerConfig[]> {
    if (typeof this.config === 'string') {
      return this.http.get(this.config).pipe(
        map((response) => response),
        catchError(this.handleErrors)
      )
    } else {
      return of(this.config)
    }
  }
  buildPublishers(): void {
    let logPub: LogPublisher

    this.getLoggers().subscribe((response) => {
      for (const pub of response.filter((p) => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case 'console':
            logPub = new LogConsole()
            break
          case 'localstorage':
            logPub = new LogLocalStorage()
            break
          case 'webapi':
            logPub = new LogWebApi(this.http)
            break
        }

        // Set location of logging
        logPub.location = pub.loggerLocation

        // Add publisher to array
        this.publishers.push(logPub)
      }
    })
  }

  private handleErrors(error: any): Observable<any> {
    const errors: string[] = []
    let msg = ''

    msg = 'Status: ' + error.status
    msg += ' - Status Text: ' + error.statusText
    if (error.json()) {
      msg += ' - Exception Message: ' + error.json().exceptionMessage
    }
    errors.push(msg)
    console.error('An error occurred', errors)
    return throwError(errors)
  }
}
