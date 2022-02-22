"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAllLinkedThingItems = exports.stateAsDateTime = exports.statesAsNumber = exports.stateAsNumber = exports.stateEquals = exports.stateAsString = exports.resolveStates = exports.getItems = exports.isValidState = exports.getItem = exports.getName = exports.getGroupMembersItems = exports.getGroupItem = exports.sendCommandOnChange = exports.sendCommand = exports.postUpdate = exports.allItems = void 0;
const _runtime_1 = require("@runtime");
const things_1 = require("./things");
const java_utils_1 = require("./java-utils");
const logger_1 = require("./logger");
const logger = (0, logger_1.getLogger)("items.ts");
/**
 * Provides a proxy object to load a item via a property like
 *
 *  ```const item = allItems.KitchenLight```
 */
exports.allItems = new Proxy({}, {
    get: function (target, name, receiver) {
        if (typeof name === 'string' && !/^-?\d+$/.test(name)) {
            return _runtime_1.ir.getItem(name);
        }
        throw Error("unsupported function call: " + name.toString());
    }
}); // overwrite to make Typescript happy
/**
 *
 * @param item
 * @param value
 * @returns
 */
const postUpdate = (item, value) => {
    const itm = (0, exports.getItem)(item);
    if (itm) {
        // Fix Issue: Error:  TypeError: invokeMember (postUpdate) on org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent@5de018ac failed due to: Multiple applicable overloads found for method name 
        if (value instanceof _runtime_1.DecimalType) {
            return _runtime_1.events.postUpdate(itm, value.toFullString());
        }
        else {
            return _runtime_1.events.postUpdate(itm, value);
        }
    }
    else {
        logger.warn("postUpdate() failed, item \"{}\" not found!", item);
    }
    return null;
};
exports.postUpdate = postUpdate;
/**
 * Sends a command to an item
 * @param item
 * @param value
 * @returns
 */
const sendCommand = (item, value) => {
    const itm = (0, exports.getItem)(item);
    if (itm) {
        return _runtime_1.events.sendCommand(itm, value);
    }
    else {
        logger.warn("sendCommand() failed, item \"{}\" not found!", item);
    }
    return null;
};
exports.sendCommand = sendCommand;
/**
 * Sends a command to an item if the state is not equals
 * @param itemName
 * @param state
 */
const sendCommandOnChange = (itemName, state) => {
    (0, exports.getItem)(itemName, (item) => {
        if (!(0, exports.stateEquals)(item, state)) {
            (0, exports.sendCommand)(item, state);
        }
    });
};
exports.sendCommandOnChange = sendCommandOnChange;
const getGroupItem = (item, callback) => {
    const itm = (0, exports.getItem)(item);
    if (itm) {
        const groupItem = itm;
        if (callback) {
            callback(groupItem, (0, java_utils_1.fromSet)(groupItem.getAllMembers()));
        }
        return groupItem;
    }
    return null;
};
exports.getGroupItem = getGroupItem;
const getGroupMembersItems = (item) => {
    const itm = (0, exports.getItem)(item);
    if (itm) {
        const groupItem = itm;
        return (0, java_utils_1.fromSet)(groupItem.getMembers());
    }
    return [];
};
exports.getGroupMembersItems = getGroupMembersItems;
/**
 * Returns the name of an Item or the item name as string
 * @param item
 * @returns
 */
const getName = (item) => {
    if (typeof item == "object") {
        return item.name;
    }
    return item;
};
exports.getName = getName;
/**
 *
 * @param item
 * @param callback
 */
const getItem = (item, callback) => {
    let itm;
    if (typeof item == "string") {
        try {
            itm = _runtime_1.ir.getItem(item);
        }
        catch (e) {
            logger.debug("Unable to find item with name \"{}\" !", item);
            itm = null;
        }
    }
    else {
        itm = item;
    }
    if (callback && itm) {
        callback(itm);
    }
    return itm;
};
exports.getItem = getItem;
/**
 *
 * @param item
 */
const isValidState = (item) => {
    if (!item) {
        return false;
    }
    const itm = (0, exports.getItem)(item);
    if (itm && itm.getState() !== _runtime_1.UNDEF && itm.getState() !== _runtime_1.NULL) {
        return true;
    }
    return false;
};
exports.isValidState = isValidState;
/**
 *
 * @param itemNames
 */
const getItems = (...itemNames) => {
    return itemNames.reduce((oldType, type) => ({ ...oldType, [type]: (0, exports.getItem)(type) }), {});
};
exports.getItems = getItems;
/**
 *
 * @param type
 * @param itemNames
 * @param callback
 */
