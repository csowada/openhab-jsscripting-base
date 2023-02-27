"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJsDateToLocalDateTime = exports.toMap = exports.fromSet = exports.toSet = void 0;
const openhab_types_1 = require("./openhab-types");
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
const convertJsDateToLocalDateTime = (s) => openhab_types_1.LocalDateTime.of(s.getFullYear(), s.getMonth() + 1, s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds());
exports.convertJsDateToLocalDateTime = convertJsDateToLocalDateTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9qYXZhLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRDtBQUVoRDs7O0dBR0c7QUFDSSxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQWdCLEVBQUUsRUFBRTtJQUN4QyxNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsTUFBTSxHQUFHLEdBQTBCLElBQUksT0FBTyxFQUFFLENBQUM7SUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQTtBQUxZLFFBQUEsS0FBSyxTQUtqQjtBQUVNLE1BQU0sT0FBTyxHQUFHLENBQUksR0FBcUIsRUFBTyxFQUFFO0lBQ3ZELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQTtJQUN0QixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTtBQU5ZLFFBQUEsT0FBTyxXQU1uQjtBQUVNLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBNkIsRUFBRSxFQUFFO0lBQ3JELE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxNQUFNLEdBQUcsR0FBa0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztJQUNILGtDQUFrQztJQUNsQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQTtBQVJZLFFBQUEsS0FBSyxTQVFqQjtBQUVNLE1BQU0sNEJBQTRCLEdBQUcsQ0FBQyxDQUFPLEVBQUUsRUFBRSxDQUFDLDZCQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtBQUE3SyxRQUFBLDRCQUE0QixnQ0FBaUoifQ==