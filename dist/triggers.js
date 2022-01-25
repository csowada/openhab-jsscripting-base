"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOfDayTrigger = exports.GenericCronTrigger = exports.ItemCommandTrigger = exports.ItemStateUpdateTrigger = exports.ItemStateChangeTrigger = exports.GroupStateUpdateTrigger = exports.GroupStateChangeTrigger = exports.ChannelEventTrigger = exports.createTrigger = void 0;
const items_1 = require("./items");
const openhab_types_1 = require("./openhab-types");
/**
 *
 * @param typeString
 * @param name
 * @param config
 */
const createTrigger = ({ typeString, name, config }) => {
    if (typeof name === "undefined" || name === null) {
        const uuid = Java.type("java.util.UUID").randomUUID().toString();
        name = uuid;
    }
    return openhab_types_1.ModuleBuilder.createTrigger()
        .withId(name)
        .withTypeUID(typeString)
        .withConfiguration(new openhab_types_1.Configuration(config))
        .build();
};
exports.createTrigger = createTrigger;
const getStateString = (state) => {
    if (typeof state === "undefined") {
        return undefined;
    }
    else if (typeof state === "string") {
        return state;
    }
    else if (typeof state === "number") {
        return state.toString();
    }
    else {
        return state.toFullString();
    }
};
// export const ChannelEventTrigger = (channel: string, event: string, triggerName: string) => createTrigger("core.ChannelEventTrigger", triggerName, {
const ChannelEventTrigger = ({ channelUID, event, triggerName }) => (0, exports.createTrigger)({
    typeString: "core.ChannelEventTrigger", name: triggerName, config: {
        channelUID,
        event
    }
});
exports.ChannelEventTrigger = ChannelEventTrigger;
// /**
//  * Creates a trigger that fires upon an item changing state.
//  * 
//  * @example
//  * ItemStateChangeTrigger('my_item', 'OFF', 'ON')
//  * 
//  * @name ItemStateChangeTrigger
//  * @memberof triggers
//  * @param {String} itemName the name of the item to monitor for change
//  * @param {String} [oldState] the previous state of the item
//  * @param {String} [newState] the new state of the item
//  * @param {String} [triggerName] the name of the trigger to create
//  */
// export const ItemStateChangeTrigger = (itemName: string, oldState: org.openhab.core.types.State, newState: org.openhab.core.types.State, triggerName: string) => createTrigger("core.ItemStateChangeTrigger", triggerName, {
//     "itemName": itemName,
//     "state": newState,
//     "oldState": oldState
// })
/**
 * Creates a trigger that fires upon a item changing state within a group.
 *
 * @param param0
 * @returns
 */
const GroupStateChangeTrigger = ({ groupName, state, previousState, triggerName }) => (0, exports.createTrigger)({
    typeString: "core.GroupStateChangeTrigger", name: triggerName, config: {
        groupName: (0, items_1.getName)(groupName),
        state: getStateString(state),
        previousState: getStateString(previousState)
    }
});
exports.GroupStateChangeTrigger = GroupStateChangeTrigger;
/**
 * Creates a trigger that fires upon an item receiving a state update within a group. Note that the item does not need to change state.
 *
 * @param param0
 * @returns
 */
const GroupStateUpdateTrigger = ({ groupName, state, previousState, triggerName }) => (0, exports.createTrigger)({
    typeString: "core.GroupStateUpdateTrigger", name: triggerName, config: {
        groupName: (0, items_1.getName)(groupName),
        state: getStateString(state),
        previousState: getStateString(previousState)
    }
});
exports.GroupStateUpdateTrigger = GroupStateUpdateTrigger;
/**
 * Creates a trigger that fires upon an item changing state.
 *
 * @example
 * ItemStateChangeTrigger('my_item', 'OFF', 'ON')
 *
 * @name ItemStateChangeTrigger
 * @memberof triggers
 * @param {String} itemName the name of the item to monitor for change
 * @param {String} [oldState] the previous state of the item
 * @param {String} [newState] the new state of the item
 * @param {String} [triggerName] the name of the trigger to create
 */
