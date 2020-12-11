import { LogEntry } from './log-entry'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LogPublisher } from './log-publisher'
import { Observable, of, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

export class LogWebApi extends LogPublisher {
  constructor(private http: HttpClient) {
    // Must call `super()`from derived classes
    super()

    // Set location
    this.location = '/api/log'
  }

  // Add log entry to back end data store
  log(entry: LogEntry): Observable<boolean> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    let options = { headers: headers }

    return this.http.post(this.location, entry, options).pipe(
      map((response) => response),
      catchError(this.handleErrors)
    )
  }

  // Clear all log entries from local storage
  clear(): Observable<boolean> {
    // TODO: Call Web API to clear all values
    return of(true)
  }

  private handleErrors(error: any): Observable<any> {
    let errors: string[] = []
    let msg: string = ''

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
