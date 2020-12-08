export class Logger {
  info(...msg: any) {
    console.log(`%c${JSON.stringify(msg)}`, 'color: #448AFF')
  }
  log(...msg: any) {
    console.log(`%c${msg}%c`, 'color: #448AFF')
  }
  error(...msg: any) {
    console.error(`%c${msg}%c`, 'color: #F2FA8C')
  }
  warn(...msg: any) {
    console.warn(`%c${msg}%c`, 'color: #E66B6E')
  }
}