const ItemStateChangeTrigger = ({ itemName, state, oldState, triggerName }) => (0, exports.createTrigger)({
    typeString: "core.ItemStateChangeTrigger", name: triggerName, config: {
        itemName: (0, items_1.getName)(itemName),
        state: getStateString(state),
        oldState: getStateString(oldState)
    }
});
exports.ItemStateChangeTrigger = ItemStateChangeTrigger;
/**
 * Creates a trigger that fires upon an item receiving a state update. Note that the item does not need to change state.
 *
 * @example
 * ItemStateUpdateTrigger('my_item', 'OFF')
 *
 * @name ItemStateUpdateTrigger
 * @memberof triggers
 * @param {String} itemName the name of the item to monitor for change
 * @param {String} [state] the new state of the item
 * @param {String} [triggerName] the name of the trigger to create
 */
const ItemStateUpdateTrigger = ({ itemName, state, oldState, triggerName }) => (0, exports.createTrigger)({
    typeString: "core.ItemStateUpdateTrigger", name: triggerName, config: {
        itemName: (0, items_1.getName)(itemName),
        state: getStateString(state),
        oldState: getStateString(oldState)
    }
});
exports.ItemStateUpdateTrigger = ItemStateUpdateTrigger;
/**
 * Creates a trigger that fires upon an item receiving a command. Note that the item does not need to change state.
 *
 * @example
 * ItemCommandTrigger('my_item', 'OFF')
 *
 * @name ItemCommandTrigger
 * @memberof triggers
 * @param {ItemNameOrItem} itemName the name of the item to monitor for change
 * @param {String} [command] the command received
 * @param {String} [triggerName] the name of the trigger to create
 */
const ItemCommandTrigger = (itemName, command, triggerName) => (0, exports.createTrigger)({
    typeString: "core.ItemCommandTrigger", name: triggerName, config: {
        itemName: (0, items_1.getName)(itemName),
        command: command?.toFullString()
    }
});
exports.ItemCommandTrigger = ItemCommandTrigger;
/**
 * Creates a trigger that fires on a cron schedule. The supplied cron expression defines when the trigger will fire.
 *
 * @example
 * GenericCronTrigger('0 30 16 * * ? *')
 *
 * @name GenericCronTrigger
 * @memberof triggers
 * @param {String} expression the cron expression defining the triggering schedule
 */
const GenericCronTrigger = (expression, triggerName) => (0, exports.createTrigger)({
    typeString: "timer.GenericCronTrigger", name: triggerName, config: {
        "cronExpression": expression
    }
});
exports.GenericCronTrigger = GenericCronTrigger;
/**
 * Creates a trigger that fires daily at a specific time. The supplied time defines when the trigger will fire.
 *
 * @example
 * TimeOfDayTrigger('19:00')
 *
 * @name TimeOfDayTrigger
 * @memberof triggers
 * @param {String} time the time expression defining the triggering schedule
 */
const TimeOfDayTrigger = (time, triggerName) => (0, exports.createTrigger)({
    typeString: "timer.TimeOfDayTrigger", name: triggerName, config: {
        "time": time
    }
});
exports.TimeOfDayTrigger = TimeOfDayTrigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtEO0FBQ2xELG1EQUErRDtBQUkvRDs7Ozs7R0FLRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBNkUsRUFBRSxFQUFFO0lBRXZJLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDaEQsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBTSxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlFLElBQUksR0FBRyxJQUFJLENBQUM7S0FDYjtJQUVELE9BQU8sNkJBQWEsQ0FBQyxhQUFhLEVBQUU7U0FDakMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaLFdBQVcsQ0FBQyxVQUFVLENBQUM7U0FDdkIsaUJBQWlCLENBQUMsSUFBSSw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDLEtBQUssRUFBRSxDQUFDO0FBQ2IsQ0FBQyxDQUFBO0FBWlksUUFBQSxhQUFhLGlCQVl6QjtBQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBNkIsRUFBc0IsRUFBRTtJQUUzRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUNoQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTSxJQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNuQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN6QjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUE7QUFFRCx1SkFBdUo7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