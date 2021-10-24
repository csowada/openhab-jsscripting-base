
/** All openhab types */
// export const ArithmeticGroupFunction: org.openhab.core.library.types.ArithmeticGroupFunction = Java.type("org.openhab.core.library.types.ArithmeticGroupFunction");
// export const DateTimeGroupFunction: org.openhab.core.library.types.DateTimeGroupFunction = Java.type("org.openhab.core.library.types.DateTimeGroupFunction");
// xxx export const DateTimeType: org.openhab.core.library.types.DateTimeType = Java.type("org.openhab.core.library.types.DateTimeType");
// xxx export const DecimalType: org.openhab.core.library.types.DecimalType = Java.type("org.openhab.core.library.types.DecimalType");
// export const HSBType: org.openhab.core.library.types.HSBType = Java.type("org.openhab.core.library.types.HSBType");
// export const IncreaseDecreaseType: org.openhab.core.library.types.IncreaseDecreaseType = Java.type("org.openhab.core.library.types.IncreaseDecreaseType");
// export const NextPreviousType: org.openhab.core.library.types.NextPreviousType = Java.type("org.openhab.core.library.types.NextPreviousType");
// export const OnOffType: org.openhab.core.library.types.OnOffType = Java.type("org.openhab.core.library.types.OnOffType");
// export const OpenClosedType: org.openhab.core.library.types.OpenClosedType = Java.type("org.openhab.core.library.types.OpenClosedType");
// export const PercentType: org.openhab.core.library.types.PercentType = Java.type("org.openhab.core.library.types.PercentType");
// export const PlayPauseType: org.openhab.core.library.types.PlayPauseType = Java.type("org.openhab.core.library.types.PlayPauseType");
// export const PointType: org.openhab.core.library.types.PointType = Java.type("org.openhab.core.library.types.PointType");
// export const RawType: org.openhab.core.library.types.RawType = Java.type("org.openhab.core.library.types.RawType");
// export const RewindFastforwardType: org.openhab.core.library.types.RewindFastforwardType = Java.type("org.openhab.core.library.types.RewindFastforwardType");
// export const StopMoveType: org.openhab.core.library.types.StopMoveType = Java.type("org.openhab.core.library.types.StopMoveType");
// export const StringListType: org.openhab.core.library.types.StringListType = Java.type("org.openhab.core.library.types.StringListType");
// xxx export const StringType: org.openhab.core.library.types.StringType = Java.type("org.openhab.core.library.types.StringType");
// export const UpDownType: org.openhab.core.library.types.UpDownType = Java.type("org.openhab.core.library.types.UpDownType");

export const Type: org.openhab.core.types.Type = Java.type("org.openhab.core.types.Type");

interface QuantityTypeArithmeticGroupFunctionStatic {

    readonly class: any;
}

export const QuantityTypeArithmeticGroupFunction: QuantityTypeArithmeticGroupFunctionStatic = Java.type("org.openhab.core.library.types.QuantityTypeArithmeticGroupFunction");


interface UnDefTypeStatic {

    UNDEF: org.openhab.core.types.UnDefType;
    NULL: org.openhab.core.types.UnDefType;

    readonly class: org.openhab.core.types.UnDefType;
    valueOf(arg0: string): org.openhab.core.types.UnDefType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.types.UnDefType];
}

export const UnDefType: UnDefTypeStatic = Java.type("org.openhab.core.types.UnDefType");

interface OnOffTypeStatic {

    ON: org.openhab.core.library.types.OnOffType;
    OFF: org.openhab.core.library.types.OnOffType;

    readonly class: org.openhab.core.library.types.OnOffType;
    from(arg0: boolean): org.openhab.core.library.types.OnOffType;
    from(arg0: string): org.openhab.core.library.types.OnOffType;
    valueOf(arg0: string): org.openhab.core.library.types.OnOffType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.library.types.OnOffType];
}

export const OnOffType: OnOffTypeStatic = Java.type("org.openhab.core.library.types.OnOffType");

interface PlayPauseTypeStatic {

    PLAY: org.openhab.core.library.types.PlayPauseType;
    PAUSE: org.openhab.core.library.types.PlayPauseType;

