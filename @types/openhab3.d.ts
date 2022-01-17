/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT DEFINITIONS
 *
 */

declare namespace org.openhab.core.automation {

  interface Module {

    getConfiguration(): org.openhab.core.config.core.Configuration;
    getDescription(): string;
    getId(): string;
    getLabel(): string;
    getTypeUID(): string;

  } // end Module

  interface Trigger extends Module {

    getConfiguration(): org.openhab.core.config.core.Configuration;
    getDescription(): string;
    getId(): string;
    getLabel(): string;
    getTypeUID(): string;

  } // end Trigger

  interface Action extends Module {

    getConfiguration(): org.openhab.core.config.core.Configuration;
    getDescription(): string;
    getId(): string;
    getInputs(): java.util.Map<string, string>;
    getLabel(): string;
    getTypeUID(): string;

  } // end Action

  interface Condition extends Module {

    getConfiguration(): org.openhab.core.config.core.Configuration;
    getDescription(): string;
    getId(): string;
    getInputs(): java.util.Map<string, string>;
    getLabel(): string;
    getTypeUID(): string;

  } // end Condition

/* enum */interface Visibility extends java.lang.Enum<any> {

    // VISIBLE:Visibility;
    // HIDDEN:Visibility;
    // EXPERT:Visibility;

  } // end Visibility

  interface RuleClass {
    readonly class: java.lang.Class<Rule>
  }

  interface Rule extends org.openhab.core.common.registry.Identifiable<string> {

    getActions(): Action[];
    getConditions(): Condition[];
    getConfiguration(): org.openhab.core.config.core.Configuration;
    getConfigurationDescriptions(): org.openhab.core.config.core.ConfigDescriptionParameter[];
    getDescription(): string;
    getModule(arg0: string): Module;
    getModules(): Module[];
    getName(): string;
    getTags(): string[];
    getTemplateUID(): string;
    getTriggers(): Trigger[];
    getUID(): string;
    getVisibility(): Visibility;

  } // end Rule

  /** The RuleRegistry provides basic functionality for managing Rules. */
  interface RuleRegistry extends org.openhab.core.common.registry.Registry<org.openhab.core.automation.Rule, string> {

    /** This method is used to register a Rule into the RuleRegistry. */
    add(rule: org.openhab.core.automation.Rule): org.openhab.core.automation.Rule

    /** Gets a collection of Rules which shares same tag. */
    getByTag(tag: string): java.util.Collection<org.openhab.core.automation.Rule>

    /** Gets a collection of Rules which has specified tags. */
    getByTags(...tags: string[]): java.util.Collection<org.openhab.core.automation.Rule>
  }

  interface RuleManager {

