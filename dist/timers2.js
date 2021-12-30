"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.midnight = exports.now = exports.TimerControl = void 0;
const JavaScriptUtils_1 = __importDefault(require("@runtime/JavaScriptUtils"));
const openhab_types_1 = require("./openhab-types");
const timerFactory = JavaScriptUtils_1.default.timerFactory;
class TimerControl {
    constructor() {
        this.timers = new Set();
        /**
         * Create a Timer based on seconds
         * @param seconds
         * @param fn
         * @returns
         */
        this.createTimerSeconds = (seconds, fn) => {
            return this.createTimerMillis(seconds * 1000, fn);
        };
        /**
         * Create a Timer based on millliseconds
         * @param millis
         * @param fn
         * @returns
         */
        this.createTimerMillis = (millis, fn) => {
            const t = setTimeout(fn, millis);
            this.timers.add(t);
            return t;
        };
        /**
         * Cancel one timer
         * @param timer
         */
        this.cancel = (timer) => {
            timer.cancel();
            this.timers.delete(timer);
        };
        /**
         * Cancel all pending timers
         */
        this.cancelAllTimers = () => {
            if (this.timers != null) {
                this.timers.forEach(t => t.cancel());
                this.timers.clear();
            }
        };
    }
    ;
}
exports.TimerControl = TimerControl;
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
    const ChronoField = Java.type("java.time.temporal.ChronoField");
    return (0, exports.now)().with(ChronoField.HOUR_OF_DAY, 0);
};
exports.midnight = midnight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXJzMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aW1lcnMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtFQUF1RDtBQUN2RCxtREFBZ0Q7QUFFaEQsTUFBTSxZQUFZLEdBQVEseUJBQWUsQ0FBQyxZQUFZLENBQUM7QUErQnZELE1BQWEsWUFBWTtJQUF6QjtRQUVVLFdBQU0sR0FBZSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXZDOzs7OztXQUtHO1FBQ0gsdUJBQWtCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBYyxFQUFTLEVBQUU7WUFDOUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNILHNCQUFpQixHQUFHLENBQUMsTUFBYyxFQUFFLEVBQWMsRUFBUyxFQUFFO1lBQzVELE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFpQixDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFBO1FBRUQ7OztXQUdHO1FBQ0gsV0FBTSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDeEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFBO1FBRUQ7O1dBRUc7UUFDSCxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQTFDd0MsQ0FBQztDQTBDekM7QUE1Q0Qsb0NBNENDO0FBRUQ7O0dBRUc7QUFFSDs7O0dBR0c7QUFDSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyw2QkFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQWhDLFFBQUEsR0FBRyxPQUE2QjtBQUU3Qzs7O0dBR0c7QUFDSSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDM0IsTUFBTSxXQUFXLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sSUFBQSxXQUFHLEdBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQUM7QUFIVyxRQUFBLFFBQVEsWUFHbkIifQ==