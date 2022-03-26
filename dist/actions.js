"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpAction = exports.getMqttAction = exports.getSendMailAction = exports.getActions = void 0;
const logger_1 = require("./logger");
const logger = (0, logger_1.getLogger)("actions.ts");
const ScriptServiceUtil = Java.type("org.openhab.core.model.script.ScriptServiceUtil");
const HTTP = Java.type("org.openhab.core.model.script.actions.HTTP");
const getActionScope = (thingAction) => {
    const ThingActionsScope = Java.type("org.openhab.core.thing.binding.ThingActionsScope");
    const scopeAnnotation = thingAction.class.getAnnotation(ThingActionsScope.class);
    if (scopeAnnotation) {
        return scopeAnnotation.name();
    }
};
const getThingUID = (thingAction) => {
    const thing = thingAction.getThingHandler().getThing();
    return thing.getUID();
};
/**
 * Returns a scoped thing action
 * @param scope Scope like ``mail``
 * @param uid The thing UID
 */
const getActions = (scope, uid) => {
    if (scope && uid) {
        const thingActions = Java.from(ScriptServiceUtil.getThingActions());
        const result = thingActions.filter(thingAction => getActionScope(thingAction) === scope && getThingUID(thingAction));
        if (result.length > 0) {
            return result[0];
        }
    }
    return undefined;
};
exports.getActions = getActions;
const getSendMailAction = (uid) => {
    return getActions("mail", uid);
};
exports.getSendMailAction = getSendMailAction;
const getMqttAction = (uid) => {
    return getActions("mqtt", uid);
};
exports.getMqttAction = getMqttAction;
const getHttpAction = () => {
    return HTTP;
};
exports.getHttpAction = getHttpAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUVyQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGtCQUFTLEVBQUMsWUFBWSxDQUFDLENBQUM7QUFFdkMsTUFBTSxpQkFBaUIsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDNUYsTUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBbUNqRixNQUFNLGNBQWMsR0FBRyxDQUFDLFdBQWdCLEVBQUUsRUFBRTtJQUUxQyxNQUFNLGlCQUFpQixHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUM3RixNQUFNLGVBQWUsR0FBUSxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0RixJQUFJLGVBQWUsRUFBRTtRQUNuQixPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMvQjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsV0FBZ0IsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sS0FBSyxHQUFRLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFFaEQsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1FBQ2hCLE1BQU0sWUFBWSxHQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM5RSxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVySCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUE7QUFlQyxnQ0FBVTtBQWJaLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUN4QyxPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFtQixDQUFDO0FBQ25ELENBQUMsQ0FBQTtBQVlDLDhDQUFpQjtBQVZuQixNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ3BDLE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQWUsQ0FBQztBQUMvQyxDQUFDLENBQUE7QUFTQyxzQ0FBYTtBQVBmLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUN6QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQTtBQU1DLHNDQUFhIn0=