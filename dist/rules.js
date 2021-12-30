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
                triggeringItemName: extractTriggeringItemName(input)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQXlEO0FBQ3pELG1EQUFzSDtBQUV0SCx1SEFBdUg7QUFDdkgsNkNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxtREFBNkM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBaUMxQzs7O0dBR0c7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQXFCLEVBQWtGLEVBQUU7SUFDbEksTUFBTSxhQUFhLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBVSxDQUFDLENBQUM7SUFFbkQsNkRBQTZEO0lBQzdELE1BQU0sT0FBTyxHQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxJQUFJO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUM1QixlQUFlLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQztnQkFDaEMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLEtBQUssQ0FBQztnQkFDMUMsa0JBQWtCLEVBQUUseUJBQXlCLENBQUMsS0FBSyxDQUFDO2FBQ3JELENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7WUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBQzNELE1BQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQTtZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7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