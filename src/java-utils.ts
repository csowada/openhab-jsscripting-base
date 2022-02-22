/**
 * Convert an array to a ``java.util.Set<>``
 * @param values 
 */
export const toSet = (values: string[]) => {
  const HashSet: any = Java.type('java.util.HashSet');
  const set: java.util.Set<string> = new HashSet();
  values.forEach(x => set.add(x));
  return set;
}

export const fromSet = <T>(set: java.util.Set<T>): T[] => {
  const result: T[] = []
  set.forEach((entry: T) => {
    result.push(entry);
  });
  return result;
}