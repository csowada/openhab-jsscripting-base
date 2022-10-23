import { events, ir, DateTimeType, DecimalType, UNDEF, NULL} from "@runtime";
import { getItemChannelLinkRegistry } from "./things";
import { fromSet } from "./java-utils";
import { getLogger } from "./logger";

export type ItemNameOrItem = string | org.openhab.core.items.Item;
type ReturnItemsMap<T extends string> = {[K in T]: org.openhab.core.items.Item | null};
type CallbackSpreadArray<T> = (...states: T[]) => void;

const logger = getLogger("items.ts");

type XXX = {
  ABC: org.openhab.core.items.Item
  [key: string]: org.openhab.core.items.Item
}

/**
 * Provides a proxy object to load a item via a property like 
 * 
 *  ```const item = allItems.KitchenLight```
 */
export const allItems = new Proxy<any>({}, {
  get: function (target, name, receiver): org.openhab.core.items.Item | null {
      if (typeof name === 'string' && !/^-?\d+$/.test(name)) {
          return ir.getItem(name);
      }

      throw Error("unsupported function call: " + name.toString());
  }
}) as {[key: string]: org.openhab.core.items.Item}; // overwrite to make Typescript happy

/**
 * 
 * @param item 
 * @param value 
 * @returns 
 */
export const postUpdate = (item: ItemNameOrItem, value: org.openhab.core.types.State | number | string): any | null => {
  const itm = getItem(item);
  if (itm) {

    // Fix Issue: Error:  TypeError: invokeMember (postUpdate) on org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent@5de018ac failed due to: Multiple applicable overloads found for method name 
    if (value instanceof DecimalType) {
      return events.postUpdate(itm, value.toFullString());
    } else {
      return events.postUpdate(itm, value);
    }
    
  } else {
    logger.warn("postUpdate() failed, item \"{}\" not found!", item)
  }

  return null;
}

/**
 * Sends a command to an item
 * @param item 
 * @param value 
 * @returns 
 */
export const sendCommand = (item: ItemNameOrItem, value: org.openhab.core.types.State | number | string): any | null => {
  const itm = getItem(item);
  if (itm) {
    return events.sendCommand(itm, value);
  } else {
    logger.warn("sendCommand() failed, item \"{}\" not found!", item)
  }

  return null;
}

/**
 * Sends a command to an item if the state is not equals
 * @param itemName 
 * @param state 
 */
export const sendCommandOnChange = (itemName: ItemNameOrItem, state: org.openhab.core.types.State | number | string) => {
  getItem(itemName, (item) => {
    if (!stateEquals(item, state)) {
      sendCommand(item, state);
    }
  });
}

export const getGroupItem = (item: ItemNameOrItem, callback?: (item: org.openhab.core.items.GroupItem, members: org.openhab.core.items.Item[]) => void): org.openhab.core.items.GroupItem | null => {
  const itm = getItem(item);
  if (itm) {
    const groupItem = itm as any as org.openhab.core.items.GroupItem;
    if (callback) {
      callback(groupItem, fromSet(groupItem.getAllMembers()));
    }
    return groupItem;
  }
  return null;
}

export const getGroupMembersItems = (item: ItemNameOrItem): org.openhab.core.items.Item[] => {

  const itm = getItem(item);
  if (itm) {
    const groupItem = itm as org.openhab.core.items.GroupItem;
    return fromSet(groupItem.getMembers());
  }

  return [];
}

/**
 * Returns the name of an Item or the item name as string
 * @param item 
 * @returns 
 */
export const getName = (item: ItemNameOrItem) => {
  if(typeof item == "object") {
    return item.name;
  }
  return item;
};

/**
 * 
 * @param item 
 * @param callback 
 */
export const getItem = (item: ItemNameOrItem, callback?: (item: org.openhab.core.items.Item) => void): org.openhab.core.items.Item | null => {

  let itm: org.openhab.core.items.Item | null;

  if (typeof item == "string") {
    try {
      itm = ir.getItem(item);

    } catch (e) {
      logger.debug("Unable to find item with name \"{}\" !", item);
      itm = null;
    }
  } else {
    itm = item;
  }

  if (callback && itm) {
    callback(itm);
  }

  return itm;
}

