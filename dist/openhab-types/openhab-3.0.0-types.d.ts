export declare const ItemStateChangedEvent: org.openhab.core.items.events.ItemStateChangedEvent;
export declare const ItemCommandEvent: org.openhab.core.items.events.ItemCommandEvent;
export declare const GroupItemStateChangedEvent: org.openhab.core.items.events.GroupItemStateChangedEvent;
export declare const ItemEvent: org.openhab.core.items.events.ItemEvent;
export declare const ItemUpdatedEvent: org.openhab.core.items.events.ItemUpdatedEvent;
export declare const ItemStateEvent: org.openhab.core.items.events.ItemStateEvent;
interface SimpleRuleStatic {
    readonly class: any;
    new (): org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule;
}
export declare const SimpleRule: SimpleRuleStatic;
interface ConfigurationStatic {
    readonly class: any;
    new (arg0: {
        [index: string]: any;
    }): org.openhab.core.config.core.Configuration;
    new (arg0: org.openhab.core.config.core.Configuration): org.openhab.core.config.core.Configuration;
    new (): org.openhab.core.config.core.Configuration;
}
export declare const Configuration: ConfigurationStatic;
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
export declare const TriggerBuilder: TriggerBuilderStatic;
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
export declare const ModuleBuilder: ModuleBuilderStatic;
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
export declare const ActionBuilder: ActionBuilderStatic;
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
export declare const ConditionBuilder: ConditionBuilderStatic;
export {};
