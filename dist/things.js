"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllThings = exports.getItemChannelLinkRegistry = exports.enableThing = exports.getThingManager = exports.getThingRegistry = exports.getThingStatusInfo = void 0;
const osgi_1 = require("@runtime/osgi");
const java_utils_1 = require("./java-utils");
const logger_1 = require("./logger");
const logger = (0, logger_1.getLogger)("things.ts");
/**
 *
 * @param thingUid
 * @returns
 */
const getThingStatusInfo = (thingUid) => {
    const things = Java.type("org.openhab.core.model.script.actions.Things");
    return things.getThingStatusInfo(thingUid);
};
exports.getThingStatusInfo = getThingStatusInfo;
/**
 *
 * @returns
 */
const getThingRegistry = () => {
    const ref = osgi_1.bundleContext.getServiceReference("org.openhab.core.thing.ThingRegistry");
    return osgi_1.bundleContext.getService(ref);
};
exports.getThingRegistry = getThingRegistry;
const getThingManager = () => {
    const ref = osgi_1.bundleContext.getServiceReference("org.openhab.core.thing.ThingManager");
    return osgi_1.bundleContext.getService(ref);
};
exports.getThingManager = getThingManager;
/**
 * Enable/Disable a thing
 * @param thingId Thing Id
 * @param enable ``true`` to enable, or ``false`` to disable
 */
const enableThing = (thingId, enable) => {
    const ThingUID = Java.type("org.openhab.core.thing.ThingUID");
    const tid = new ThingUID(thingId);
    (0, exports.getThingManager)().setEnabled(tid, enable);
};
exports.enableThing = enableThing;
/**
 *
 * @returns
 */
const getItemChannelLinkRegistry = () => {
    const ref = osgi_1.bundleContext.getServiceReference("org.openhab.core.thing.link.ItemChannelLinkRegistry");
    return osgi_1.bundleContext.getService(ref);
};
exports.getItemChannelLinkRegistry = getItemChannelLinkRegistry;
/**
 *
 * @returns
 */
const getAllThings = () => {
    return (0, java_utils_1.fromSet)((0, exports.getThingRegistry)().getAll());
};
exports.getAllThings = getAllThings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RoaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBOEM7QUFDOUMsNkNBQXVDO0FBQ3ZDLHFDQUFxQztBQUVyQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGtCQUFTLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFHdEM7Ozs7R0FJRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxRQUFnQixFQUFpRCxFQUFFO0lBQ3BHLE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM5RSxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQTJDLENBQUM7QUFDdkYsQ0FBQyxDQUFBO0FBSFksUUFBQSxrQkFBa0Isc0JBRzlCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxnQkFBZ0IsR0FBRyxHQUF5QyxFQUFFO0lBQ3pFLE1BQU0sR0FBRyxHQUFHLG9CQUFhLENBQUMsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN0RixPQUFPLG9CQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQTtBQUhZLFFBQUEsZ0JBQWdCLG9CQUc1QjtBQUVNLE1BQU0sZUFBZSxHQUFHLEdBQVEsRUFBRTtJQUN2QyxNQUFNLEdBQUcsR0FBRyxvQkFBYSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDckYsT0FBTyxvQkFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUE7QUFIWSxRQUFBLGVBQWUsbUJBRzNCO0FBRUQ7Ozs7R0FJRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBZSxFQUFFLE1BQWUsRUFBRSxFQUFFO0lBRTlELE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNuRSxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQW9DLENBQUM7SUFFckUsSUFBQSx1QkFBZSxHQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUE7QUFOWSxRQUFBLFdBQVcsZUFNdkI7QUFFRDs7O0dBR0c7QUFDSSxNQUFNLDBCQUEwQixHQUFHLEdBQXdELEVBQUU7SUFDbEcsTUFBTSxHQUFHLEdBQUcsb0JBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0lBQ3JHLE9BQU8sb0JBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBO0FBSFksUUFBQSwwQkFBMEIsOEJBR3RDO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQy9CLE9BQU8sSUFBQSxvQkFBTyxFQUFDLElBQUEsd0JBQWdCLEdBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQTtBQUZZLFFBQUEsWUFBWSxnQkFFeEIifQ==