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
    groupName: string;
    state?: org.openhab.core.types.State | undefined;
    previousState?: org.openhab.core.types.State | undefined;
    triggerName?: string | undefined;
}) => org.openhab.core.automation.Trigger;
/**
 * Creates a trigger that fires upon an item receiving a state update within a group. Note that the item does not need to change state.
 *
 * @param param0
 * @returns
 */
export declare const GroupStateUpdateTrigger: ({ groupName, state, previousState, triggerName }: {
    groupName: string;
    state?: org.openhab.core.types.State | undefined;
    previousState?: org.openhab.core.types.State | undefined;
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
    itemName: string;
    oldState?: org.openhab.core.types.State | undefined;
    state?: org.openhab.core.types.State | undefined;
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
    itemName: string;
    oldState?: org.openhab.core.types.State | undefined;
    state?: org.openhab.core.types.State | undefined;
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
 * @param {String} itemName the name of the item to monitor for change
 * @param {String} [command] the command received
 * @param {String} [triggerName] the name of the trigger to create
 */
export declare const ItemCommandTrigger: (itemName: string, command?: org.openhab.core.types.Command | undefined, triggerName?: string | undefined) => org.openhab.core.automation.Trigger;
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
