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
    export var ruleRegistry: org.openhab.core.automation.module.script.rulesupport.shared.RuleSupportRuleRegistryDelegate
    export var Rule: any // class java.lang.Class
    export var TriggerBuilder: any // class java.lang.Class
}

/**
 * openHAB 3.x default imports
 */
declare module '@runtime' {

    export var DecimalType: org.openhab.core.library.types.DecimalTypeClass
    export var PointType: org.openhab.core.library.types.PointTypeClass
    export var PercentType: org.openhab.core.library.types.PercentTypeClass
    export var StringListType: org.openhab.core.library.types.StringListTypeClass
    export var StringType: org.openhab.core.library.types.StringTypeClass
    export var DateTimeType: org.openhab.core.library.types.DateTimeTypeClass
    export var HSBType: org.openhab.core.library.types.HSBTypeClass
    export var RawType: org.openhab.core.library.types.RawTypeClass

    export var OnOffType: org.openhab.core.library.types.OnOffTypeClass
    export var RefreshType: org.openhab.core.types.RefreshTypeClass
    export var UnDefType: org.openhab.core.types.UnDefTypeClass
    export var UpDownType: org.openhab.core.library.types.UpDownTypeClass
    export var NextPreviousType: org.openhab.core.library.types.NextPreviousTypeClass
    export var PlayPauseType: org.openhab.core.library.types.PlayPauseTypeClass
    export var StopMoveType: org.openhab.core.library.types.StopMoveTypeClass
    export var OpenClosedType: org.openhab.core.library.types.OpenClosedTypeClass
    export var RewindFastforwardType: org.openhab.core.library.types.RewindFastforwardTypeClass
    export var IncreaseDecreaseType: org.openhab.core.library.types.IncreaseDecreaseTypeClass

    export var QuantityType: any // class java.lang.Class
    
    
    export var UP: org.openhab.core.library.types.UpDownType
    export var REFRESH: org.openhab.core.types.RefreshType
    export var NULL: org.openhab.core.types.UnDefType;
    export var UNDEF: org.openhab.core.types.UnDefType;
    export var OFF: org.openhab.core.library.types.OnOffType
    export var ON: org.openhab.core.library.types.OnOffType
    export var DOWN: org.openhab.core.library.types.UpDownType
    export var PLAY: org.openhab.core.library.types.PlayPauseType
    export var STOP: org.openhab.core.library.types.StopMoveType
    export var CLOSED: org.openhab.core.library.types.OpenClosedType
    export var INCREASE: org.openhab.core.library.types.IncreaseDecreaseType
    export var DECREASE: org.openhab.core.library.types.IncreaseDecreaseType
    export var PREVIOUS: org.openhab.core.library.types.NextPreviousType
    export var PAUSE: org.openhab.core.library.types.PlayPauseType
    export var NEXT: org.openhab.core.library.types.NextPreviousType
    export var REWIND: org.openhab.core.library.types.RewindFastforwardType
    export var FASTFORWARD: org.openhab.core.library.types.RewindFastforwardType
    export var OPEN: org.openhab.core.library.types.OpenClosedType
    export var MOVE: org.openhab.core.library.types.StopMoveType


    // date time static functions
    export var ChronoUnit: any // class java.lang.Class
    export var Duration: any // class java.lang.Class
    export var ZoneId: any // class java.lang.Class
    export var ZonedDateTime: java.time.ZonedDateTimeClass


    // services
    export var items: org.openhab.core.automation.module.script.internal.defaultscope.ItemRegistryDelegate
    export var itemRegistry: org.openhab.core.items.ItemRegistry
    export var ir: org.openhab.core.items.ItemRegistry
    export var rules: org.openhab.core.automation.RuleRegistry
    export var things: org.openhab.core.thing.ThingRegistry
    export var events: org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent
    export var actions: org.openhab.core.automation.module.script.internal.defaultscope.ScriptThingActions


    // units
    export var ImperialUnits: any // class java.lang.Class
    export var MetricPrefix: any // class java.lang.Class
    export var SIUnits: any // class java.lang.Class
    export var Units: any // class java.lang.Class
    export var BinaryPrefix: any // class java.lang.Class


    export var State: java.lang.Class<org.openhab.core.types.State> // class java.lang.Class
    export var Command: java.lang.Class<org.openhab.core.types.Command> // class java.lang.Class
    export var File: any // class java.lang.Class
    export var Files: any // class java.lang.Class
    export var Path: any // class java.lang.Class
    export var Paths: any // class java.lang.Class


    export var voice: any // class org.openhab.core.voice.internal.VoiceManagerImpl
    export var audio: any // class org.openhab.core.audio.internal.AudioManagerImpl
    export var URLEncoder: any // class java.lang.Class
    export var sharedcache: any // class org.openhab.automation.jsscripting.internal.scope.SharedCache$JSCache
    export var lifecycleTracker: any // class org.openhab.core.automation.module.script.LifecycleScriptExtensionProvider$LifecycleTracker
}
