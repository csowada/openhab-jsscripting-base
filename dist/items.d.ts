declare type ItemNameOrItem = string | org.openhab.core.items.Item;
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
export declare const sendCommand: (item: ItemNameOrItem, value: org.openhab.core.types.State | number | string) => any | null;
export declare const getGroupItem: (item: ItemNameOrItem, callback?: ((item: org.openhab.core.items.GroupItem, members: org.openhab.core.items.Item[]) => void) | undefined) => org.openhab.core.items.GroupItem | null;
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
export declare const resolveStates: <T extends string, U extends org.openhab.core.types.State>(type: U, itemNames: T[], callback?: CallbackSpreadArray<U> | undefined) => U[];
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
export {};
