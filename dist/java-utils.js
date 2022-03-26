"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMap = exports.fromSet = exports.toSet = void 0;
/**
 * Convert an array to a ``java.util.Set<>``
 * @param values
 */
const toSet = (values) => {
    const HashSet = Java.type('java.util.HashSet');
    const set = new HashSet();
    values.forEach(x => set.add(x));
    return set;
};
exports.toSet = toSet;
const fromSet = (set) => {
    const result = [];
    set.forEach((entry) => {
        result.push(entry);
    });
    return result;
};
exports.fromSet = fromSet;
const toMap = (values) => {
    const HashMap = Java.type('java.util.HashMap');
    const map = new HashMap();
    Object.keys(values).forEach(key => {
        map.put(key, values[key]);
    });
    // values.forEach(x => set.put());
    return map;
};
exports.toMap = toMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9qYXZhLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7R0FHRztBQUNJLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBZ0IsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxNQUFNLEdBQUcsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBO0FBTFksUUFBQSxLQUFLLFNBS2pCO0FBRU0sTUFBTSxPQUFPLEdBQUcsQ0FBSSxHQUFxQixFQUFPLEVBQUU7SUFDdkQsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFBO0lBQ3RCLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBTlksUUFBQSxPQUFPLFdBTW5CO0FBRU0sTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUE2QixFQUFFLEVBQUU7SUFDckQsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sR0FBRyxHQUFrQyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsa0NBQWtDO0lBQ2xDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBO0FBUlksUUFBQSxLQUFLLFNBUWpCIn0=