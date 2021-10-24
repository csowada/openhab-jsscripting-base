declare namespace org.slf4j {

    class Logger{


      debug(msg: string): void;
      debug(msg: string, ...args: any[]): void;

      info(msg: string): void;
      info(msg: string, ...args: any[]): void;

      error(msg: string): void;
      error(msg: string, ...args: any[]): void;

      trace(msg: string): void;
      trace(msg: string, ...args: any[]): void;

      warn(msg: string): void;
      warn(msg: string, ...args: any[]): void;

  }
}