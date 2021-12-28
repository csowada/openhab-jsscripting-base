declare module '@runtime/JavaScriptUtils'

/**
 * openHAB 3.x OSGi imports
 */
 declare module '@runtime/osgi' {
    export var lifecycle: any // class org.openhab.automation.jsscripting.internal.scope.Lifecycle
    export var classutil: any // class org.openhab.automation.jsscripting.internal.scope.ClassExtender
    export var bundleContext: any // class org.eclipse.osgi.internal.framework.BundleContextImpl
}

/**
 * openHAB 3.x RuleSupport imports
 */
declare module '@runtime/RuleSupport' {
    export var Condition: any // class java.lang.Class
    export var automationManager: org.openhab.core.automation.module.script.rulesupport.shared.ScriptedAutomationManager
    export var Action: any // class java.lang.Class
    export var ConditionBuilder: any // class java.lang.Class
    export var Trigger: any // class java.lang.Class
    export var Configuration: any // class java.lang.Class
    export var ActionBuilder: any // class java.lang.Class
    export var ModuleBuilder: any // class java.lang.Class
    export var ruleRegistry: any // class org.openhab.core.automation.module.script.rulesupport.shared.RuleSupportRuleRegistryDelegate
    export var Rule: any // class java.lang.Class
    export var TriggerBuilder: any // class java.lang.Class
}

/**
 * openHAB 3.x default imports
 */
declare module '@runtime' {
    export var voice: any // class org.openhab.core.voice.internal.VoiceManagerImpl
    export var DOWN: org.openhab.core.library.types.UpDownType
    export var StringType: any // class java.lang.Class
    export var rules: any // class org.openhab.core.automation.internal.RuleRegistryImpl
    export var NextPreviousType: any // class java.lang.Class
    export var PLAY: org.openhab.core.library.types.PlayPauseType
    export var ImperialUnits: any // class java.lang.Class
    export var ZonedDateTime: any // class java.lang.Class
    export var INCREASE: org.openhab.core.library.types.IncreaseDecreaseType
    export var OpenClosedType: any // class java.lang.Class
    export var things: any // class org.openhab.core.thing.internal.ThingRegistryImpl
    export var UP: org.openhab.core.library.types.UpDownType
    export var RawType: any // class java.lang.Class
    export var StringListType: any // class java.lang.Class
    export var events: org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent
    export var SIUnits: any // class java.lang.Class
    export var itemRegistry: org.openhab.core.items.ItemRegistry
    export var NULL: org.openhab.core.types.UnDefType;
    export var STOP: org.openhab.core.library.types.StopMoveType
    export var UnDefType: any // class java.lang.Class
    export var ir: org.openhab.core.items.ItemRegistry
    export var Duration: any // class java.lang.Class
    export var RefreshType: any // class java.lang.Class
    export var Units: any // class java.lang.Class
    export var RewindFastforwardType: any // class java.lang.Class
    export var DateTimeType: any // class java.lang.Class
    export var QuantityType: any // class java.lang.Class
    export var State: any // class java.lang.Class
    export var DecimalType: any // class java.lang.Class
    export var IncreaseDecreaseType: any // class java.lang.Class
    export var BinaryPrefix: any // class java.lang.Class
    export var File: any // class java.lang.Class
    export var items: any // class org.openhab.core.automation.module.script.internal.defaultscope.ItemRegistryDelegate
    export var actions: any // class org.openhab.core.automation.module.script.internal.defaultscope.ScriptThingActions
    export var CLOSED: org.openhab.core.library.types.OpenClosedType
    export var REFRESH: org.openhab.core.types.RefreshType
    export var MetricPrefix: any // class java.lang.Class
    export var DECREASE: org.openhab.core.library.types.IncreaseDecreaseType
    export var StopMoveType: any // class java.lang.Class
    export var OFF: org.openhab.core.library.types.OnOffType
    export var PREVIOUS: org.openhab.core.library.types.NextPreviousType
    export var PAUSE: org.openhab.core.library.types.PlayPauseType
    export var NEXT: org.openhab.core.library.types.NextPreviousType
    export var REWIND: org.openhab.core.library.types.RewindFastforwardType
    export var Paths: any // class java.lang.Class
    export var audio: any // class org.openhab.core.audio.internal.AudioManagerImpl
    export var URLEncoder: any // class java.lang.Class
    export var Files: any // class java.lang.Class
    export var HSBType: any // class java.lang.Class
    export var sharedcache: any // class org.openhab.automation.jsscripting.internal.scope.SharedCache$JSCache
    export var ON: org.openhab.core.library.types.OnOffType
    export var Path: any // class java.lang.Class
    export var ZoneId: any // class java.lang.Class
    export var UpDownType: any // class java.lang.Class
    export var PercentType: any // class java.lang.Class
    export var OPEN: org.openhab.core.library.types.OpenClosedType
    export var MOVE: org.openhab.core.library.types.StopMoveType
    export var OnOffType: any // class java.lang.Class
    export var Command: any // class java.lang.Class
    export var lifecycleTracker: any // class org.openhab.core.automation.module.script.LifecycleScriptExtensionProvider$LifecycleTracker
    export var PlayPauseType: any // class java.lang.Class
    export var FASTFORWARD: org.openhab.core.library.types.RewindFastforwardType
    export var PointType: any // class java.lang.Class
    export var UNDEF: org.openhab.core.types.UnDefType;
    export var ChronoUnit: any // class java.lang.Class
}