    getStatus(arg0: string): any /*org.openhab.core.automation.RuleStatus*/;
    getStatusInfo(arg0: string): any /*org.openhab.core.automation.RuleStatusInfo*/;
    isEnabled(arg0: string): boolean | null;
    runNow(arg0: string): void;
    runNow(arg0: string, arg1: boolean, arg2: java.util.Map<string, any /*java.lang.Object*/>): void;
    setEnabled(arg0: string, arg1: boolean): void;

  } // end RuleManager

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.automation.module.script.internal.defaultscope {

  class ScriptThingActions {
    constructor(thingRegistry: org.openhab.core.thing.ThingRegistry)
    get(scope: string, thingUid: string): org.openhab.core.thing.binding.ThingActions
  }

  class ItemRegistryDelegate implements java.util.Map<string, org.openhab.core.types.State> {

    constructor(itemRegistry: org.openhab.core.items.ItemRegistry)

    clear(): void;
    compute(arg0: string, arg1: java.util.funktion.BiFunction<string, types.State, types.State>): types.State;
    computeIfAbsent(arg0: string, arg1: java.util.funktion.Func<string, types.State>): types.State;
    computeIfPresent(arg0: string, arg1: java.util.funktion.BiFunction<string, types.State, types.State>): types.State;
    containsKey(arg0: any): boolean;
    containsValue(arg0: any): boolean;
    entrySet(): java.util.Set<any>;
    equals(arg0: any): boolean;
    forEach(arg0: java.util.funktion.BiConsumer<string, types.State>): void;
    get(arg0: any): types.State;
    getOrDefault(arg0: any, arg1: types.State): types.State;
    isEmpty(): boolean;
    keySet(): java.util.Set<string>;
    merge(arg0: string, arg1: types.State, arg2: java.util.funktion.BiFunction<types.State, types.State, types.State>): types.State;
    put(arg0: string, arg1: types.State): types.State;
    putAll(arg0: java.util.Map<string, types.State>): void;
    putIfAbsent(arg0: string, arg1: types.State): types.State;
    remove(arg0: any): types.State;
    remove(arg0: any, arg1: any): boolean;
    replace(arg0: string, arg1: types.State): types.State;
    replace(arg0: string, arg1: types.State, arg2: types.State): boolean;
    replaceAll(arg0: java.util.funktion.BiFunction<string, types.State, types.State>): void;
    size(): number;
    values(): java.util.Collection<types.State>;
  }

  class ScriptBusEvent extends java.lang.Object {

    dispose(): void;
    equals(arg0: any /*java.lang.Object*/): boolean;
    postUpdate(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State | number | string): any /*java.lang.Object*/;
    postUpdate(arg0: string, arg1: string): any /*java.lang.Object*/;
    restoreStates(arg0: java.util.Map<org.openhab.core.items.Item, org.openhab.core.types.State>): any /*java.lang.Object*/;
    sendCommand(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.Command | number | string): any /*java.lang.Object*/;
    sendCommand(arg0: string, arg1: string): any /*java.lang.Object*/;
    storeStates(...arg0: org.openhab.core.items.Item[]): java.util.Map<org.openhab.core.items.Item, org.openhab.core.types.State>;
    toString(): string;

  } // end ScriptBusEvent

} // end namespace org.openhab.core.automation.module.script.internal.defaultscope

declare namespace org.openhab.core.automation.module.script.rulesupport.shared.simple {

  interface SimpleRuleActionHandler {
    execute(arg0: org.openhab.core.automation.Action, arg1: { [index: string]: any }): any /*java.lang.Object*/;
  } // end SimpleRuleActionHandler

  interface SimpleRuleClass {
    new(): SimpleRule
    readonly class: java.lang.Class<SimpleRule>
  }

  class SimpleRule implements org.openhab.core.automation.Rule, SimpleRuleActionHandler {
    equals(arg0: any /*java.lang.Object*/): boolean;
    execute(arg0: org.openhab.core.automation.Action, arg1: { [index: string]: any }): any /*java.lang.Object*/;
    getActions(): org.openhab.core.automation.Action[];
    getConditions(): org.openhab.core.automation.Condition[];
    getConfiguration(): org.openhab.core.config.core.Configuration;
    getConfigurationDescriptions(): org.openhab.core.config.core.ConfigDescriptionParameter[];
    getDescription(): string;
    getModule(arg0: string): org.openhab.core.automation.Module;
    getModules(): org.openhab.core.automation.Module[];
    getModules<T>(arg0: T): T[];
    getName(): string;
    getTags(): string[];
    getTemplateUID(): string;
    getTriggers(): org.openhab.core.automation.Trigger[];
    getUID(): string;
    getVisibility(): org.openhab.core.automation.Visibility;
    setActions(arg0: org.openhab.core.automation.Action[]): void;
    setConditions(arg0: org.openhab.core.automation.Condition[]): void;
    setConfiguration(arg0: org.openhab.core.config.core.Configuration): void;
    setConfigurationDescriptions(arg0: org.openhab.core.config.core.ConfigDescriptionParameter[]): void;
    setDescription(arg0: string): void;
    setName(arg0: string): void;
    setTags(arg0: string[]): void;
    setTags(arg0: java.util.Set<string>): void;
    setTemplateUID(arg0: string): void;
    setTriggers(arg0: org.openhab.core.automation.Trigger[]): void;
    setVisibility(arg0: org.openhab.core.automation.Visibility): void;
    toString(): string;
  } // end SimpleRule

} // end namespace org.openhab.core.automation.module.script.rulesupport.shared.simple

declare namespace org.openhab.core.automation.module.script.rulesupport.shared {

