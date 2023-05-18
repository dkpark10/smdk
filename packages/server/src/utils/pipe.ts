export const pipe = <T>(...funcs: Array<(...args: any[]) => any>) => (initValue: T) => {
  return funcs.reduce((acc, func) => func(acc), initValue);
};
