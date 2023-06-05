export const pipe =
  <T>(...funcs: Array<(...args: Array<any>) => T>) =>
  (initValue: T) =>
    funcs.reduce((acc, func) => func(acc), initValue);
