import { ItemNameOrItem } from "./items";
declare type StateOrStringOrNumber = org.openhab.core.types.State | string | number | undefined;
/**
 *
 * @param typeString
 * @param name
 * @param config
 */
export declare const createTrigger: ({ typeString, name, config }: {
    typeString: string;
    name?: string | undefined;
    config: {
        [index: string]: any;
    };
}) => org.openhab.core.automation.Trigger;
export declare const ChannelEventTrigger: ({ channelUID, event, triggerName }: {
    channelUID: string;
    event?: string | undefined;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
/**
 * Creates a trigger that fires upon a item changing state within a group.
 *
 * @param param0
 * @returns
 */
export declare const GroupStateChangeTrigger: ({ groupName, state, previousState, triggerName }: {
    groupName: ItemNameOrItem;
    state?: StateOrStringOrNumber;
    previousState?: StateOrStringOrNumber;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
/**
 * Creates a trigger that fires upon an item receiving a state update within a group. Note that the item does not need to change state.
 *
 * @param param0
 * @returns
 */
export declare const GroupStateUpdateTrigger: ({ groupName, state, previousState, triggerName }: {
    groupName: ItemNameOrItem;
    state?: StateOrStringOrNumber;
    previousState?: StateOrStringOrNumber;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
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
export declare const ItemStateChangeTrigger: ({ itemName, state, oldState, triggerName }: {
    itemName: ItemNameOrItem;
    oldState?: StateOrStringOrNumber;
    state?: StateOrStringOrNumber;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
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
export declare const ItemStateUpdateTrigger: ({ itemName, state, oldState, triggerName }: {
    itemName: ItemNameOrItem;
    oldState?: StateOrStringOrNumber;
    state?: StateOrStringOrNumber;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
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
export declare const ItemCommandTrigger: (itemName: ItemNameOrItem, command?: org.openhab.core.types.Command | undefined, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
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
export declare const GenericCronTrigger: (expression: string, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
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
export declare const TimeOfDayTrigger: (time: string, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
/**
 * Creates a trigger that fires upon an Thing status updating
 *
 * @example
 * ThingStatusUpdateTrigger('some:thing:uuid','OFFLINE')
 *
 * @name ThingStatusUpdateTrigger
 * @memberof triggers
 * @param {String} thingUID the name of the thing to monitor for a status updating
 * @param {String} [status] the optional status to monitor for
 * @param {String} [triggerName] the name of the trigger to create
 */
export declare const ThingStatusUpdateTrigger: (thingUID: string, status?: string | undefined, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
/**
* Creates a trigger that fires upon an Thing status changing
*
* @example
* ThingStatusChangeTrigger('some:thing:uuid','ONLINE','OFFLINE')
*
* @name ThingStatusChangeTrigger
* @memberof triggers
* @param {String} thingUID the name of the thing to monitor for a status change
* @param {String} [status] the optional status to monitor for
* @param {String} [previousStatus] the optional previous state to monitor from
* @param {String} [triggerName] the optional name of the trigger to create
*/
export declare const ThingStatusChangeTrigger: (thingUID: string, status?: string | undefined, previousStatus?: string | undefined, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
/**
 * Creates a trigger that fires if a given start level is reached by the system
 *
 * @example
 * SystemStartlevelTrigger(40)  //Rules loaded
 * ...
 * SystemStartlevelTrigger(50)  //Rule engine started
 * ...
 * SystemStartlevelTrigger(70)  //User interfaces started
 * ...
 * SystemStartlevelTrigger(80)  //Things initialized
 * ...
 * SystemStartlevelTrigger(100) //Startup Complete
 *
 * @name SystemStartlevelTrigger
 * @memberof triggers
 * @param {String} startlevel the system start level to be triggered on
 * @param {String} [triggerName] the name of the trigger to create
 */
export declare const SystemStartlevelTrigger: (startlevel: string, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
export {};
