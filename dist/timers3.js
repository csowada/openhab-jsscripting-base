"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTimerSeconds = exports.createTimerMillis = exports.midnight = exports.now = void 0;
// import javascriptUtils from "@runtime/JavaScriptUtils";
const openhab_types_1 = require("./openhab-types");
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
const createTimerMillis = (millis, fn) => {
    return setTimeout(fn, millis);
};
exports.createTimerMillis = createTimerMillis;
/**
 * Create a Timer based on seconds
 * @param seconds
 * @param fn
 * @returns
 */
const createTimerSeconds = (seconds, fn) => {
    return createTimerMillis(seconds * 1000, fn);
};
exports.createTimerSeconds = createTimerSeconds;
/**
 * Returns a NOW ZonedDateTime object
 */
/**
 * Returns a NOW ZonedDateTime object
 * @returns ZonedDateTime object
 */
const now = () => openhab_types_1.ZonedDateTime.now();
exports.now = now;
/**
 * Returns midnight
 * @returns
 */
const midnight = () => {
    return now().withHour(0).withMinute(0).withSecond(0).withNano(0);
};
exports.midnight = midnight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXJzMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aW1lcnMzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUEwRDtBQUMxRCxtREFBZ0Q7QUFFaEQsMERBQTBEO0FBRTFELG9CQUFvQjtBQUVwQixRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixzQkFBc0I7QUFFdEIsUUFBUTtBQUNSLDBFQUEwRTtBQUMxRSxRQUFRO0FBRVIsNkJBQTZCO0FBRTdCLFFBQVE7QUFDUixxRUFBcUU7QUFDckUsUUFBUTtBQUNSLHdCQUF3QjtBQUV4QixRQUFRO0FBQ1Isb0VBQW9FO0FBQ3BFLFFBQVE7QUFDUix5QkFBeUI7QUFFekIsUUFBUTtBQUNSLG1EQUFtRDtBQUNuRCxRQUFRO0FBQ1IsMERBQTBEO0FBQzFELElBQUk7QUFFSiw4QkFBOEI7QUFFOUIsNkNBQTZDO0FBTTdDLFFBQVE7QUFDUix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLFFBQVE7QUFDUixpQ0FBaUM7QUFDakMsc0JBQXNCO0FBQ3RCLGlDQUFpQztBQUNqQyxNQUFNO0FBRU4sUUFBUTtBQUNSLGlDQUFpQztBQUNqQyxRQUFRO0FBQ1IsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUVKOzs7OztHQUtHO0FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFjLEVBQVUsRUFBRTtJQUNuRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFBO0FBOEJ1Qiw4Q0FBaUI7QUE1QnpDOzs7OztHQUtHO0FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFjLEVBQVUsRUFBRTtJQUNyRSxPQUFPLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBO0FBb0IwQyxnREFBa0I7QUFsQjdEOztHQUVHO0FBRUg7OztHQUdHO0FBQ0gsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsNkJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQVU3QixrQkFBRztBQVJaOzs7R0FHRztBQUNILE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtJQUNwQixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFFWSw0QkFBUSJ9