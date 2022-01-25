import { getName, ItemNameOrItem } from "./items";
import { Configuration, ModuleBuilder } from "./openhab-types";

type StateOrStringOrNumber = org.openhab.core.types.State | string | number | undefined;

/**
 * 
 * @param typeString 
 * @param name 
 * @param config 
 */
export const createTrigger = ({ typeString, name, config }: { typeString: string; name?: string; config: { [index: string]: any; }; }) => {

  if (typeof name === "undefined" || name === null) {
    const uuid: string = Java.type<any>("java.util.UUID").randomUUID().toString();
    name = uuid;
  }

  return ModuleBuilder.createTrigger()
    .withId(name)
    .withTypeUID(typeString)
    .withConfiguration(new Configuration(config))
    .build();
}

const getStateString = (state : StateOrStringOrNumber): string | undefined => {

  if (typeof state === "undefined") {
    return undefined;
  } else if (typeof state === "string") {
    return state;
  } else if(typeof state === "number") {
    return state.toString();
  } else {
    return state.toFullString();
  }
}

// export const ChannelEventTrigger = (channel: string, event: string, triggerName: string) => createTrigger("core.ChannelEventTrigger", triggerName, {
export const ChannelEventTrigger = ({ channelUID, event, triggerName }: { channelUID: string, event?: string, triggerName?: string }) => createTrigger({
  typeString: "core.ChannelEventTrigger", name: triggerName, config: {
    channelUID,
    event
  }
})

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
 export const GroupStateChangeTrigger = ({ groupName, state, previousState, triggerName }: { groupName: ItemNameOrItem, state?: StateOrStringOrNumber, previousState?: StateOrStringOrNumber, triggerName?: string  }) => createTrigger({
  typeString: "core.GroupStateChangeTrigger", name: triggerName, config: {
    groupName: getName(groupName),
    state: getStateString(state),
    previousState: getStateString(previousState)
  }
});

/**
 * Creates a trigger that fires upon an item receiving a state update within a group. Note that the item does not need to change state.
 * 
 * @param param0 
 * @returns 
 */
 export const GroupStateUpdateTrigger = ({ groupName, state, previousState, triggerName }: { groupName: ItemNameOrItem, state?: StateOrStringOrNumber, previousState?: StateOrStringOrNumber, triggerName?: string  }) => createTrigger({
  typeString: "core.GroupStateUpdateTrigger", name: triggerName, config: {
    groupName: getName(groupName),
    state: getStateString(state),
    previousState: getStateString(previousState)
  }
});

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
export const ItemStateChangeTrigger = ({ itemName, state, oldState, triggerName }: { itemName: ItemNameOrItem, oldState?: StateOrStringOrNumber, state?: StateOrStringOrNumber, triggerName?: string }) => createTrigger({
  typeString: "core.ItemStateChangeTrigger", name: triggerName, config: {
    itemName: getName(itemName),
    state: getStateString(state),
    oldState: getStateString(oldState)
  }
})

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
export const ItemStateUpdateTrigger = ({ itemName, state, oldState, triggerName }: { itemName: ItemNameOrItem, oldState?: StateOrStringOrNumber, state?: StateOrStringOrNumber, triggerName?: string }) => createTrigger({
  typeString: "core.ItemStateUpdateTrigger", name: triggerName, config: {
    itemName: getName(itemName),
    state: getStateString(state),
    oldState: getStateString(oldState)
  }
})

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
export const ItemCommandTrigger = (itemName: ItemNameOrItem, command?: org.openhab.core.types.Command, triggerName?: string) => createTrigger({
  typeString: "core.ItemCommandTrigger", name: triggerName, config: {
    itemName: getName(itemName),
    command: command?.toFullString()
  }
})

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
export const GenericCronTrigger = (expression: string, triggerName?: string) => createTrigger({
  typeString: "timer.GenericCronTrigger", name: triggerName, config: {
    "cronExpression": expression
  }
})

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
export const TimeOfDayTrigger = (time: string, triggerName?: string) => createTrigger({
  typeString: "timer.TimeOfDayTrigger", name: triggerName, config: {
    "time": time
  }
})