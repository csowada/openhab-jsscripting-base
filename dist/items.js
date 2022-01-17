"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateAsDateTime = exports.statesAsNumber = exports.stateAsNumber = exports.stateEquals = exports.stateAsString = exports.resolveStates = exports.getItems = exports.isValidState = exports.getItem = exports.getGroupItem = exports.sendCommand = exports.postUpdate = exports.allItems = void 0;
const _runtime_1 = require("@runtime");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXRlbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTZFO0FBQzdFLDZDQUF1QztBQUN2QyxxQ0FBcUM7QUFPckMsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDOzs7O0dBSUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBTSxFQUFFLEVBQUU7SUFDekMsR0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRO1FBQ2pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxPQUFPLGFBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7UUFFRCxNQUFNLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0YsQ0FBaUQsQ0FBQyxDQUFDLHFDQUFxQztBQUV6Rjs7Ozs7R0FLRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBb0IsRUFBRSxLQUFxRCxFQUFjLEVBQUU7SUFDcEgsTUFBTSxHQUFHLEdBQUcsSUFBQSxlQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxHQUFHLEVBQUU7UUFFUCx5TkFBeU47UUFDek4sSUFBSSxLQUFLLFlBQVksc0JBQVcsRUFBRTtZQUNoQyxPQUFPLGlCQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7S0FFRjtTQUFNO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFB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