  /**
   * The {@link RuleSupportRuleRegistryDelegate} is wrapping a {@link RuleRegistry} to provide a comfortable way to add
   * rules to the RuleManager without worrying about the need to remove rules again. Nonetheless, using the addPermanent
   * method it is still possible to add rules permanently.
   */
  class RuleSupportRuleRegistryDelegate {
    getAll(): java.util.Collection<org.openhab.core.automation.Rule>
    stream(): any /*Stream<Rule> */
    get(key: string): org.openhab.core.automation.Rule | null
    add(element: Rule): org.openhab.core.automation.Rule
    addPermanent(element: Rule): void
    update(element: Rule): org.openhab.core.automation.Rule | null
    remove(key: string): org.openhab.core.automation.Rule | null
    getByTag(tag?: string): java.util.Collection<org.openhab.core.automation.Rule>
    removeAllAddedByScript(): void
    getByTags(...tags: string[]): java.util.Collection<org.openhab.core.automation.Rule>
  }

  class ScriptedAutomationManager extends java.lang.Object {

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
    removeAll(): void;
    removeHandler(arg0: string): void;
    removeModuleType(arg0: string): void;
    removePrivateHandler(arg0: string): void;

  } // end ScriptedAutomationManager

} // end namespace org.openhab.core.automation.module.script.rulesupport.shared

declare namespace org.openhab.core.automation.util {

  class ModuleBuilder<B, T> {
    build(): T;
    equals(arg0: any /*java.lang.Object*/): boolean;
    toString(): string;
    withConfiguration(arg0: org.openhab.core.config.core.Configuration): B;
    withDescription(arg0: string): B;
    withId(arg0: string): B;
    withLabel(arg0: string): B;
    withTypeUID(arg0: string): B;
  }

  class TriggerBuilder extends ModuleBuilder<TriggerBuilder, Trigger> {
    build(): org.openhab.core.automation.Trigger;
  }

  class ConditionBuilder extends ModuleBuilder<ConditionBuilder, Trigger> {
    build(): org.openhab.core.automation.Condition;
  }

  class ActionBuilder extends ModuleBuilder<ActionBuilder, Trigger> {
    build(): org.openhab.core.automation.Action;
  }

} // end namespace org.openhab.core.automation.util

declare namespace org.openhab.core.common.registry {

  interface Identifiable<T> {

    getUID(): T;

  } // end Identifiable

  /**
   * The Registry interface represents a registry for elements of the type E. The concrete sub interfaces are registered as OSGi services.
   */
  interface Registry<E extends Identifiable<K>, K> {
    /** Adds the given element to the according ManagedProvider. */
    add(element: E): E

    /** This method retrieves a single element from the registry. */
    get(key: K): E | null

    /** Returns a collection of all elements in the registry. */
    getAll(): java.util.Collection<E>

    /** Removes the given element from the according ManagedProvider. */
    remove(key: K): E | null

    /** Updates the given element at the according ManagedProvider. */
    update(element: E): E | null
  }

} // end namespace org.openhab.core.common.registry

declare namespace org.openhab.core.config.core {

  class Configuration extends java.lang.Object {

    as<T>(arg0: T): T;
    containsKey(arg0: string): boolean;
    equals(arg0: any /*java.lang.Object*/): boolean;
    get(arg0: string): any /*java.lang.Object*/;
    getProperties(): { [index: string]: any };
    keySet(): string[];
    put(arg0: string, arg1: any /*java.lang.Object*/): any /*java.lang.Object*/;
    remove(arg0: string): any /*java.lang.Object*/;
    setProperties(arg0: { [index: string]: any }): void;
    toString(): string;
    values(): any[];

  } // end Configuration

  class ConfigDescriptionParameter extends java.lang.Object {

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

  } // end ConfigDescriptionParameter

} // end namespace org.openhab.core.config.core

declare namespace org.openhab.core.events {

  interface Event {

    getPayload(): string;
    getSource(): string;
    getTopic(): string;
    getType(): string;

  } // end Event

  abstract class AbstractEvent extends java.lang.Object implements org.openhab.core.events.Event {

    /** Gets the payload as a serialized string. */
    getPayload(): string;

    /** Gets the name of the source identifying the sender. */
    getSource(): string;

    /** Gets the topic of an event. */
    getTopic(): string;

