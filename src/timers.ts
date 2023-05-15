// import javascriptUtils from "@runtime/JavaScriptUtils";
import { ZonedDateTime } from "./openhab-types";

// const timerFactory: any = javascriptUtils.timerFactory;

// interface Timer {

//   /**
//    * Cancels the timer
//    */
//   cancel(): boolean

//   /**
//    * Determines whether the scheduled execution has already terminated.
//    */

//   hasTerminated(): boolean

//   /**
//    *  Determines whether the scheduled execution is yet to happen.
//    */
//   isActive(): boolean

//   /**
//    * Determines whether the scheduled code is currently executed.
//    */
//   isRunning(): boolean

//   /**
//    * Reschedules a timer to a new starting time.
//    */
//   reschedule(newTime: java.time.ZonedDateTime): boolean
// }

// export class TimerControl {

//   private timers: Set<Timer> = new Set();;





//   /**
//    * Cancel one timer
//    * @param timer 
//    */
//   cancel = (timer: Timer) => {
//     timer.cancel();
//     this.timers.delete(timer);
//   }

//   /**
//    * Cancel all pending timers
//    */
//   cancelAllTimers = () => {
//     if (this.timers != null) {
//       this.timers.forEach(t => t.cancel());
//       this.timers.clear();
//     }
//   }
// }

/**
 * Create a Timer based on millliseconds
 * @param millis 
 * @param fn 
 * @returns 
 */
const createTimerMillis = (millis: number, fn: () => void): number => {
  return setTimeout(fn, millis);
}

/**
 * Create a Timer based on seconds
 * @param seconds 
 * @param fn 
 * @returns 
 */
const createTimerSeconds = (seconds: number, fn: () => void): number => {
  return createTimerMillis(seconds * 1000, fn);
}

/**
 * Returns a NOW ZonedDateTime object
 */

/**
 * Returns a NOW ZonedDateTime object
 * @returns ZonedDateTime object
 */
const now = () => ZonedDateTime.now();

/**
 * Returns midnight
 * @returns 
 */
const midnight = () => {
  return now().withHour(0).withMinute(0).withSecond(0).withNano(0);
};

export { now, midnight, createTimerMillis, createTimerSeconds }