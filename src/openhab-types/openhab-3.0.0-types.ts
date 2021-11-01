/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
//// <reference path="openhab-3.0.0.d.ts"/>

// events
export const ItemStateChangedEvent: org.openhab.core.items.events.ItemStateChangedEvent = Java.type("org.openhab.core.items.events.ItemStateChangedEvent");
export const ItemCommandEvent: org.openhab.core.items.events.ItemCommandEvent = Java.type("org.openhab.core.items.events.ItemCommandEvent");
export const GroupItemStateChangedEvent: org.openhab.core.items.events.GroupItemStateChangedEvent = Java.type("org.openhab.core.items.events.GroupItemStateChangedEvent");
export const ItemEvent: org.openhab.core.items.events.ItemEvent = Java.type("org.openhab.core.items.events.ItemEvent");
export const ItemUpdatedEvent: org.openhab.core.items.events.ItemUpdatedEvent = Java.type("org.openhab.core.items.events.ItemUpdatedEvent");
export const ItemStateEvent: org.openhab.core.items.events.ItemStateEvent = Java.type("org.openhab.core.items.events.ItemStateEvent");

interface SimpleRuleStatic {

  readonly class: any;
  new(): org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule;
}

export const SimpleRule: SimpleRuleStatic = Java.type("org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule");

interface ConfigurationStatic {

  readonly class: any;
  new(arg0: { [index: string]: any }): org.openhab.core.config.core.Configuration;
  // new(arg0: java.util.Map<string, any /*java.lang.Object*/>): org.openhab.core.config.core.Configuration;
  new(arg0: org.openhab.core.config.core.Configuration): org.openhab.core.config.core.Configuration;
  new(): org.openhab.core.config.core.Configuration;
}

export const Configuration: ConfigurationStatic = Java.type("org.openhab.core.config.core.Configuration");

interface TriggerBuilderStatic {

  readonly class: any;
  create<B, T>(arg0: org.openhab.core.automation.Module): org.openhab.core.automation.util.ModuleBuilder<B, T>;
  create(arg0: org.openhab.core.automation.Trigger): org.openhab.core.automation.util.TriggerBuilder;
  create(): org.openhab.core.automation.util.TriggerBuilder;
  createAction(arg0: org.openhab.core.automation.Action): org.openhab.core.automation.util.ActionBuilder;
  createAction(): org.openhab.core.automation.util.ActionBuilder;
  createCondition(): org.openhab.core.automation.util.ConditionBuilder;
  createCondition(arg0: org.openhab.core.automation.Condition): org.openhab.core.automation.util.ConditionBuilder;
  createTrigger(arg0: org.openhab.core.automation.Trigger): org.openhab.core.automation.util.TriggerBuilder;
  createTrigger(): org.openhab.core.automation.util.TriggerBuilder;
}

export const TriggerBuilder: TriggerBuilderStatic = Java.type("org.openhab.core.automation.util.TriggerBuilder");

interface ModuleBuilderStatic {

  readonly class: any;
  create<B, T>(arg0: org.openhab.core.automation.Module): org.openhab.core.automation.util.ModuleBuilder<B, T>;
  createAction(arg0: org.openhab.core.automation.Action): org.openhab.core.automation.util.ActionBuilder;
  createAction(): org.openhab.core.automation.util.ActionBuilder;
  createCondition(): org.openhab.core.automation.util.ConditionBuilder;
  createCondition(arg0: org.openhab.core.automation.Condition): org.openhab.core.automation.util.ConditionBuilder;
  createTrigger(arg0: org.openhab.core.automation.Trigger): org.openhab.core.automation.util.TriggerBuilder;
  createTrigger(): org.openhab.core.automation.util.TriggerBuilder;
}

export const ModuleBuilder: ModuleBuilderStatic = Java.type("org.openhab.core.automation.util.ModuleBuilder");


interface ActionBuilderStatic {

  readonly class: any;
  create<B, T>(arg0: org.openhab.core.automation.Module): org.openhab.core.automation.util.ModuleBuilder<B, T>;
  create(arg0: org.openhab.core.automation.Action): org.openhab.core.automation.util.ActionBuilder;
  create(): org.openhab.core.automation.util.ActionBuilder;
  createAction(arg0: org.openhab.core.automation.Action): org.openhab.core.automation.util.ActionBuilder;
  createAction(): org.openhab.core.automation.util.ActionBuilder;
  createCondition(): org.openhab.core.automation.util.ConditionBuilder;
  createCondition(arg0: org.openhab.core.automation.Condition): org.openhab.core.automation.util.ConditionBuilder;
  createTrigger(arg0: org.openhab.core.automation.Trigger): org.openhab.core.automation.util.TriggerBuilder;
  createTrigger(): org.openhab.core.automation.util.TriggerBuilder;
}

export const ActionBuilder: ActionBuilderStatic = Java.type("org.openhab.core.automation.util.ActionBuilder");

interface ConditionBuilderStatic {

  readonly class: any;
  create<B, T>(arg0: org.openhab.core.automation.Module): org.openhab.core.automation.util.ModuleBuilder<B, T>;
  create(arg0: org.openhab.core.automation.Condition): org.openhab.core.automation.util.ConditionBuilder;
  create(): org.openhab.core.automation.util.ConditionBuilder;
  createAction(arg0: org.openhab.core.automation.Action): org.openhab.core.automation.util.ActionBuilder;
  createAction(): org.openhab.core.automation.util.ActionBuilder;
  createCondition(): org.openhab.core.automation.util.ConditionBuilder;
  createCondition(arg0: org.openhab.core.automation.Condition): org.openhab.core.automation.util.ConditionBuilder;
  createTrigger(arg0: org.openhab.core.automation.Trigger): org.openhab.core.automation.util.TriggerBuilder;
  createTrigger(): org.openhab.core.automation.util.TriggerBuilder;
}

export const ConditionBuilder: ConditionBuilderStatic = Java.type("org.openhab.core.automation.util.ConditionBuilder");