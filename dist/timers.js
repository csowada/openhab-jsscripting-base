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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RpbWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMEQ7QUFDMUQsbURBQWdEO0FBRWhELDBEQUEwRDtBQUUxRCxvQkFBb0I7QUFFcEIsUUFBUTtBQUNSLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1Isc0JBQXNCO0FBRXRCLFFBQVE7QUFDUiwwRUFBMEU7QUFDMUUsUUFBUTtBQUVSLDZCQUE2QjtBQUU3QixRQUFRO0FBQ1IscUVBQXFFO0FBQ3JFLFFBQVE7QUFDUix3QkFBd0I7QUFFeEIsUUFBUTtBQUNSLG9FQUFvRTtBQUNwRSxRQUFRO0FBQ1IseUJBQXlCO0FBRXpCLFFBQVE7QUFDUixtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLDBEQUEwRDtBQUMxRCxJQUFJO0FBRUosOEJBQThCO0FBRTlCLDZDQUE2QztBQU03QyxRQUFRO0FBQ1Isd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1IsaUNBQWlDO0FBQ2pDLHNCQUFzQjtBQUN0QixpQ0FBaUM7QUFDakMsTUFBTTtBQUVOLFFBQVE7QUFDUixpQ0FBaUM7QUFDakMsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsOENBQThDO0FBQzlDLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUk7QUFFSjs7Ozs7R0FLRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBYyxFQUFVLEVBQUU7SUFDbkUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQThCdUIsOENBQWlCO0FBNUJ6Qzs7Ozs7R0FLRztBQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBYyxFQUFVLEVBQUU7SUFDckUsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQTtBQW9CMEMsZ0RBQWtCO0FBbEI3RDs7R0FFRztBQUVIOzs7R0FHRztBQUNILE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLDZCQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7QUFVN0Isa0JBQUc7QUFSWjs7O0dBR0c7QUFDSCxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDcEIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBRVksNEJBQVEifQ==