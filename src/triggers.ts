import { Configuration, ModuleBuilder } from "./openhab-types";

/**
 * 
 * @param typeString 
 * @param name 
 * @param config 
 */
export const createTrigger = ({ typeString, name, config }: { typeString: string; name?: string; config: { [index: string]: any; }; }) => {

    if (typeof name === "undefined" || name === null) {
        const uuid: string = (<any>Java.type("java.util.UUID")).randomUUID().toString();
        name = uuid;
    }

    var trigger = ModuleBuilder.createTrigger()
        .withId(name)
        .withTypeUID(typeString)
        .withConfiguration(new Configuration(config))
        .build();

    return trigger;
}
// export const ChannelEventTrigger = (channel: string, event: string, triggerName: string) => createTrigger("core.ChannelEventTrigger", triggerName, {
export const ChannelEventTrigger = ({channelUID, event, triggerName}: {channelUID: string, event?: string, triggerName?: string}) => createTrigger({
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
export const ItemStateChangeTrigger = ({itemName, state, oldState, triggerName}: {itemName: string, oldState?: org.openhab.core.types.State, state?: org.openhab.core.types.State, triggerName?: string}) => createTrigger({
        typeString: "core.ItemStateChangeTrigger", name: triggerName, config: {
            itemName,
            "state": state?.toFullString(),
            "oldState": oldState?.toFullString()
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
export const ItemStateUpdateTrigger = (itemName: string, state?: org.openhab.core.types.State, triggerName?: string) => createTrigger({
        typeString: "core.ItemStateUpdateTrigger", name: triggerName, config: {
            "itemName": itemName,
            "state": state?.toFullString()
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
 * @param {String} itemName the name of the item to monitor for change
 * @param {String} [command] the command received
 * @param {String} [triggerName] the name of the trigger to create
 */
export const ItemCommandTrigger = (itemName: string, command?: org.openhab.core.types.Command, triggerName?: string) => createTrigger({
        typeString: "core.ItemCommandTrigger", name: triggerName, config: {
            "itemName": itemName,
            "command": command?.toFullString()
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