    readonly class: org.openhab.core.library.types.PlayPauseType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    valueOf(arg0: string): org.openhab.core.library.types.PlayPauseType;
    values(): [org.openhab.core.library.types.PlayPauseType];
}

export const PlayPauseType: PlayPauseTypeStatic = Java.type("org.openhab.core.library.types.PlayPauseType");


interface RawTypeStatic {

    readonly class: org.openhab.core.library.types.RawType;
    new(arg0: bytearray, arg1: string): org.openhab.core.library.types.RawType;
    valueOf(arg0: string): org.openhab.core.library.types.RawType;
}

export const RawType: RawTypeStatic = Java.type("org.openhab.core.library.types.RawType");


interface StopMoveTypeStatic {

    STOP: org.openhab.core.library.types.StopMoveType;
    MOVE: org.openhab.core.library.types.StopMoveType;

    readonly class: org.openhab.core.library.types.StopMoveType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    valueOf(arg0: string): org.openhab.core.library.types.StopMoveType;
    values(): [org.openhab.core.library.types.StopMoveType];
}

export const StopMoveType: StopMoveTypeStatic = Java.type("org.openhab.core.library.types.StopMoveType");


interface OpenClosedTypeStatic {

    OPEN: org.openhab.core.library.types.OpenClosedType;
    CLOSED: org.openhab.core.library.types.OpenClosedType;

    readonly class: org.openhab.core.library.types.OpenClosedType;
    valueOf(arg0: string): org.openhab.core.library.types.OpenClosedType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.library.types.OpenClosedType];
}

export const OpenClosedType: OpenClosedTypeStatic = Java.type("org.openhab.core.library.types.OpenClosedType");

interface NextPreviousTypeStatic {

    NEXT: org.openhab.core.library.types.NextPreviousType;
    PREVIOUS: org.openhab.core.library.types.NextPreviousType;

    readonly class: org.openhab.core.library.types.NextPreviousType;
    valueOf(arg0: string): org.openhab.core.library.types.NextPreviousType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.library.types.NextPreviousType];
}

export const NextPreviousType: NextPreviousTypeStatic = Java.type("org.openhab.core.library.types.NextPreviousType");


interface DateTimeGroupFunctionStatic {

    readonly class: any;
}

export const DateTimeGroupFunction: DateTimeGroupFunctionStatic = Java.type("org.openhab.core.library.types.DateTimeGroupFunction");


interface ArithmeticGroupFunctionStatic {

    readonly class: any;
}

export const ArithmeticGroupFunction: ArithmeticGroupFunctionStatic = Java.type("org.openhab.core.library.types.ArithmeticGroupFunction");

interface RefreshTypeStatic {

    REFRESH: org.openhab.core.types.RefreshType;

    readonly class: org.openhab.core.types.RefreshType;
    valueOf(arg0: string): org.openhab.core.types.RefreshType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.types.RefreshType];
}

export const RefreshType: RefreshTypeStatic = Java.type("org.openhab.core.types.RefreshType");


interface PercentTypeStatic {

    readonly class: org.openhab.core.library.types.PercentType;
    new(arg0: string): org.openhab.core.library.types.PercentType;
    new(arg0: int): org.openhab.core.library.types.PercentType;
    new(): org.openhab.core.library.types.PercentType;
    new(arg0: java.math.BigDecimal): org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
}

export const PercentType: PercentTypeStatic = Java.type("org.openhab.core.library.types.PercentType");

interface HSBTypeStatic {

    readonly class: org.openhab.core.library.types.HSBType;
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.PercentType, arg2: org.openhab.core.library.types.PercentType): org.openhab.core.library.types.HSBType;
    new(): org.openhab.core.library.types.HSBType;
    new(arg0: string): org.openhab.core.library.types.HSBType;
    fromRGB(arg0: int, arg1: int, arg2: int): org.openhab.core.library.types.HSBType;
    fromXY(arg0: float, arg1: float): org.openhab.core.library.types.HSBType;
    valueOf(arg0: string): org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.HSBType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
}

export const HSBType: HSBTypeStatic = Java.type("org.openhab.core.library.types.HSBType");


interface RewindFastforwardTypeStatic {

    REWIND: org.openhab.core.library.types.RewindFastforwardType;
    FASTFORWARD: org.openhab.core.library.types.RewindFastforwardType;

