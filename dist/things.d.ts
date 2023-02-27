/**
 *
 * @param thingUid
 * @returns
 */
export declare const getThingStatusInfo: (thingUid: string) => org.openhab.core.thing.ThingStatusInfo | null;
/**
 *
 * @returns
 */
export declare const getThingRegistry: () => org.openhab.core.thing.ThingRegistry;
export declare const getThingManager: () => any;
/**
 * Enable/Disable a thing
 * @param thingId Thing Id
 * @param enable ``true`` to enable, or ``false`` to disable
 */
export declare const enableThing: (thingId: string, enable: boolean) => void;
/**
 *
 * @returns
 */
export declare const getItemChannelLinkRegistry: () => org.openhab.core.thing.link.ItemChannelLinkRegistry;
/**
 *
 * @returns
 */
export declare const getAllThings: () => org.openhab.core.thing.Thing[];
