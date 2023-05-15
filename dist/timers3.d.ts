/**
 * Create a Timer based on millliseconds
 * @param millis
 * @param fn
 * @returns
 */
declare const createTimerMillis: (millis: number, fn: () => void) => number;
/**
 * Create a Timer based on seconds
 * @param seconds
 * @param fn
 * @returns
 */
declare const createTimerSeconds: (seconds: number, fn: () => void) => number;
/**
 * Returns a NOW ZonedDateTime object
 */
/**
 * Returns a NOW ZonedDateTime object
 * @returns ZonedDateTime object
 */
declare const now: () => java.time.ZonedDateTime;
/**
 * Returns midnight
 * @returns
 */
declare const midnight: () => java.time.ZonedDateTime;
export { now, midnight, createTimerMillis, createTimerSeconds };
