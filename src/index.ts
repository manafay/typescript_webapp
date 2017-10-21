console.log('hello world');


export function map<T1, T2>(source: T1[], mapFn: <U>(arg: U) => T2 ): T2[] {
  const result: T2[] = [];
  source.forEach((val: T1) => result.push(mapFn(val)));
  return result;
}

export function filter<T1>(source: T1[], pred: <T2>(arg: T2) => boolean): T1[] {
  const result: T1[] = [];
  source.forEach((val: T1) => {
    if (pred(val)) {
      result.push(val);
    } 
  });
  return result;
}
