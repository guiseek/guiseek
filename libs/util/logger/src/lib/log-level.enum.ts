export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6,
}
export const logColor: Record<LogLevel, string> = {
  0: '#FAFAFA',
  1: '#448AFF',
  2: '#F2FA8C',
  3: '#F2FA8C',
  4: '#E66B6E',
  5: '#E66B6E',
  6: '#CCCCCC',
}
