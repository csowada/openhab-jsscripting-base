import runtime from "@runtime";
import { fromSet } from "./java-utils";
import { getLogger } from "./logger";
import { DateTimeType, DecimalType, UnDefType } from "./openhab-types";

export const events: org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent = runtime.events;
export const itemRegistry: org.openhab.core.items.ItemRegistry = runtime.itemRegistry;
export const ir = itemRegistry;

type ItemNameOrItem = string | org.openhab.core.items.Item;
type ReturnItemsMap<T extends string> = {[K in T]: org.openhab.core.items.Item | null};
type CallbackSpreadArray<T> = (...states: T[]) => void;

const logger = getLogger("items.ts");

export const postUpdate = (item: ItemNameOrItem, arg1: org.openhab.core.types.State | number | string): any | null => {
  const itm = getItem(item);
  if (itm) {

    // Fix Issue: Error:  TypeError: invokeMember (postUpdate) on org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent@5de018ac failed due to: Multiple applicable overloads found for method name 
    if (arg1 instanceof DecimalType) {
      return events.postUpdate(itm, arg1.toFullString());
    } else {
      return events.postUpdate(itm, arg1);
    }
    
  } else {
    logger.warn("postUpdate() failed, item \"{}\" not found!", item)
  }

  return null;
}

export const sendCommand = (item: ItemNameOrItem, arg1: org.openhab.core.types.State | number | string): any | null => {
  const itm = getItem(item);
  if (itm) {
    return events.sendCommand(itm, arg1);
  } else {
    logger.warn("sendCommand() failed, item \"{}\" not found!", item)
  }

  return null;
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
  if (itm && itm.getState() !== UnDefType.UNDEF && itm.getState() !== UnDefType.NULL) {
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
export const resolveStates = <T extends string, U extends org.openhab.core.types.State>(type: U, itemNames: T[], callback?: CallbackSpreadArray<U>): U[] => {
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

    if(item.getState() === UnDefType.UNDEF || item.getState() === UnDefType.NULL) {
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
    let state = item.getState().as(DecimalType.class);
    if (state instanceof org.openhab.core.library.types.DecimalType) {
      let v: number = state.toBigDecimal() as any as number;

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

  const dateTime = getItem(itemName)?.getStateAs(DateTimeType.class)?.getZonedDateTime() || null;
  if (dateTime && callback) {
    callback(dateTime);
  }
  return dateTime;
}
