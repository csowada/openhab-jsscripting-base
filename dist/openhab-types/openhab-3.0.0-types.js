"use strict";
/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
//// <reference path="openhab-3.0.0.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionBuilder = exports.ActionBuilder = exports.ModuleBuilder = exports.TriggerBuilder = exports.Configuration = exports.SimpleRule = exports.ItemStateEvent = exports.ItemUpdatedEvent = exports.ItemEvent = exports.GroupItemStateChangedEvent = exports.ItemCommandEvent = exports.ItemStateChangedEvent = void 0;
// events
exports.ItemStateChangedEvent = Java.type("org.openhab.core.items.events.ItemStateChangedEvent");
exports.ItemCommandEvent = Java.type("org.openhab.core.items.events.ItemCommandEvent");
exports.GroupItemStateChangedEvent = Java.type("org.openhab.core.items.events.GroupItemStateChangedEvent");
exports.ItemEvent = Java.type("org.openhab.core.items.events.ItemEvent");
exports.ItemUpdatedEvent = Java.type("org.openhab.core.items.events.ItemUpdatedEvent");
exports.ItemStateEvent = Java.type("org.openhab.core.items.events.ItemStateEvent");
exports.SimpleRule = Java.type("org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule");
exports.Configuration = Java.type("org.openhab.core.config.core.Configuration");
exports.TriggerBuilder = Java.type("org.openhab.core.automation.util.TriggerBuilder");
exports.ModuleBuilder = Java.type("org.openhab.core.automation.util.ModuleBuilder");
exports.ActionBuilder = Java.type("org.openhab.core.automation.util.ActionBuilder");
exports.ConditionBuilder = Java.type("org.openhab.core.automation.util.ConditionBuilder");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmhhYi0zLjAuMC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVuaGFiLXR5cGVzL29wZW5oYWItMy4wLjAtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0c7QUFDSCwyQ0FBMkM7OztBQUUzQyxTQUFTO0FBQ0ksUUFBQSxxQkFBcUIsR0FBd0QsSUFBSSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzlJLFFBQUEsZ0JBQWdCLEdBQW1ELElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUMvSCxRQUFBLDBCQUEwQixHQUE2RCxJQUFJLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDN0osUUFBQSxTQUFTLEdBQTRDLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMxRyxRQUFBLGdCQUFnQixHQUFtRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDL0gsUUFBQSxjQUFjLEdBQWlELElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztBQVF6SCxRQUFBLFVBQVUsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO0FBVzNILFFBQUEsYUFBYSxHQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFnQjdGLFFBQUEsY0FBYyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFjcEcsUUFBQSxhQUFhLEdBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQWlCakcsUUFBQSxhQUFhLEdBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQWdCakcsUUFBQSxnQkFBZ0IsR0FBMkIsSUFBSSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDIn0=