    /** Gets the event type. */
    getType(): string;

  } // end AbstractEvent

} // end namespace org.openhab.core.events

declare namespace org.openhab.core.items {


  interface ItemStateConverter {

    convertToAcceptedState(arg0: org.openhab.core.types.State, arg1: org.openhab.core.items.Item): org.openhab.core.types.State;

  } // end ItemStateConverter

  interface ActiveItem extends Item {
    addGroupName(arg0: string): void;
    addGroupNames(...arg0: string[]): void;
    addGroupNames(arg0: java.util.List<string>): void;
    addStateChangeListener(arg0: StateChangeListener): void;
    addTag(arg0: string): void;
    addTags(...arg0: string[]): void;
    addTags(arg0: java.util.Collection<string>): void;
    removeAllTags(): void;
    removeGroupName(arg0: string): void;
    removeTag(arg0: string): void;
    setCategory(arg0: string): void;
    setLabel(arg0: string): void;
  }

  abstract class GenericItem extends java.lang.Object implements ActiveItem {

    /**
     * Returns the label of the item or null if no label is set.
     */
    label: string | null

    /**
 * returns the name of the item
 */
    name: string

    /**
     * returns the current state of the item
     */
    state: org.openhab.core.types.State;


    addGroupName(arg0: string): void;
    addGroupNames(...arg0: string[]): void;
    addGroupNames(arg0: java.util.List<string>): void;
    addStateChangeListener(arg0: StateChangeListener): void;
    addTag(arg0: string): void;
    addTags(...arg0: string[]): void;
    addTags(arg0: java.util.Collection<string>): void;
    dispose(): void;
    getAcceptedCommandTypes(): java.util.List<java.lang.Class<org.openhab.core.types.Command>>;
    getAcceptedDataTypes(): java.util.List<java.lang.Class<org.openhab.core.types.State>>;
    getCategory(): string;
    getCommandDescription(): org.openhab.core.types.CommandDescription;
    getCommandDescription(arg0: java.util.Locale): org.openhab.core.types.CommandDescription;
    getGroupNames(): java.util.List<string>;
    getLabel(): string;
    getName(): string;
    getState(): org.openhab.core.types.State;
    getStateAs<T>(arg0: java.lang.Class<T>): T;
    getStateDescription(): org.openhab.core.types.StateDescription;
    getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
    getTags(): java.util.Set<string>;
    getType(): string;
    getUID(): string;
    hasTag(arg0: string): boolean;
    isAcceptedState(arg0: java.util.List<java.lang.Class<org.openhab.core.types.State>>, arg1: org.openhab.core.types.State): boolean;
    removeAllTags(): void;
    removeGroupName(arg0: string): void;
    removeStateChangeListener(arg0: StateChangeListener): void;
    removeTag(arg0: string): void;
    send(arg0: org.openhab.core.types.RefreshType): void;
    setCategory(arg0: string): void;
    setCommandDescriptionService(arg0: any /*org.openhab.core.service.CommandDescriptionService*/): void;
    setEventPublisher(arg0: any /*org.openhab.core.events.EventPublisher*/): void;
    setItemStateConverter(arg0: ItemStateConverter): void;
    setLabel(arg0: string): void;
    setState(arg0: org.openhab.core.types.State): void;
    setStateDescriptionService(arg0: org.openhab.core.service.StateDescriptionService): void;
    setUnitProvider(arg0: any /*org.openhab.core.i18n.UnitProvider*/): void;

  } // end GenericItem

  interface StateChangeListener {

    stateChanged(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State, arg2: org.openhab.core.types.State): void;
    stateUpdated(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State): void;

  } // end StateChangeListener

  interface Item extends org.openhab.core.common.registry.Identifiable<string> {

    getAcceptedCommandTypes(): java.util.List<java.lang.Class<org.openhab.core.types.Command>>;
    getAcceptedDataTypes(): java.util.List<java.lang.Class<org.openhab.core.types.State>>;
    getCategory(): string;
    getCommandDescription(): org.openhab.core.types.CommandDescription;
    getCommandDescription(arg0: java.util.Locale): org.openhab.core.types.CommandDescription;
    getGroupNames(): java.util.List<string>;