/**
 * 
 * @param item 
 */
export const isValidState = (item: ItemNameOrItem | null): boolean => {

  if (!item) {
    return false;
  }

  const itm = getItem(item);
  if (itm && itm.getState() !== UNDEF && itm.getState() !== NULL) {
    return true;
  }

  return false;
}

/**
 * 
 * @param itemNames 
 */
export const getItems = <T extends string>(...itemNames: T[]): ReturnItemsMap<T> => {
  return itemNames.reduce((oldType: ReturnItemsMap<T>, type) => ({ ...oldType, [type]: getItem(type) }), {} as ReturnItemsMap<T>)
}

/**
 * 
 * @param type 
 * @param itemNames 
 * @param callback 
 */
export const resolveStates = <U extends org.openhab.core.types.State>(type: java.lang.Class<U>, itemNames: ItemNameOrItem[], callback?: CallbackSpreadArray<U>): U[] => {
  let allFine = true;

  const values = itemNames.map(x => {
    let value = getItem(x)?.getStateAs(type) || null;

    if (!value) {
      allFine = false;
    }

    return value;
  });

  if (allFine) {
    const x = values as U[];
    if(callback) {
      callback(...x);
    }
    return x;
  }

  return [];
}

/**
 * 
 * @param itemName 
 * @param callback 
 */
export const stateAsString = (itemName: ItemNameOrItem, callback?: (value: string) => void): string | null => {

  let item = getItem(itemName);
  if (item) {

    if(item.getState() === UNDEF || item.getState() === NULL) {
      return null;
    }

    let v = item.getState().toFullString();

    if (callback) {
      callback(v);
    }
    return v;
  }

  return null;
}

export const stateEquals = (itemName: ItemNameOrItem | null | undefined, value: any) => {

  if(itemName == null || itemName == undefined) {
    return false;
  }

  if (typeof value == "number") {
    return stateAsNumber(itemName) == value;

  } else if (typeof value == "string") {
    return stateAsString(itemName) == value;
    
  } else {
    let item = getItem(itemName);
    if (item) {
      return item.getState() === value;
    }
  }

  return false;
}

/**
 * 
 * @param itemName 
 * @param callback 
 */
export const stateAsNumber = (itemName: ItemNameOrItem, callback?: (value: number) => void): number => {

  let item = getItem(itemName);
  if (item) {
    let state = item.getState().as(DecimalType);
    if (state instanceof DecimalType) {
      let v: number = Number(state.toBigDecimal() as any as number);

      if (callback) {
        callback(v);
      }

      return v;
    }
  }

  return NaN;
}



export const statesAsNumber = (itemNames: ItemNameOrItem[], callback: (values: number[]) => void): void => {

  const results: number[] = [];

  itemNames.forEach(element => {
    const v = stateAsNumber(element);
    if(isNaN(v)) {
      return;
    }

    results.push(v);
  });

  callback(results);
}

/**
 * 
 * @param itemName 
 * @param callback 
 */
export const stateAsDateTime = (itemName: ItemNameOrItem, callback?: (value: java.time.ZonedDateTime) => void): java.time.ZonedDateTime | null => {

  const dateTime = getItem(itemName)?.getStateAs(DateTimeType)?.getZonedDateTime() || null;
  if (dateTime && callback) {
    callback(dateTime);
  }
  return dateTime;
}

/**
 * Set all items to NULL for a given thing and its channels
 * @param thing 
 */
 export const clearAllLinkedThingItems = (thing: org.openhab.core.thing.Thing) => {
  const itemChannelLinkRegistry = getItemChannelLinkRegistry();
  Java.from(thing.getChannels()).forEach(channel => {
    const linkedItems = fromSet(itemChannelLinkRegistry.getLinkedItems(channel.getUID()));
    linkedItems.forEach(item => {
      if (item.getState() !== UNDEF && item.getState() !== NULL) {
        // logger.info("     -xxx-->" + item.getName() + "-" + item.getState());
        postUpdate(item.getName(), NULL);
      }
    });
  });
}