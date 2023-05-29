/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export class ClientLogger {
  static log(msg?: any, ...rest: any[]) {
    console.log('[log]: ', msg, rest);
  }

  static error(msg?: any, ...rest: any[]) {
    console.error('[error]: ', msg, rest);
  }

  static warn(msg?: any, ...rest: any[]) {
    console.warn('[warn]: ', msg, rest);
  }

  static debug(msg?: any, ...rest: any[]) {
    console.debug('[debug]: ', msg, rest);
  }
}
