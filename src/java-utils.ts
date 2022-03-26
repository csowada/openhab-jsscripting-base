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

export const fromSet = <T>(xxxx: java.util.Set<T>): T[] => {
  const result: T[] = []
  xxxx.forEach((entry: T) => {
    result.push(entry);
  });
  return result;
}

export const toMap = (values: {[key:string]:string}) => {
  const HashMap: any = Java.type('java.util.HashMap');
  const map: java.util.Map<string, string> = new HashMap();
  Object.keys(values).forEach(key => {
    map.put(key, values[key]);
  });
  // values.forEach(x => set.put());
  return map;
}