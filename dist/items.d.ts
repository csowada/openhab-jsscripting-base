export declare type ItemNameOrItem = string | org.openhab.core.items.Item;
declare type ReturnItemsMap<T extends string> = {
    [K in T]: org.openhab.core.items.Item | null;
};
declare type CallbackSpreadArray<T> = (...states: T[]) => void;
/**
 * Provides a proxy object to load a item via a property like
 *
 *  ```const item = allItems.KitchenLight```
 */
export declare const allItems: {
    [key: string]: org.openhab.core.items.Item;
};
/**
 *
 * @param item
 * @param value
 * @returns
 */
export declare const postUpdate: (item: ItemNameOrItem, value: org.openhab.core.types.State | number | string) => any | null;
/**
 * Sends a command to an item
 * @param item
 * @param value
 * @returns
 */
export declare const sendCommand: (item: ItemNameOrItem, value: org.openhab.core.types.State | number | string) => any | null;
/**
 * Sends a command to an item if the state is not equals
 * @param itemName
 * @param state
 */
export declare const sendCommandOnChange: (itemName: ItemNameOrItem, state: org.openhab.core.types.State | number | string) => void;
export declare const getGroupItem: (item: ItemNameOrItem, callback?: ((item: org.openhab.core.items.GroupItem, members: org.openhab.core.items.Item[]) => void) | undefined) => org.openhab.core.items.GroupItem | null;
export declare const getGroupMembersItems: (item: ItemNameOrItem) => org.openhab.core.items.Item[];
/**
 * Returns the name of an Item or the item name as string
 * @param item
 * @returns
 */
export declare const getName: (item: ItemNameOrItem) => string;
/**
 *
 * @param item
 * @param callback
 */
export declare const getItem: (item: ItemNameOrItem, callback?: ((item: org.openhab.core.items.Item) => void) | undefined) => org.openhab.core.items.Item | null;
/**
 *
 * @param item
 */
export declare const isValidState: (item: ItemNameOrItem | null) => boolean;
/**
 *
 * @param itemNames
 */
export declare const getItems: <T extends string>(...itemNames: T[]) => ReturnItemsMap<T>;
/**
 *
 * @param type
 * @param itemNames
 * @param callback
 */
export declare const resolveStates: <U extends org.openhab.core.types.State>(type: java.lang.Class<U>, itemNames: ItemNameOrItem[], callback?: CallbackSpreadArray<U> | undefined) => U[];
/**
 *
 * @param itemName
 * @param callback
 */
export declare const stateAsString: (itemName: ItemNameOrItem, callback?: ((value: string) => void) | undefined) => string | null;
export declare const stateEquals: (itemName: ItemNameOrItem | null | undefined, value: any) => boolean;
/**
 *
 * @param itemName
 * @param callback
 */
export declare const stateAsNumber: (itemName: ItemNameOrItem, callback?: ((value: number) => void) | undefined) => number;
export declare const statesAsNumber: (itemNames: ItemNameOrItem[], callback: (values: number[]) => void) => void;
/**
 *
 * @param itemName
 * @param callback
 */
export declare const stateAsDateTime: (itemName: ItemNameOrItem, callback?: ((value: java.time.ZonedDateTime) => void) | undefined) => java.time.ZonedDateTime | null;
/**
 * Set all items to NULL for a given thing and its channels
 * @param thing
 */
export declare const clearAllLinkedThingItems: (thing: org.openhab.core.thing.Thing) => void;
export {};
