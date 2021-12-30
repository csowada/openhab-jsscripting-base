"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateAsDateTime = exports.statesAsNumber = exports.stateAsNumber = exports.stateEquals = exports.stateAsString = exports.resolveStates = exports.getItems = exports.isValidState = exports.getItem = exports.getGroupItem = exports.sendCommand = exports.postUpdate = exports.allItems = void 0;
const _runtime_1 = require("@runtime");
const java_utils_1 = require("./java-utils");
const logger_1 = require("./logger");
const openhab_types_1 = require("./openhab-types");
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
        if (value instanceof openhab_types_1.DecimalType) {
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
    if (itm && itm.getState() !== openhab_types_1.UnDefType.UNDEF && itm.getState() !== openhab_types_1.UnDefType.NULL) {
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
        if (item.getState() === openhab_types_1.UnDefType.UNDEF || item.getState() === openhab_types_1.UnDefType.NULL) {
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
        let state = item.getState().as(openhab_types_1.DecimalType.class);
        if (state instanceof org.openhab.core.library.types.DecimalType) {
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
    const dateTime = (0, exports.getItem)(itemName)?.getStateAs(openhab_types_1.DateTimeType.class)?.getZonedDateTime() || null;
    if (dateTime && callback) {
        callback(dateTime);
    }
    return dateTime;
};
exports.stateAsDateTime = stateAsDateTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXFDO0FBQ3JDLDZDQUF1QztBQUN2QyxxQ0FBcUM7QUFDckMsbURBQXVFO0FBTXZFLE1BQU0sTUFBTSxHQUFHLElBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQztBQUVyQzs7OztHQUlHO0FBQ1UsUUFBQSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQU0sRUFBRSxFQUFFO0lBQ3pDLEdBQUcsRUFBRSxVQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUTtRQUNqQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxhQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQWlELENBQUMsQ0FBQyxxQ0FBcUM7QUFFekY7Ozs7O0dBS0c7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQW9CLEVBQUUsS0FBcUQsRUFBYyxFQUFFO0lBQ3BILE1BQU0sR0FBRyxHQUFHLElBQUEsZUFBTyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLElBQUksR0FBRyxFQUFFO1FBRVAseU5BQXlOO1FBQ3pOLElBQUksS0FBSyxZQUFZLDJCQUFXLEVBQUU7WUFDaEMsT0FBTyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLE9BQU8saUJBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0tBRUY7U0FBTTtRQUNMLE1BQU0sQ0FBQyxJQUFJLENB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