    readonly class: org.openhab.core.library.types.RewindFastforwardType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    valueOf(arg0: string): org.openhab.core.library.types.RewindFastforwardType;
    values(): [org.openhab.core.library.types.RewindFastforwardType];
}

export const RewindFastforwardType: RewindFastforwardTypeStatic = Java.type("org.openhab.core.library.types.RewindFastforwardType");

interface IncreaseDecreaseTypeStatic {

    INCREASE: org.openhab.core.library.types.IncreaseDecreaseType;
    DECREASE: org.openhab.core.library.types.IncreaseDecreaseType;

    readonly class: org.openhab.core.library.types.IncreaseDecreaseType;
    valueOf(arg0: string): org.openhab.core.library.types.IncreaseDecreaseType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.library.types.IncreaseDecreaseType];
}

export const IncreaseDecreaseType: IncreaseDecreaseTypeStatic = Java.type("org.openhab.core.library.types.IncreaseDecreaseType");

interface UpDownTypeStatic {

    UP: org.openhab.core.library.types.UpDownType;
    DOWN: org.openhab.core.library.types.UpDownType;

    readonly class: org.openhab.core.library.types.UpDownType;
    valueOf(arg0: string): org.openhab.core.library.types.UpDownType;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.library.types.UpDownType];
}

export const UpDownType: UpDownTypeStatic = Java.type("org.openhab.core.library.types.UpDownType");


interface PointTypeStatic {

    readonly class: org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.StringType, arg1: org.openhab.core.library.types.StringType, arg2: org.openhab.core.library.types.StringType): org.openhab.core.library.types.PointType;
    new(arg0: string): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.DecimalType, arg2: org.openhab.core.library.types.DecimalType): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.DecimalType): org.openhab.core.library.types.PointType;
    new(): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.StringType, arg1: org.openhab.core.library.types.StringType): org.openhab.core.library.types.PointType;
    valueOf(arg0: string): org.openhab.core.library.types.PointType;
}

export const PointType: PointTypeStatic = Java.type("org.openhab.core.library.types.PointType");

interface StringListTypeStatic {

    readonly class: org.openhab.core.library.types.StringListType;
    new(arg0: string): org.openhab.core.library.types.StringListType;
    new(...arg0: string[]): org.openhab.core.library.types.StringListType;
    new(...arg0: org.openhab.core.library.types.StringType[]): org.openhab.core.library.types.StringListType;
    new(arg0: java.util.List<string>): org.openhab.core.library.types.StringListType;
    new(): org.openhab.core.library.types.StringListType;
    valueOf(arg0: string): org.openhab.core.library.types.StringListType;
}

export const StringListType: StringListTypeStatic = Java.type("org.openhab.core.library.types.StringListType");



interface StringTypeStatic {

    readonly class: org.openhab.core.library.types.StringType;
    new(arg0: string): org.openhab.core.library.types.StringType;
    new(): org.openhab.core.library.types.StringType;
    valueOf(arg0: string): org.openhab.core.library.types.StringType;
}

export const StringType: StringTypeStatic = Java.type("org.openhab.core.library.types.StringType");

interface DecimalTypeStatic {

    readonly class: org.openhab.core.library.types.DecimalType;
    new(arg0: double): org.openhab.core.library.types.DecimalType;
    new(arg0: long): org.openhab.core.library.types.DecimalType;
    new(arg0: java.math.BigDecimal): org.openhab.core.library.types.DecimalType;
    new(): org.openhab.core.library.types.DecimalType;
    new(arg0: string): org.openhab.core.library.types.DecimalType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
}

export const DecimalType: DecimalTypeStatic = Java.type("org.openhab.core.library.types.DecimalType");


interface DateTimeTypeStatic {

    readonly class: org.openhab.core.library.types.DateTimeType;
    new(arg0: java.time.ZonedDateTime): org.openhab.core.library.types.DateTimeType;
    new(): org.openhab.core.library.types.DateTimeType;
    new(arg0: string): org.openhab.core.library.types.DateTimeType;
    valueOf(arg0: string): org.openhab.core.library.types.DateTimeType;
}

export const DateTimeType: DateTimeTypeStatic = Java.type("org.openhab.core.library.types.DateTimeType");