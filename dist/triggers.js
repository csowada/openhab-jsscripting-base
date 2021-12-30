"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOfDayTrigger = exports.GenericCronTrigger = exports.ItemCommandTrigger = exports.ItemStateUpdateTrigger = exports.ItemStateChangeTrigger = exports.GroupStateUpdateTrigger = exports.GroupStateChangeTrigger = exports.ChannelEventTrigger = exports.createTrigger = void 0;
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
        groupName,
        "state": state?.toFullString(),
        "previousState": previousState?.toFullString()
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
        groupName,
        "state": state?.toFullString(),
        "previousState": previousState?.toFullString()
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
        itemName,
        "state": state?.toFullString(),
        "oldState": oldState?.toFullString()
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
        itemName,
        "state": state?.toFullString(),
        "oldState": oldState?.toFullString()
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
 * @param {String} itemName the name of the item to monitor for change
 * @param {String} [command] the command received
 * @param {String} [triggerName] the name of the trigger to create
 */
const ItemCommandTrigger = (itemName, command, triggerName) => (0, exports.createTrigger)({
    typeString: "core.ItemCommandTrigger", name: triggerName, config: {
        "itemName": itemName,
        "command": command?.toFullString()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQStEO0FBRS9EOzs7OztHQUtHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUE2RSxFQUFFLEVBQUU7SUFFdkksSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNoRCxNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFNLGdCQUFnQixDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUUsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyw2QkFBYSxDQUFDLGFBQWEsRUFBRTtTQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1osV0FBVyxDQUFDLFVBQVUsQ0FBQztTQUN2QixpQkFBaUIsQ0FBQyxJQUFJLDZCQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUMsS0FBSyxFQUFFLENBQUM7QUFDYixDQUFDLENBQUE7QUFaWSxRQUFBLGFBQWEsaUJBWXpCO0FBRUQsdUpBQXVKO0FBQ2hKLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFnRSxFQUFFLEVBQUUsQ0FBQyxJQUFBLHFCQUFhLEVBQUM7SUFDckosVUFBVSxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO1FBQ2pFLFVBQVU7UUFDVixLQUFLO0tBQ047Q0FDRixDQUFDLENBQUE7QUFMVyxRQUFBLG1CQUFtQix1QkFLOUI7QUFFRixNQUFNO0FBQ04sK0RBQStEO0FBQy9ELE1BQU07QUFDTixjQUFjO0FBQ2Qsb0RBQW9EO0FBQ3BELE1BQU07QUFDTixrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBQ3hCLHlF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