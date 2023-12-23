"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRule = void 0;
const RuleSupport_1 = require("@runtime/RuleSupport");
const openhab_types_1 = require("./openhab-types");
// import { extractNewState, extractPreviousState, extractReceivedCommand, extractTriggeringItemName } from './events';
const java_utils_1 = require("./java-utils");
const logger_1 = require("./logger");
const openhab_types_2 = require("./openhab-types");
const logger = (0, logger_1.getLogger)("libs/rules.ts");
/**
 * Creates a rule with all required properties and usually add to automation manager
 * @param params Parameters as object
 */
const createRule = (params) => {
    const SimpleRuleExt = Java.extend(openhab_types_2.SimpleRule);
    // wrap rule in a final try-catch block to receive the error!
    const execute = (action, input) => {
        try {
            params.execute(action, input, {
                receivedCommand: extractReceivedCommand(input),
                newState: extractNewState(input),
                previousState: extractPreviousState(input),
                triggeringItemName: extractTriggeringItemName(input),
                thingEvent: extractThingStatusInfoChangedEvent(input)
            });
        }
        catch (e) {
            console.error("------------------------------------------");
            console.error("# Error: ", e.toString());
            console.error("------------------------------------------");
            logger.error("------------------------------------------");
            logger.error("# Error: See console for more details");
            logger.error(`# Failed to execute rule ${e}: ${e.stack}`);
            logger.error("------------------------------------------");
        }
    };
    const rule = new SimpleRuleExt({ execute: execute });
    if (params.triggers && params.triggers.length > 0) {
        rule.setTriggers(params.triggers);
    }
    if (params.name) {
        rule.setName(params.name);
    }
    if (params.description) {
        rule.setDescription(params.description);
    }
    if (params.tags) {
        rule.setTags((0, java_utils_1.toSet)(params.tags));
    }
    if (typeof params.autoAdd === 'undefined' || params.autoAdd === true) {
        // logger.warn("Jeha");
        // return automationManager.addRule(rule);
        RuleSupport_1.automationManager.addRule(rule);
    }
    return rule;
};
exports.createRule = createRule;
const callTypEquals = (input, classType, cb) => {
    const event = input?.get("event");
    if (event && event.class === classType) {
        return cb(event);
    }
    return undefined;
};
const extractThingStatusInfoChangedEvent = (input) => {
    let result = callTypEquals(input, openhab_types_1.ThingStatusInfoChangedEvent, (y) => y);
    if (result)
        return result;
    return undefined;
};
const extractTriggeringItemName = (input) => {
    let result = callTypEquals(input, openhab_types_1.ItemStateChangedEvent, (y) => y.getItemName());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.ItemStateEvent, (y) => y.getItemName());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.GroupItemStateChangedEvent, (y) => y.getItemName());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.ItemCommandEvent, (y) => y.getItemName());
    if (result)
        return result;
    return undefined;
};
const extractNewState = (input) => {
    let result = callTypEquals(input, openhab_types_1.ItemStateChangedEvent, (y) => y.getItemState());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.ItemStateEvent, (y) => y.getItemState());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.GroupItemStateChangedEvent, (y) => y.getItemState());
    if (result)
        return result;
    return undefined;
};
const extractReceivedCommand = (input) => {
    let result = callTypEquals(input, openhab_types_1.ItemCommandEvent, (y) => y.getItemCommand());
    if (result)
        return result;
    return undefined;
};
const extractPreviousState = (input) => {
    let result = callTypEquals(input, openhab_types_1.ItemStateChangedEvent, (y) => y.getOldItemState());
    if (result)
        return result;
    result = callTypEquals(input, openhab_types_1.GroupItemStateChangedEvent, (y) => y.getOldItemState());
    if (result)
        return result;
    return undefined;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQXlEO0FBQ3pELG1EQUFtSjtBQUVuSix1SEFBdUg7QUFDdkgsNkNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxtREFBNkM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBbUMxQzs7O0dBR0c7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQXFCLEVBQWtGLEVBQUU7SUFDbEksTUFBTSxhQUFhLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBVSxDQUFDLENBQUM7SUFFbkQsNkRBQTZEO0lBQzdELE1BQU0sT0FBTyxHQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxJQUFJO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUM1QixlQUFlLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQztnQkFDaEMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLEtBQUssQ0FBQztnQkFDMUMsa0JBQWtCLEVBQUUseUJBQXlCLENBQUMsS0FBSyxDQUFDO2dCQUNwRCxVQUFVLEVBQUUsa0NBQWtDLENBQUMsS0FBSyxDQUFDO2FBQ3RELENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7WUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBQzNELE1BQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQTtZQUMx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