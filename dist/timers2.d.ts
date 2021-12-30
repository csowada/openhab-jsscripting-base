interface Timer {
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
export declare class TimerControl {
    private timers;
    /**
     * Create a Timer based on seconds
     * @param seconds
     * @param fn
     * @returns
     */
    createTimerSeconds: (seconds: number, fn: () => void) => Timer;
    /**
     * Create a Timer based on millliseconds
     * @param millis
     * @param fn
     * @returns
     */
    createTimerMillis: (millis: number, fn: () => void) => Timer;
    /**
     * Cancel one timer
     * @param timer
     */
    cancel: (timer: Timer) => void;
    /**
     * Cancel all pending timers
     */
    cancelAllTimers: () => void;
}
/**
 * Returns a NOW ZonedDateTime object
 */
/**
 * Returns a NOW ZonedDateTime object
 * @returns ZonedDateTime object
 */
export declare const now: () => java.time.ZonedDateTime;
/**
 * Returns midnight
 * @returns
 */
export declare const midnight: () => java.time.ZonedDateTime;
export {};
