import javascriptUtils from "@runtime/JavaScriptUtils";
import { ZonedDateTime } from "./openhab-types";

const timerFactory: any = javascriptUtils.timerFactory;

interface Timer {

  /**
   * Cancels the timer
   */
  cancel(): boolean

  /**
   * Determines whether the scheduled execution has already terminated.
   */

  hasTerminated(): boolean

  /**
   *  Determines whether the scheduled execution is yet to happen.
   */
  isActive(): boolean

  /**
   * Determines whether the scheduled code is currently executed.
   */
  isRunning(): boolean

  /**
   * Reschedules a timer to a new starting time.
   */
  reschedule(newTime: java.time.ZonedDateTime): boolean
}

export class TimerControl {

  private timers: Set<Timer> = new Set();;

  /**
   * Create a Timer based on seconds
   * @param seconds 
   * @param fn 
   * @returns 
   */
  createTimerSeconds = (seconds: number, fn: () => void): Timer => {
    return this.createTimerMillis(seconds*1000, fn);
  }

  /**
   * Create a Timer based on millliseconds
   * @param millis 
   * @param fn 
   * @returns 
   */
  createTimerMillis = (millis: number, fn: () => void): Timer => {
    const t = setTimeout(fn, millis) as any as Timer;
    this.timers.add(t);
    return t;
  }

  /**
   * Cancel one timer
   * @param timer 
   */
  cancel = (timer: Timer) => {
    timer.cancel();
    this.timers.delete(timer);
  }

  /**
   * Cancel all pending timers
   */
  cancelAllTimers = () => {
    if (this.timers != null) {
      this.timers.forEach(t => t.cancel());
      this.timers.clear();
    }
  }
}

/**
 * Returns a NOW ZonedDateTime object
 */

/**
 * Returns a NOW ZonedDateTime object
 * @returns ZonedDateTime object
 */
export const now = () => ZonedDateTime.now();

/**
 * Returns midnight
 * @returns 
 */
export const midnight = () => {
  const ChronoField: any = Java.type("java.time.temporal.ChronoField");
  return now().with(ChronoField.HOUR_OF_DAY, 0)
};
