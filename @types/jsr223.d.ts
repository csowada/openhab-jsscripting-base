//
// Rhino
//

declare const Packages: any;

//
// Nashorn
//

declare function print(...args: any[]): void

declare function load(module: string): void

declare namespace Java {
  export function type<T>(t: string): T;
  export function from<T>(list: java.util.List<T>): Array<T>;
  export function from<T>(list: java.util.Set<T>): Array<T>;
  export function extend<T>(clazz: any, methods?: {}): T;
  export function typeName<T>(x: T): string;
}