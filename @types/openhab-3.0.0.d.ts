/// <reference path="openhab-3.0.0-gen.d.ts"/>

declare namespace org.openhab.core.events {

  interface Event {

    getPayload(): string;
    getSource(): string;
    getTopic(): string;
    getType(): string;

  } // end Event

  class AbstractEvent implements org.openhab.core.events.Event {

    equals(arg0: any /*java.lang.Object*/): boolean;
    getPayload(): string;
    getSource(): string;
    getTopic(): string;
    getType(): string;
    toString(): string;

  } // end AbstractEvent

} // end namespace org.openhab.core.events

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




















declare namespace org.openhab.core.automation.module.script.internal.defaultscope {

  class ScriptBusEvent/* extends java.lang.Object*/ {

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

declare namespace org.openhab.core.items {

  interface Item/* extends org.openhab.core.common.registry.Identifiable<any>*/ {

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
    getStateAs<T>(arg0: T): T;
    getStateDescription(): org.openhab.core.types.StateDescription;
    getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
    getTags(): java.util.Set<string>;
    getType(): string;
    getUID<T>(): T;
    hasTag(arg0: string): boolean;

  } // end Item

  class GroupItem implements Item /*extends GenericItem implements StateChangeListener*/ {

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
declare namespace org.openhab.core.config.core {

  class Configuration/* extends java.lang.Object*/ {

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

} // end namespace org.openhab.core.config.core

declare namespace org.openhab.core.common.registry {

  interface Identifiable<T> {
    getUID(): T;
  } // end Identifiable

} // end namespace org.openhab.core.common.registry

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
declare namespace org.openhab.core.types {

