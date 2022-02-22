/**
 * Convert an array to a ``java.util.Set<>``
 * @param values
 */
export declare const toSet: (values: string[]) => java.util.Set<string>;
export declare const fromSet: <T>(set: java.util.Set<T>) => T[];
