"use strict";
//// <reference path="../@types/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const LoggerFactory = Java.type("org.slf4j.LoggerFactory");
/**
 * My function with
 * @param filename
 * @returns
 */
const getLogger = (filename) => {
    return LoggerFactory.getLogger("scripting." + filename);
};
exports.getLogger = getLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDOzs7QUFFOUMsTUFBTSxhQUFhLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRWhFOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtJQUM1QyxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBcUIsQ0FBQztBQUM5RSxDQUFDLENBQUM7QUFGVyxRQUFBLFNBQVMsYUFFcEIifQ==