    /**
     * Returns the label of the item or null if no label is set.
     */
    getLabel(): string | null;

    /**
     * Returns the label of the item or null if no label is set.
     */
    label: string | null

    /**
     * returns the name of the item
     */
    getName(): string;

    /**
     * returns the name of the item
     */
    name: string

    /**
     * returns the current state of the item
     */
    getState(): org.openhab.core.types.State;

    /**
     * returns the current state of the item
     */
    state: org.openhab.core.types.State;
    getStateAs<T extends org.openhab.core.types.State>(typeClass: java.lang.Class<T>): T;
    getStateDescription(): org.openhab.core.types.StateDescription;
    getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
    getTags(): java.util.Set<string>;
    getType(): string;
    // getUID<T>(): T;
    hasTag(arg0: string): boolean;

  } // end Item

  class GroupItem extends GenericItem implements StateChangeListener {

    addGroupName(arg0: string): void;
    addGroupNames(...arg0: string[]): void;
    addGroupNames(arg0: java.util.List<string>): void;
    addMember(arg0: org.openhab.core.items.Item): void;
    addStateChangeListener(arg0: StateChangeListener): void;
    addTag(arg0: string): void;
    addTags(...arg0: string[]): void;
    addTags(arg0: java.util.Collection<string>): void;
    dispose(): void;
    equals(arg0: any /*java.lang.Object*/): boolean;
    getAcceptedCommandTypes(): java.util.List<java.lang.Class<org.openhab.core.types.Command>>;
    getAcceptedDataTypes(): java.util.List<java.lang.Class<org.openhab.core.types.State>>;
    getAllMembers(): java.util.Set<org.openhab.core.items.Item>;
    getAllMembers(): org.openhab.core.items.Item[];
    getBaseItem(): org.openhab.core.items.Item;
    getCategory(): string;
    getCommandDescription(): org.openhab.core.types.CommandDescription;
    getCommandDescription(arg0: java.util.Locale): org.openhab.core.types.CommandDescription;
    getFunction(): any /*org.openhab.core.items.GroupFunction*/;
    getGroupNames(): java.util.List<string>;
    getLabel(): string;
    label: string
    getMembers(): java.util.Set<org.openhab.core.items.Item>;
    getMembers(arg0: java.util.funktion.Predicate<org.openhab.core.items.Item>): java.util.Set<org.openhab.core.items.Item>;
    getName(): string;
    name: string
    getState(): org.openhab.core.types.State;
    state: org.openhab.core.types.State;
    getStateAs<T>(arg0: java.lang.Class<T>): T;
    getStateDescription(): org.openhab.core.types.StateDescription;
    getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
    getTags(): java.util.Set<string>;
    getType(): string;
    getUID<T>(): T;
    hasTag(arg0: string): boolean;
    isAcceptedState(arg0: java.util.List<java.lang.Class<org.openhab.core.types.State>>, arg1: org.openhab.core.types.State): boolean;
    removeAllMembers(): void;
    removeAllTags(): void;
    removeGroupName(arg0: string): void;
    removeMember(arg0: org.openhab.core.items.Item): void;
    removeStateChangeListener(arg0: StateChangeListener): void;
    removeTag(arg0: string): void;
    replaceMember(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.items.Item): void;
    send(arg0: org.openhab.core.types.Command): void;
    send(arg0: org.openhab.core.types.RefreshType): void;
    setCategory(arg0: string): void;
    setCommandDescriptionService(arg0: any /*org.openhab.core.service.CommandDescriptionService*/): void;
    setEventPublisher(arg0: any /*org.openhab.core.events.EventPublisher*/): void;
    setItemStateConverter(arg0: ItemStateConverter): void;
    setLabel(arg0: string): void;
    setState(arg0: org.openhab.core.types.State): void;
    setStateDescriptionService(arg0: org.openhab.core.service.StateDescriptionService): void;
    setUnitProvider(arg0: any /*org.openhab.core.i18n.UnitProvider*/): void;
    stateChanged(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State, arg2: org.openhab.core.types.State): void;
    stateUpdated(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State): void;
    toString(): string;

  } // end GroupItem

  interface ItemRegistry/* extends org.openhab.core.common.registry.Registry<any, any>*/ {

