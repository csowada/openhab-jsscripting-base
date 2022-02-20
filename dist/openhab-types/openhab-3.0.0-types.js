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
exports.ConditionBuilder = exports.ActionBuilder = exports.ModuleBuilder = exports.TriggerBuilder = exports.Configuration = exports.SimpleRule = exports.ThingStatusInfoChangedEvent = exports.ItemStateEvent = exports.ItemUpdatedEvent = exports.ItemEvent = exports.GroupItemStateChangedEvent = exports.ItemCommandEvent = exports.ItemStateChangedEvent = void 0;
// events
exports.ItemStateChangedEvent = Java.type("org.openhab.core.items.events.ItemStateChangedEvent");
exports.ItemCommandEvent = Java.type("org.openhab.core.items.events.ItemCommandEvent");
exports.GroupItemStateChangedEvent = Java.type("org.openhab.core.items.events.GroupItemStateChangedEvent");
exports.ItemEvent = Java.type("org.openhab.core.items.events.ItemEvent");
exports.ItemUpdatedEvent = Java.type("org.openhab.core.items.events.ItemUpdatedEvent");
exports.ItemStateEvent = Java.type("org.openhab.core.items.events.ItemStateEvent");
exports.ThingStatusInfoChangedEvent = Java.type("org.openhab.core.thing.events.ThingStatusInfoChangedEvent");
exports.SimpleRule = Java.type("org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule");
exports.Configuration = Java.type("org.openhab.core.config.core.Configuration");
exports.TriggerBuilder = Java.type("org.openhab.core.automation.util.TriggerBuilder");
exports.ModuleBuilder = Java.type("org.openhab.core.automation.util.ModuleBuilder");
exports.ActionBuilder = Java.type("org.openhab.core.automation.util.ActionBuilder");
exports.ConditionBuilder = Java.type("org.openhab.core.automation.util.ConditionBuilder");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmhhYi0zLjAuMC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVuaGFiLXR5cGVzL29wZW5oYWItMy4wLjAtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0c7QUFDSCwyQ0FBMkM7OztBQUUzQyxTQUFTO0FBQ0ksUUFBQSxxQkFBcUIsR0FBd0QsSUFBSSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzlJLFFBQUEsZ0JBQWdCLEdBQW1ELElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUMvSCxRQUFBLDBCQUEwQixHQUE2RCxJQUFJLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDN0osUUFBQSxTQUFTLEdBQTRDLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMxRyxRQUFBLGdCQUFnQixHQUFtRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDL0gsUUFBQSxjQUFjLEdBQWlELElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUN6SCxRQUFBLDJCQUEyQixHQUE4RCxJQUFJLENBQUMsSUFBSSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7QUFRaEssUUFBQSxVQUFVLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztBQVczSCxRQUFBLGFBQWEsR0FBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBZ0I3RixRQUFBLGNBQWMsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBY3BHLFFBQUEsYUFBYSxHQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFpQmpHLFFBQUEsYUFBYSxHQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFnQmpHLFFBQUEsZ0JBQWdCLEdBQTJCLElBQUksQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQyJ9