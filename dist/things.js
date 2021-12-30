"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThingStatusInfo = void 0;
const logger_1 = require("./logger");
const logger = (0, logger_1.getLogger)("things.ts");
const things = Java.type("org.openhab.core.model.script.actions.Things");
const getThingStatusInfo = (thingUid) => {
    return things.getThingStatusInfo(thingUid);
};
exports.getThingStatusInfo = getThingStatusInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RoaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFFckMsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztBQU92RSxNQUFNLGtCQUFrQixHQUFHLENBQUMsUUFBZ0IsRUFBMEIsRUFBRTtJQUM3RSxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQW9CLENBQUM7QUFDaEUsQ0FBQyxDQUFBO0FBRlksUUFBQSxrQkFBa0Isc0JBRTlCIn0=