const resolveStates = (type, itemNames, callback) => {
    let allFine = true;
    const values = itemNames.map(x => {
        let value = (0, exports.getItem)(x)?.getStateAs(type) || null;
        if (!value) {
            allFine = false;
        }
        return value;
    });
    if (allFine) {
        const x = values;
        if (callback) {
            callback(...x);
        }
        return x;
    }
    return [];
};
exports.resolveStates = resolveStates;
/**
 *
 * @param itemName
 * @param callback
 */
const stateAsString = (itemName, callback) => {
    let item = (0, exports.getItem)(itemName);
    if (item) {
        if (item.getState() === _runtime_1.UNDEF || item.getState() === _runtime_1.NULL) {
            return null;
        }
        let v = item.getState().toFullString();
        if (callback) {
            callback(v);
        }
        return v;
    }
    return null;
};
exports.stateAsString = stateAsString;
const stateEquals = (itemName, value) => {
    if (itemName == null || itemName == undefined) {
        return false;
    }
    if (typeof value == "number") {
        return (0, exports.stateAsNumber)(itemName) == value;
    }
    else if (typeof value == "string") {
        return (0, exports.stateAsString)(itemName) == value;
    }
    else {
        let item = (0, exports.getItem)(itemName);
        if (item) {
            return item.getState() === value;
        }
    }
    return false;
};
exports.stateEquals = stateEquals;
/**
 *
 * @param itemName
 * @param callback
 */
const stateAsNumber = (itemName, callback) => {
    let item = (0, exports.getItem)(itemName);
    if (item) {
        let state = item.getState().as(_runtime_1.DecimalType);
        if (state instanceof _runtime_1.DecimalType) {
            let v = state.toBigDecimal();
            if (callback) {
                callback(v);
            }
            return v;
        }
    }
    return NaN;
};
exports.stateAsNumber = stateAsNumber;
const statesAsNumber = (itemNames, callback) => {
    const results = [];
    itemNames.forEach(element => {
        const v = (0, exports.stateAsNumber)(element);
        if (isNaN(v)) {
            return;
        }
        results.push(v);
    });
    callback(results);
};
exports.statesAsNumber = statesAsNumber;
/**
 *
 * @param itemName
 * @param callback
 */
const stateAsDateTime = (itemName, callback) => {
    const dateTime = (0, exports.getItem)(itemName)?.getStateAs(_runtime_1.DateTimeType)?.getZonedDateTime() || null;
    if (dateTime && callback) {
        callback(dateTime);
    }
    return dateTime;
};
exports.stateAsDateTime = stateAsDateTime;
/**
 * Set all items to NULL for a given thing and its channels
 * @param thing
 */
const clearAllLinkedThingItems = (thing) => {
    const itemChannelLinkRegistry = (0, things_1.getItemChannelLinkRegistry)();
    Java.from(thing.getChannels()).forEach(channel => {
        const linkedItems = (0, java_utils_1.fromSet)(itemChannelLinkRegistry.getLinkedItems(channel.getUID()));
        linkedItems.forEach(item => {
            if (item.getState() !== _runtime_1.UNDEF && item.getState() !== _runtime_1.NULL) {
                logger.info("     -xxx-->" + item.getName() + "-" + item.getState());
                (0, exports.postUpdate)(item.getName(), _runtime_1.NULL);
            }
        });
    });
};
exports.clearAllLinkedThingItems = clearAllLinkedThingItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTZFO0FBQzdFLHFDQUFzRDtBQUN0RCw2Q0FBdUM7QUFDdkMscUNBQXFDO0FBTXJDLE1BQU0sTUFBTSxHQUFHLElBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQztBQU9yQzs7OztHQUlHO0FBQ1UsUUFBQSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQU0sRUFBRSxFQUFFO0lBQ3pDLEdBQUcsRUFBRSxVQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUTtRQUNqQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxhQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQWlELENBQUMsQ0FBQyxxQ0FBcUM7QUFFekY7Ozs7O0dBS0c7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQW9CLEVBQUUsS0FBcUQsRUFBYyxFQUFFO0lBQ3BILE1BQU0sR0FBRyxHQUFHLElBQUEsZUFBTyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLElBQUksR0FBRyxFQUFFO1FBRVAseU5BQXlOO1FBQ3pOLElBQUksS0FBSyxZQUFZLHNCQUFXLEVBQUU7WUFDaEMsT0FBTyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLE9BQU8saUJBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0tBRUY7U0FBTTtRQUNMLE1BQU0sQ0FBQyxJQUFJLENB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