    add<E>(arg0: E): E;
    addRegistryChangeListener(arg0: any /*org.openhab.core.common.registry.RegistryChangeListener*/): void;
    addRegistryHook(arg0: any /*org.openhab.core.items.RegistryHook*/): void;
    get<K, E>(arg0: K): E;
    getAll<E>(): java.util.Collection<E>;
    getItem(arg0: string): Item;
    getItemByPattern(arg0: string): Item;
    getItems(): java.util.List<Item>;
    getItems(arg0: string): java.util.List<Item>;
    getItemsByTag(...arg0: string[]): java.util.List<Item>;
    getItemsByTag<T>(arg0: T, ...arg1: string[]): T[];
    getItemsByTagAndType(arg0: string, ...arg1: string[]): java.util.List<Item>;
    getItemsOfType(arg0: string): java.util.List<Item>;
    remove(arg0: string, arg1: boolean): Item;
    remove<K, E>(arg0: K): E;
    removeRegistryChangeListener(arg0: any /*org.openhab.core.common.registry.RegistryChangeListener*/): void;
    removeRegistryHook(arg0: any /*org.openhab.core.items.RegistryHook*/): void;
    stream<E>(): java.util.stream.Stream<E>;
    update<E>(arg0: E): E;

  } // end ItemRegistry

} // end namespace org.openhab.core.items

declare namespace org.openhab.core.items.events {

  class ItemEvent extends org.openhab.core.events.AbstractEvent {

    getItemName(): string;

  } // end ItemEvent

  class ItemStateEvent extends org.openhab.core.events.AbstractEvent {

    getItemState(): org.openhab.core.types.State;
    getType(): string;
    getItemName(): string;

  } // end ItemEvent

  class ItemStatePredictedEvent extends ItemEvent {

    getPredictedState(): org.openhab.core.types.State;
    isConfirmation(): boolean;

  } // end ItemStatePredictedEvent

  class ItemCommandEvent extends ItemEvent {

    getItemCommand(): org.openhab.core.types.Command;

  } // end ItemCommandEvent

  class ItemStateChangedEvent extends ItemEvent {

    getItemState(): org.openhab.core.types.State;
    getOldItemState(): org.openhab.core.types.State;

  } // end ItemStateChangedEvent

  class ItemUpdatedEvent/* extends AbstractItemRegistryEvent*/ {

    getItem(): any /*org.openhab.core.items.dto.ItemDTO*/;
    getOldItem(): any /*org.openhab.core.items.dto.ItemDTO*/;

  } // end ItemUpdatedEvent

  class GroupItemStateChangedEvent extends ItemStateChangedEvent {

    getItemState(): org.openhab.core.types.State;
    getMemberName(): string;
    getOldItemState(): org.openhab.core.types.State;

  } // end GroupItemStateChangedEvent

} // end namespace org.openhab.core.items.events

declare namespace org.openhab.core.service {

  interface StateDescriptionService {

    getStateDescription(arg0: string, arg1: java.util.Locale): org.openhab.core.types.StateDescription;

  } // end StateDescriptionService

} // end namespace org.openhab.core.service

declare namespace org.openhab.core.thing {

  class ThingUID /* extends UID */ {
    constructor(thingUID: string)
    constructor(...segments: string[])
    constructor(bindingId: string, id: string)
    constructor(bindingId: string, thingTypeId: string, id: string)
    // constructor(String bindingId, ThingUID bridgeUID, String id)
    // constructor(ThingTypeUID thingTypeUID, String id)
    // constructor(ThingTypeUID thingTypeUID, String id, String... bridgeIds)
    // constructor(ThingTypeUID thingTypeUID, ThingUID bridgeUID, String id)
  }

  interface Thing extends org.openhab.core.common.registry.Identifiable<ThingUID> {

  }

  /** 
   * ThingRegistry tracks all Things from different ThingProviders and provides access to them.
   * The ThingRegistry supports adding of listeners (see ThingsChangeListener) and trackers (see ThingTracker).
   * */
  interface ThingRegistry extends org.openhab.core.common.registry.Registry<Thing, ThingUID> {