  interface State/* extends Type*/ {
    as<T>(arg0: T): T;
    format(arg0: string): string;
    toFullString(): string;

  } // end State

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.automation {

  interface Rule extends org.openhab.core.common.registry.Identifiable<string> {

    getActions(): Action[];
    getConditions(): Condition[];
    getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
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

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.automation.module.script.rulesupport.shared.simple {

  interface SimpleRuleActionHandler {
    execute(arg0: org.openhab.core.automation.Action, arg1: { [index: string]: any }): any /*java.lang.Object*/;
  } // end SimpleRuleActionHandler

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

declare namespace org.openhab.core.types {
/* enum */class RefreshType/* extends java.lang.Enum<any> implements PrimitiveType, Command*/ {

    // REFRESH:RefreshType;

    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end RefreshType

/* enum */class UnDefType/* extends java.lang.Enum<any> implements PrimitiveType, State*/ {

    // UNDEF:UnDefType;
    // NULL:UnDefType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end UnDefType
} // end namespace org.openhab.core.types

declare namespace org.openhab.core.library.types {

    /* enum */class UpDownType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    // UP:UpDownType;
    // DOWN:UpDownType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end UpDownType

  class PointType/* extends java.lang.Object implements org.openhab.core.types.ComplexType, org.openhab.core.types.Command, org.openhab.core.types.State*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    distanceFrom(arg0: PointType): DecimalType;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getAltitude(): DecimalType;
    getConstituents(): any /*java.util.SortedMap*/;
    getGravity(): DecimalType;
    getLatitude(): DecimalType;
    getLongitude(): DecimalType;
    setAltitude(arg0: DecimalType): void;
    toFullString(): string;
    toString(): string;

  } // end PointType


  class PercentType/* extends DecimalType*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    byteValue(): any /*byte*/;
    compareTo(arg0: DecimalType): int;
    doubleValue(): double;
    equals(arg0: any /*java.lang.Object*/): boolean;
    floatValue(): float;
    format(arg0: string): string;
    intValue(): int;
    longValue(): long;
    shortValue(): any /*short*/;
    toBigDecimal(): java.math.BigDecimal;
    toFullString(): string;
    toString(): string;

  } // end PercentType

  class StringListType/* extends java.lang.Object implements org.openhab.core.types.Command, org.openhab.core.types.State*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getValue(arg0: int): string;
    toFullString(): string;
    toString(): string;

  } // end StringListType


        /* enum */class NextPreviousType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command*/ {

    // NEXT:NextPreviousType;
    // PREVIOUS:NextPreviousType;

    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end NextPreviousType

  interface DateTimeGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {

    calculate(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>): any /*org.openhab.core.types.State*/;
    getParameters(): [any /*org.openhab.core.types.State*/];
    getStateAs<T>(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>, arg1: java.lang.Class<T>): T;

  } // end DateTimeGroupFunction


  interface ArithmeticGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {

    calculate(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>): any /*org.openhab.core.types.State*/;
    getParameters(): [any /*org.openhab.core.types.State*/];
    getStateAs<T>(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>, arg1: java.lang.Class<T>): T;

  } // end ArithmeticGroupFunction


  class StringType/* extends java.lang.Object implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    toFullString(): string;
    toString(): string;

  } // end StringType

  class DateTimeType/* extends java.lang.Object implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: java.util.Locale, arg1: string): string;
    format(arg0: string): string;
    getZonedDateTime(): java.time.ZonedDateTime;
    toFullString(): string;
    toLocaleZone(): DateTimeType;
    toString(): string;
    toZone(arg0: any /*java.time.ZoneId*/): DateTimeType;
    toZone(arg0: string): DateTimeType;

  } // end DateTimeType

            /* enum */class PlayPauseType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    // PLAY:PlayPauseType;
    // PAUSE:PlayPauseType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end PlayPauseType


    /* enum */class StopMoveType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command*/ {

    // STOP:StopMoveType;
    // MOVE:StopMoveType;

    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end StopMoveType


    /* enum */class OpenClosedType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    // OPEN:OpenClosedType;
    // CLOSED:OpenClosedType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end OpenClosedType

  class DecimalType/* extends java.lang.Number implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command, java.lang.Comparable<any>*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    byteValue(): any /*byte*/;
    compareTo(arg0: DecimalType): int;
    doubleValue(): double;
    equals(arg0: any /*java.lang.Object*/): boolean;
    floatValue(): float;
    format(arg0: string): string;
    intValue(): int;
    longValue(): long;
    shortValue(): any /*short*/;
    toBigDecimal(): java.math.BigDecimal;
    toFullString(): string;
    toString(): string;

  } // end DecimalType

    /* enum */class OnOffType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    // ON:OnOffType;
    // OFF:OnOffType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end OnOffType

  interface QuantityTypeArithmeticGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {

    calculate(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>): any /*org.openhab.core.types.State*/;
    getParameters(): [any /*org.openhab.core.types.State*/];
    getStateAs<T>(arg0: java.util.Set<any /*org.openhab.core.items.Item*/>, arg1: java.lang.Class<T>): T;

  } // end QuantityTypeArithmeticGroupFunction

  class HSBType/* extends PercentType implements org.openhab.core.types.ComplexType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    byteValue(): any /*byte*/;
    compareTo(arg0: DecimalType): int;
    doubleValue(): double;
    equals(arg0: any /*java.lang.Object*/): boolean;
    floatValue(): float;
    format(arg0: string): string;
    getBlue(): PercentType;
    getBrightness(): PercentType;
    getConstituents(): any /*java.util.SortedMap*/;
    getGreen(): PercentType;
    getHue(): DecimalType;
    getRGB(): int;
    getRed(): PercentType;
    getSaturation(): PercentType;
    intValue(): int;
    longValue(): long;
    shortValue(): any /*short*/;
    toBigDecimal(): java.math.BigDecimal;
    toFullString(): string;
    toRGB(): [PercentType];
    toString(): string;
    toXY(): [PercentType];

  } // end HSBType

    /* enum */class RewindFastforwardType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command*/ {

    // REWIND:RewindFastforwardType;
    // FASTFORWARD:RewindFastforwardType;

    as<T>(arg0: java.lang.Class<T>): T;
    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end RewindFastforwardType

    /* enum */class IncreaseDecreaseType/* extends java.lang.Enum<any> implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command*/ {

    // INCREASE:IncreaseDecreaseType;
    // DECREASE:IncreaseDecreaseType;

    compareTo<E>(arg0: E): int;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getDeclaringClass<E>(): java.lang.Class<E>;
    name(): string;
    ordinal(): int;
    toFullString(): string;
    toString(): string;

  } // end IncreaseDecreaseType

  class RawType/* extends java.lang.Object implements org.openhab.core.types.PrimitiveType, org.openhab.core.types.State*/ {

    as<T>(arg0: java.lang.Class<T>): T;
    equals(arg0: any /*java.lang.Object*/): boolean;
    format(arg0: string): string;
    getBytes(): bytearray;
    getMimeType(): string;
    toFullString(): string;
    toString(): string;

  } // end RawType


} // end namespace org.openhab.core.library.types