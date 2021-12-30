/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT DEFINITIONS
 *
 */

declare namespace org.openhab.core.types {

  class EventDescription/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getOptions(): java.util.List<EventOption>;
    toString(): string;

  } // end EventDescription

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.types {

  interface StateDescriptionFragment {

    getMaximum(): java.math.BigDecimal;
    getMinimum(): java.math.BigDecimal;
    getOptions(): java.util.List<StateOption>;
    getPattern(): string;
    getStep(): java.math.BigDecimal;
    isReadOnly(): boolean | null;
    toStateDescription(): StateDescription;

  } // end StateDescriptionFragment

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.types {

  interface Command/* extends Type*/ {

    format(arg0: string): string;
    toFullString(): string;

  } // end Command

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.types {

  class CommandOption/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getCommand(): string;
    getLabel(): string;
    toString(): string;

  } // end CommandOption

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.config.core {

  class ConfigDescriptionParameter/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getContext(): string;
    getDefault(): string;
    getDescription(): string;
    getFilterCriteria(): java.util.List<any /*org.openhab.core.config.core.FilterCriteria*/>;
    getGroupName(): string;
    getLabel(): string;
    getLimitToOptions(): boolean;
    getMaximum(): java.math.BigDecimal;
    getMinimum(): java.math.BigDecimal;
    getMultipleLimit(): int | null;
    getName(): string;
    getOptions(): java.util.List<any /*org.openhab.core.config.core.ParameterOption*/>;
    getPattern(): string;
    getStepSize(): java.math.BigDecimal;
    getType(): any /*org.openhab.core.config.core.ConfigDescriptionParameter$Type*/;
    getUnit(): string;
    getUnitLabel(): string;
    isAdvanced(): boolean;
    isMultiple(): boolean | null;
    isReadOnly(): boolean | null;
    isRequired(): boolean;
    isVerifyable(): boolean | null;
    toString(): string;

  } // end ConfigDescriptionParameter

} // end namespace org.openhab.core.config.core
declare namespace org.openhab.core.types {

  interface Type {

    format(arg0: string): string;
    toFullString(): string;

  } // end Type

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.types {

  class EventOption/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getLabel(): string;
    getValue(): string;
    toString(): string;

  } // end EventOption

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.types {

  class StateDescription/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getMaximum(): java.math.BigDecimal;
    getMinimum(): java.math.BigDecimal;
    getOptions(): java.util.List<StateOption>;
    getPattern(): string;
    getStep(): java.math.BigDecimal;
    isReadOnly(): boolean;
    toString(): string;

  } // end StateDescription

} // end namespace org.openhab.core.types


declare namespace org.openhab.core.items {

  class GenericItem/* extends java.lang.Object implements ActiveItem*/ {

    addGroupName(arg0: string): void;
    addGroupNames(...arg0: string[]): void;
    addGroupNames(arg0: java.util.List<string>): void;
    addStateChangeListener(arg0: StateChangeListener): void;
    addTag(arg0: string): void;
    addTags(...arg0: string[]): void;
    addTags(arg0: java.util.Collection<string>): void;
    dispose(): void;
    equals(arg0: any /*java.lang.Object*/): boolean;
    getAcceptedCommandTypes(): java.util.List<java.lang.Class<org.openhab.core.types.Command>>;
    getAcceptedDataTypes(): java.util.List<java.lang.Class<any /*org.openhab.core.types.State*/>>;
    getCategory(): string;
    getCommandDescription(): org.openhab.core.types.CommandDescription;
    getCommandDescription(arg0: java.util.Locale): org.openhab.core.types.CommandDescription;
    getGroupNames(): java.util.List<string>;
    getLabel(): string;
    getName(): string;
    getState(): any /*org.openhab.core.types.State*/;
    getStateAs<T>(arg0: java.lang.Class<T>): T;
    getStateDescription(): org.openhab.core.types.StateDescription;
    getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
    getTags(): java.util.Set<string>;
    getType(): string;
    getUID(): string;
    hasTag(arg0: string): boolean;
    isAcceptedState(arg0: java.util.List<java.lang.Class<any /*org.openhab.core.types.State*/>>, arg1: any /*org.openhab.core.types.State*/): boolean;
    removeAllTags(): void;
    removeGroupName(arg0: string): void;
    removeStateChangeListener(arg0: StateChangeListener): void;
    removeTag(arg0: string): void;
    send(arg0: any /*org.openhab.core.types.RefreshType*/): void;
    setCategory(arg0: string): void;
    setCommandDescriptionService(arg0: any /*org.openhab.core.service.CommandDescriptionService*/): void;
    setEventPublisher(arg0: any /*org.openhab.core.events.EventPublisher*/): void;
    setItemStateConverter(arg0: ItemStateConverter): void;
    setLabel(arg0: string): void;
    setState(arg0: any /*org.openhab.core.types.State*/): void;
    setStateDescriptionService(arg0: org.openhab.core.service.StateDescriptionService): void;
    setUnitProvider(arg0: any /*org.openhab.core.i18n.UnitProvider*/): void;
    toString(): string;

  } // end GenericItem

} // end namespace org.openhab.core.items
declare namespace org.openhab.core.items {

  interface StateChangeListener {

    stateChanged(arg0: any /*org.openhab.core.items.Item*/, arg1: any /*org.openhab.core.types.State*/, arg2: any /*org.openhab.core.types.State*/): void;
    stateUpdated(arg0: any /*org.openhab.core.items.Item*/, arg1: any /*org.openhab.core.types.State*/): void;

  } // end StateChangeListener

} // end namespace org.openhab.core.items

declare namespace org.openhab.core.types {

  interface CommandDescriptionProvider {

    getCommandDescription(arg0: string, arg1: java.util.Locale): CommandDescription;

  } // end CommandDescriptionProvider

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.automation {

  interface Trigger/* extends Module*/ {

    getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
    getDescription(): string;
    getId(): string;
    getLabel(): string;
    getTypeUID(): string;

  } // end Trigger

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.automation {

  interface Action/* extends Module*/ {

    getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
    getDescription(): string;
    getId(): string;
    getInputs(): java.util.Map<string, string>;
    getLabel(): string;
    getTypeUID(): string;

  } // end Action

} // end namespace org.openhab.core.automation
declare namespace org.openhab.core.automation {

  interface RuleManager {

    getStatus(arg0: string): any /*org.openhab.core.automation.RuleStatus*/;
    getStatusInfo(arg0: string): any /*org.openhab.core.automation.RuleStatusInfo*/;
    isEnabled(arg0: string): boolean | null;
    runNow(arg0: string): void;
    runNow(arg0: string, arg1: boolean, arg2: java.util.Map<string, any /*java.lang.Object*/>): void;
    setEnabled(arg0: string, arg1: boolean): void;

  } // end RuleManager

} // end namespace org.openhab.core.automation
declare namespace org.openhab.core.automation.module.script.rulesupport.shared {

  class ScriptedAutomationManager/* extends java.lang.Object*/ {

    addActionHandler(arg0: string, arg1: any /*org.openhab.core.automation.module.script.rulesupport.shared.ScriptedHandler*/): void;
    addActionType(arg0: any /*org.openhab.core.automation.type.ActionType*/): void;
    addConditionHandler(arg0: string, arg1: any /*org.openhab.core.automation.module.script.rulesupport.shared.ScriptedHandler*/): void;
    addConditionType(arg0: any /*org.openhab.core.automation.type.ConditionType*/): void;
    addPrivateActionHandler(arg0: any /*org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleActionHandler*/): string;
    addPrivateConditionHandler(arg0: any /*org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleConditionHandler*/): string;
    addPrivateTriggerHandler(arg0: any /*org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleTriggerHandler*/): string;
    addRule(arg0: any /*org.openhab.core.automation.Rule*/): any /*org.openhab.core.automation.Rule*/;
    addTriggerHandler(arg0: string, arg1: any /*org.openhab.core.automation.module.script.rulesupport.shared.ScriptedHandler*/): void;
    addTriggerType(arg0: any /*org.openhab.core.automation.type.TriggerType*/): void;
    equals(arg0: any /*java.lang.Object*/): boolean;
    removeAll(): void;
    removeHandler(arg0: string): void;
    removeModuleType(arg0: string): void;
    removePrivateHandler(arg0: string): void;
    toString(): string;

  } // end ScriptedAutomationManager

} // end namespace org.openhab.core.automation.module.script.rulesupport.shared

declare namespace org.openhab.core.common.registry {

  interface Identifiable<T> {

    getUID(): T;

  } // end Identifiable

} // end namespace org.openhab.core.common.registry
declare namespace org.openhab.core.types {

  interface CommandDescription {

    getCommandOptions(): java.util.List<CommandOption>;

  } // end CommandDescription

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.automation {

  interface Module {

    getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
    getDescription(): string;
    getId(): string;
    getLabel(): string;
    getTypeUID(): string;

  } // end Module

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.types {

  interface PrimitiveType/* extends Type*/ {

    format(arg0: string): string;
    toFullString(): string;

  } // end PrimitiveType

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.types {

  interface ComplexType/* extends Type*/ {

    format(arg0: string): string;
    getConstituents(): any /*java.util.SortedMap*/;
    toFullString(): string;

  } // end ComplexType

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.service {

  interface StateDescriptionService {

    getStateDescription(arg0: string, arg1: java.util.Locale): org.openhab.core.types.StateDescription;

  } // end StateDescriptionService

} // end namespace org.openhab.core.service

declare namespace org.openhab.core.types {

  class CommandDescriptionBuilder/* extends java.lang.Object*/ {

    build(): CommandDescription;
    equals(arg0: any /*java.lang.Object*/): boolean;
    static create(): CommandDescriptionBuilder;
    toString(): string;
    withCommandOption(arg0: CommandOption): CommandDescriptionBuilder;
    withCommandOptions(arg0: java.util.List<CommandOption>): CommandDescriptionBuilder;

  } // end CommandDescriptionBuilder

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.items {

  interface ItemStateConverter {

    convertToAcceptedState(arg0: any /*org.openhab.core.types.State*/, arg1: any /*org.openhab.core.items.Item*/): any /*org.openhab.core.types.State*/;

  } // end ItemStateConverter

} // end namespace org.openhab.core.items
declare namespace org.openhab.core.automation {

  interface Condition/* extends Module*/ {

    getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
    getDescription(): string;
    getId(): string;
    getInputs(): java.util.Map<string, string>;
    getLabel(): string;
    getTypeUID(): string;

  } // end Condition

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.automation {

/* enum */class Visibility/* extends java.lang.Enum<any>*/ {

    // VISIBLE:Visibility;
    // HIDDEN:Visibility;
    // EXPERT:Visibility;

    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toString(): string;

  } // end Visibility

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.types {

  class TypeParser/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    static parseCommand(arg0: java.util.List<java.lang.Class<Command>>, arg1: string): Command;
    static parseState(arg0: java.util.List<java.lang.Class<any /*org.openhab.core.types.State*/>>, arg1: string): any /*org.openhab.core.types.State*/;
    static parseType(arg0: string, arg1: string): Type;
    toString(): string;

  } // end TypeParser

} // end namespace org.openhab.core.types

declare namespace org.openhab.core.types {

  class StateOption/* extends java.lang.Object*/ {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getLabel(): string;
    getValue(): string;
    toString(): string;

  } // end StateOption

} // end namespace org.openhab.core.types
