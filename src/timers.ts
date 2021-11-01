import javascriptUtils from "@runtime/JavaScriptUtils";
import { ZonedDateTime } from "./openhab-types";

const timerFactory: any = javascriptUtils.timerFactory;

export interface Timer {

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

/**
 * 
 * @param seconds 
 * @param fn 
 * @returns 
 */
const createTimerSeconds = (seconds: number, fn: () => void): Timer => {
  return timerFactory.createTimer(ZonedDateTime.now().plusSeconds(seconds), fn);
}

/**
 * 
 * @param millis 
 * @param fn 
 * @returns 
 */
const createTimerMillis = (millis: number, fn: () => void): Timer => {
  return timerFactory.createTimer(ZonedDateTime.now().plusNanos(millis * 1000000), fn);
}

/**
 * 
 * @param time 
 * @param fn 
 * @returns 
 */
const createTimer = (time: java.time.ZonedDateTime, fn: () => void): Timer => {
  const timer: Timer = timerFactory.createTimer(time, fn);
  return timer;
}

/**
 * Cancel all running timers of the global instance (per rule)
 */
const cancelAllTimers = () => {
  if (timerFactory != null) {
    timerFactory.removeAll();
  }
}

/**
 * Returns a NOW ZonedDateTime object
 */
const now = () => ZonedDateTime.now();

const midnight = () => {
  const ChronoField: any = Java.type("java.time.temporal.ChronoField");
  return now().with(ChronoField.HOUR_OF_DAY, 0)
};

export { now, midnight, createTimerMillis, createTimerSeconds, createTimer, cancelAllTimers}