    /** Creates a thing based on the given configuration properties */
    createThingOfType(thingTypeUID: any /*ThingTypeUID*/, thingUID?: ThingUID, bridgeUID?: ThingUID, label?: string, configuration?: org.openhab.core.config.core.Configuration): Thing | null

    /** Removes the Thing specified by the given ThingUID. */
    forceRemove(thingUID: any /*ThingUID*/): Thing | null

    /** Returns a thing for a given UID or null if no thing was found. */
    get(uid: any /*ThingUID*/): Thing | null

    /** Returns a channel for the given channel UID or null if no channel was found */
    getChannel(channelUID: any /* ChannelUID */): any /*Channel*/ | null

    /** Initiates the removal process for the Thing specified by the given ThingUID. */
    remove(thingUID: any /*ThingUID*/): Thing | null

    /** Updates the configuration of a thing for the given UID. */
    updateConfiguration(thingUID: any /*ThingUID*/, configurationParameters: any /*Map<String,​Object> */): void
  }
}

declare namespace org.openhab.core.thing.binding {

  type ThingActions = any;
  type ThingActionsScope = any;
  type ThingHandler = any;
}

declare namespace org.openhab.core.types {

  interface CommandDescriptionProvider {

    getCommandDescription(arg0: string, arg1: java.util.Locale): CommandDescription;

  } // end CommandDescriptionProvider

  /**
   * This is a parent interface for all states and commands. It was introduced as many states can be commands at the same
   * time and vice versa. E.g a light can have the state ON or OFF and one can also send ON and OFF as commands to the device.
   * This duality is captured by this marker interface and allows implementing classes to be both state and command at the same time.
   */
  interface Type extends java.lang.Object{

    /** Formats the value of this type according to a pattern (see Formatter). */
    format(arg0: string): string;

    /** Get a string representation that contains the whole internal representation of the type. */
    toFullString(): string;
  }

  interface State extends Type {
    as<T>(target: java.lang.Class<T>): T;
  }

  interface CommandDescription {
    getCommandOptions(): java.util.List<CommandOption>;
  }

  interface Command extends Type {
  }

  interface PrimitiveType extends Type {
  }

  interface ComplexType extends Type {
    getConstituents(): any /*java.util.SortedMap*/;
  }

  interface StateDescriptionFragment {
    getMaximum(): java.math.BigDecimal;
    getMinimum(): java.math.BigDecimal;
    getOptions(): java.util.List<StateOption>;
    getPattern(): string;
    getStep(): java.math.BigDecimal;
    isReadOnly(): boolean | null;
    toStateDescription(): StateDescription;
  }

  class CommandDescriptionBuilder extends java.lang.Object {

    build(): CommandDescription;
    equals(arg0: any /*java.lang.Object*/): boolean;
    static create(): CommandDescriptionBuilder;
    toString(): string;
    withCommandOption(arg0: CommandOption): CommandDescriptionBuilder;
    withCommandOptions(arg0: java.util.List<CommandOption>): CommandDescriptionBuilder;

  }

  class EventOption extends java.lang.Object {

    getLabel(): string;
    getValue(): string;

  } // end EventOption

  class TypeParser extends java.lang.Object {

    equals(arg0: any /*java.lang.Object*/): boolean;
    static parseCommand(arg0: java.util.List<java.lang.Class<Command>>, arg1: string): Command;
    static parseState(arg0: java.util.List<java.lang.Class<org.openhab.core.types.State>>, arg1: string): org.openhab.core.types.State;
    static parseType(arg0: string, arg1: string): Type;
    toString(): string;

  } // end TypeParser

  class StateOption extends java.lang.Object {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getLabel(): string;
    getValue(): string;
    toString(): string;

  } // end StateOption

  class StateDescription extends java.lang.Object {

    getMaximum(): java.math.BigDecimal;
    getMinimum(): java.math.BigDecimal;
    getOptions(): java.util.List<StateOption>;
    getPattern(): string;
    getStep(): java.math.BigDecimal;
    isReadOnly(): boolean;

  } // end StateDescription

  class EventDescription extends java.lang.Object {

    getOptions(): java.util.List<EventOption>;

  } // end EventDescription

  class CommandOption extends java.lang.Object {

    getCommand(): string;
    getLabel(): string;

  } // end CommandOption

} // end namespace org.openhab.core.types
