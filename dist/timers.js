"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAllTimers = exports.createTimer = exports.createTimerSeconds = exports.createTimerMillis = exports.midnight = exports.now = void 0;
const JavaScriptUtils_1 = __importDefault(require("@runtime/JavaScriptUtils"));
const openhab_types_1 = require("./openhab-types");
const timerFactory = JavaScriptUtils_1.default.timerFactory;
/**
 *
 * @param seconds
 * @param fn
 * @returns
 */
const createTimerSeconds = (seconds, fn) => {
    return timerFactory.createTimer(openhab_types_1.ZonedDateTime.now().plusSeconds(seconds), fn);
};
exports.createTimerSeconds = createTimerSeconds;
/**
 *
 * @param millis
 * @param fn
 * @returns
 */
const createTimerMillis = (millis, fn) => {
    return timerFactory.createTimer(openhab_types_1.ZonedDateTime.now().plusNanos(millis * 1000000), fn);
};
exports.createTimerMillis = createTimerMillis;
/**
 *
 * @param time
 * @param fn
 * @returns
 */
const createTimer = (time, fn) => {
    const timer = timerFactory.createTimer(time, fn);
    return timer;
};
exports.createTimer = createTimer;
/**
 * Cancel all running timers of the global instance (per rule)
 */
const cancelAllTimers = () => {
    if (timerFactory != null) {
        timerFactory.removeAll();
    }
};
exports.cancelAllTimers = cancelAllTimers;
/**
 * Returns a NOW ZonedDateTime object
 */
const now = () => openhab_types_1.ZonedDateTime.now();
exports.now = now;
const midnight = () => {
    const ChronoField = Java.type("java.time.temporal.ChronoField");
    return now().with(ChronoField.HOUR_OF_DAY, 0);
};
exports.midnight = midnight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RpbWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrRUFBdUQ7QUFDdkQsbURBQWdEO0FBRWhELE1BQU0sWUFBWSxHQUFRLHlCQUFlLENBQUMsWUFBWSxDQUFDO0FBK0J2RDs7Ozs7R0FLRztBQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBYyxFQUFTLEVBQUU7SUFDcEUsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQTtBQTBDMEMsZ0RBQWtCO0FBeEM3RDs7Ozs7R0FLRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBYyxFQUFTLEVBQUU7SUFDbEUsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RixDQUFDLENBQUE7QUFnQ3VCLDhDQUFpQjtBQTlCekM7Ozs7O0dBS0c7QUFDSCxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQTZCLEVBQUUsRUFBYyxFQUFTLEVBQUU7SUFDM0UsTUFBTSxLQUFLLEdBQVUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUE7QUFxQjhELGtDQUFXO0FBbkIxRTs7R0FFRztBQUNILE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUMzQixJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7UUFDeEIsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzFCO0FBQ0gsQ0FBQyxDQUFBO0FBWTJFLDBDQUFlO0FBVjNGOztHQUVHO0FBQ0gsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsNkJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQU83QixrQkFBRztBQUxaLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtJQUNwQixNQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDckUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQUM7QUFFWSw0QkFBUSJ9