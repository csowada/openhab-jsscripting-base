"use strict";
/**
 * Shared cache namespace.
 * This namespace provides a default cache that can be use to set and retrieve objects that will be persisted between reloads of scripts.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.put = exports.get = void 0;
const _runtime_1 = require("@runtime");
/**
 * Returns the value to which the specified key is mapped
 *
 * @example <caption>Get a previously set value with a default value (times = 0)</caption>
 * let counter = cache.get("counter", () => ({ "times": 0 }));
 * console.log("Count",counter.times++);
 *
 * @example <caption>Get a previously set object</caption>
 * let counter = cache.get("counter");
 * if(counter == null){
 *      counter = {times: 0};
 *      cache.put("counter", counter);
 * }
 * console.log("Count",counter.times++);
 *
 * @memberof cache
 * @param {string} key the key whose associated value is to be returned
 * @param {function} [defaultSupplier] if the specified key is not already associated with a value, this function will return a default value
 * @returns {(*|null)} the current object for the supplied key, a default value if defaultSupplier is provided, or null
 */
const get = (key, defaultSupplier) => {
    if (typeof defaultSupplier === 'function') {
        return _runtime_1.sharedcache.get(key, defaultSupplier);
    }
    else {
        return _runtime_1.sharedcache.get(key);
    }
};
exports.get = get;
/**
 * Associates the specified value with the specified key
 *
 * @memberof cache
 * @param {string} key key with which the specified value is to be associated
 * @param {*} value value to be associated with the specified key
 * @returns {(*|null)} the previous value associated with null, or null if there was no mapping for key
 */
const put = (key, value) => {
    return _runtime_1.sharedcache.put(key, value);
};
exports.put = put;
/**
 * Removes the mapping for a key from this map if it is present
 *
 * @memberof cache
 * @param {string} key key whose mapping is to be removed from the map
 * @returns {(*|null)} the previous value associated with key or null if there was no mapping for key
 */
const remove = (key) => {
    return _runtime_1.sharedcache.remove(key);
};
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILHVDQUFnRDtBQUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBVyxFQUFFLGVBQXFCLEVBQUUsRUFBRTtJQUN0RCxJQUFJLE9BQU8sZUFBZSxLQUFLLFVBQVUsRUFBRTtRQUN2QyxPQUFPLHNCQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMxQztTQUFNO1FBQ0gsT0FBTyxzQkFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNMLENBQUMsQ0FBQTtBQU5ZLFFBQUEsR0FBRyxPQU1mO0FBRUQ7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBWSxFQUFFO0lBQ3JELE9BQU8sc0JBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQUZZLFFBQUEsR0FBRyxPQUVmO0FBRUQ7Ozs7OztHQU1HO0FBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFXLEVBQVksRUFBRTtJQUM1QyxPQUFPLHNCQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQTtBQUZZLFFBQUEsTUFBTSxVQUVsQiJ9