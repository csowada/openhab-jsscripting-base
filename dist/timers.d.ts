import { ZonedDateTime } from "./openhab-types";
export interface Timer {
    /**
     * Cancels the timer
     */
    cancel(): boolean;
    /**
     * Determines whether the scheduled execution has already terminated.
     */
    hasTerminated(): boolean;
    /**
     *  Determines whether the scheduled execution is yet to happen.
     */
    isActive(): boolean;
    /**
     * Determines whether the scheduled code is currently executed.
     */
    isRunning(): boolean;
    /**
     * Reschedules a timer to a new starting time.
     */
    reschedule(newTime: java.time.ZonedDateTime): boolean;
}
/**
 *
 * @param seconds
 * @param fn
 * @returns
 */
declare const createTimerSeconds: (seconds: number, fn: () => void) => Timer;
/**
 *
 * @param millis
 * @param fn
 * @returns
 */
declare const createTimerMillis: (millis: number, fn: () => void) => Timer;
/**
 *
 * @param time
 * @param fn
 * @returns
 */
declare const createTimer: (time: java.time.ZonedDateTime, fn: () => void) => Timer;
/**
 * Cancel all running timers of the global instance (per rule)
 */
declare const cancelAllTimers: () => void;
/**
 * Returns a NOW ZonedDateTime object
 */
declare const now: () => java.time.ZonedDateTime;
declare const midnight: () => java.time.ZonedDateTime;
export { now, midnight, createTimerMillis, createTimerSeconds, createTimer, cancelAllTimers };
