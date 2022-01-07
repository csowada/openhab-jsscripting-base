declare namespace org.openhab.core.types.helper {
  interface EnumTypeStatic<T extends java.lang.Class<T>> extends java.lang.Enum<T> {
    readonly class: T;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    valueOf(arg0: string): T;
    values(): T[];
  }
}

declare namespace org.openhab.core.types {



  interface RefreshTypeClass {
    readonly static: RefreshTypeStatic
    readonly class: java.lang.Class<RefreshType>
  }

  /* enum */interface RefreshType extends java.lang.Enum<any>, PrimitiveType, Command {
    // REFRESH:RefreshType;
  }

  interface RefreshTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<RefreshType> {
    REFRESH: org.openhab.core.types.RefreshType;
  }

  interface UnDefTypeClass {
    readonly static: UnDefTypeStatic
    readonly class: java.lang.Class<UnDefType>
  }

  /* enum */interface UnDefType extends java.lang.Enum<any>, PrimitiveType, State {
    // UNDEF:UnDefType;
    // NULL:UnDefType;
  }

  interface UnDefTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<UnDefType> {
    UNDEF: org.openhab.core.types.UnDefType;
    NULL: org.openhab.core.types.UnDefType;
  }
}

declare namespace org.openhab.core.library.types {

  /*
   * ********************************************************
   * UpDowen TYPE
   * *********************************************************
   */

  interface UpDownTypeClass {
    readonly static: UpDownTypeStatic
    readonly class: java.lang.Class<UpDownType>
  }

    /* enum */interface UpDownType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // UP:UpDownType;
    // DOWN:UpDownType;
  }

  interface UpDownTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<UpDownType> {

    UP: org.openhab.core.library.types.UpDownType;
    DOWN: org.openhab.core.library.types.UpDownType;

  }

  /*
   * ********************************************************
   * NextPrevious TYPE
   * *********************************************************
   */

  interface NextPreviousTypeClass {
    readonly static: NextPreviousTypeStatic
    readonly class: java.lang.Class<NextPreviousType>
  }

    /* enum */interface NextPreviousType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command {
    // NEXT:NextPreviousType;
    // PREVIOUS:NextPreviousType;
  }

  interface NextPreviousTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<NextPreviousType> {
    NEXT: org.openhab.core.library.types.NextPreviousType;
    PREVIOUS: org.openhab.core.library.types.NextPreviousType;
  }

  /*
   * ********************************************************
   * PlayPause TYPE
   * *********************************************************
   */

  interface PlayPauseTypeClass {
    readonly static: PlayPauseTypeStatic
    readonly class: java.lang.Class<PlayPauseType>
  }

    /* enum */interface PlayPauseType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // PLAY:PlayPauseType;
    // PAUSE:PlayPauseType;
  }

  interface PlayPauseTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<PlayPauseType> {
    PLAY: org.openhab.core.library.types.PlayPauseType;
    PAUSE: org.openhab.core.library.types.PlayPauseType;
  }

  /*
   * ********************************************************
   * StopMove TYPE
   * *********************************************************
   */

  interface StopMoveTypeClass {
    readonly static: StopMoveTypeStatic
    readonly class: java.lang.Class<StopMoveType>
  }

    /* enum */interface StopMoveType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command {
    // STOP:StopMoveType;
    // MOVE:StopMoveType;
  }

  interface StopMoveTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<StopMoveType> {
    STOP: org.openhab.core.library.types.StopMoveType;
    MOVE: org.openhab.core.library.types.StopMoveType;
  }

  /*
   * ********************************************************
   * OpenClosed TYPE
   * *********************************************************
   */

  interface OpenClosedTypeClass {
    readonly static: OpenClosedTypeStatic
    readonly class: java.lang.Class<OpenClosedType>
  }

    /* enum */interface OpenClosedType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // OPEN:OpenClosedType;
    // CLOSED:OpenClosedType;
  }

  interface OpenClosedTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<OpenClosedType> {
    OPEN: org.openhab.core.library.types.OpenClosedType;
    CLOSED: org.openhab.core.library.types.OpenClosedType;
  }

  /*
   * ********************************************************
   * OnOff TYPE
   * *********************************************************
   */

  interface OnOffTypeClass {
    readonly static: OnOffTypeStatic
    readonly class: java.lang.Class<OnOffType>
  }

    /* enum */interface OnOffType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // ON:OnOffType;
    // OFF:OnOffType;
  }

  interface OnOffTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<OnOffType> {
    ON: org.openhab.core.library.types.OnOffType;
    OFF: org.openhab.core.library.types.OnOffType;
  }

  interface RewindFastforwardTypeClass {
    readonly static: RewindFastforwardTypeStatic
    readonly class: java.lang.Class<RewindFastforwardType>
  }

  /*
   * ********************************************************
   * RewindFastforward TYPE
   * *********************************************************
   */

    /* enum */interface RewindFastforwardType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // REWIND:RewindFastforwardType;
    // FASTFORWARD:RewindFastforwardType;
  }

  interface RewindFastforwardTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<RewindFastforwardType> {
    REWIND: org.openhab.core.library.types.RewindFastforwardType;
    FASTFORWARD: org.openhab.core.library.types.RewindFastforwardType;
  }

  /*
   * ********************************************************
   * IncreaseDecrease TYPE
   * *********************************************************
   */

  interface IncreaseDecreaseTypeClass {
    readonly static: IncreaseDecreaseTypeStatic
    readonly class: java.lang.Class<IncreaseDecreaseType>
  }

    /* enum */interface IncreaseDecreaseType extends java.lang.Enum<any>, org.openhab.core.types.PrimitiveType, org.openhab.core.types.Command {
    // INCREASE:IncreaseDecreaseType;
    // DECREASE:IncreaseDecreaseType;
  }

  interface IncreaseDecreaseTypeStatic extends org.openhab.core.types.helper.EnumTypeStatic<IncreaseDecreaseType> {
    INCREASE: org.openhab.core.library.types.IncreaseDecreaseType;
    DECREASE: org.openhab.core.library.types.IncreaseDecreaseType;
  }

  /*
   * ********************************************************
   * Point TYPE
   * *********************************************************
   */

  interface PointTypeClass extends PointTypeConstructor {
    readonly static: PointTypeStatic
    readonly class: java.lang.Class<PointType>
  }

  interface PointTypeConstructor {
    new(arg0: org.openhab.core.library.types.StringType, arg1: org.openhab.core.library.types.StringType, arg2: org.openhab.core.library.types.StringType): org.openhab.core.library.types.PointType;
    new(arg0: string): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.DecimalType, arg2: org.openhab.core.library.types.DecimalType): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.DecimalType): org.openhab.core.library.types.PointType;
    new(): org.openhab.core.library.types.PointType;
    new(arg0: org.openhab.core.library.types.StringType, arg1: org.openhab.core.library.types.StringType): org.openhab.core.library.types.PointType;
  }

  interface PointType extends java.lang.Object, org.openhab.core.types.ComplexType, org.openhab.core.types.Command, org.openhab.core.types.State {

  } // end PointType

  interface PointTypeStatic extends PointTypeConstructor {
    readonly class: org.openhab.core.library.types.PointType;
    valueOf(arg0: string): org.openhab.core.library.types.PointType;
  }

  /*
   * ********************************************************
   * Percent TYPE
   * *********************************************************
   */

  interface PercentTypeClass extends PercentTypeConstructor {
    readonly static: PercentTypeStatic
    readonly class: java.lang.Class<PercentType>
  }

  interface PercentTypeConstructor {
    new(arg0: string): org.openhab.core.library.types.PercentType;
    new(arg0: int): org.openhab.core.library.types.PercentType;
    new(): org.openhab.core.library.types.PercentType;
    new(arg0: java.math.BigDecimal): org.openhab.core.library.types.PercentType;
  }

  interface PercentType extends DecimalType {

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

  interface PercentTypeStatic extends PercentTypeConstructor {
    readonly class: org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
  }

  /*
   * ********************************************************
   * String TYPE
   * *********************************************************
   */

  interface StringTypeClass extends StringTypeConstructor {
    readonly static: StringTypeStatic
    readonly class: java.lang.Class<StringType>
  }

  interface StringTypeConstructor {
    new(arg0: string): org.openhab.core.library.types.StringType;
    new(): org.openhab.core.library.types.StringType;
  }

  interface StringType extends java.lang.Object, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    // nothing special
  }

  interface StringTypeStatic extends StringTypeConstructor {
    readonly class: org.openhab.core.library.types.StringType;
    valueOf(arg0: string): org.openhab.core.library.types.StringType;
  }

  /*
   * ********************************************************
   * StringList TYPE
   * *********************************************************
   */

  interface StringListTypeClass extends StringListTypeConstructor {
    readonly static: StringListTypeStatic
    readonly class: java.lang.Class<StringListType>
  }

  interface StringListTypeConstructor {
    new(arg0: string): org.openhab.core.library.types.StringListType;
    new(...arg0: string[]): org.openhab.core.library.types.StringListType;
    new(...arg0: org.openhab.core.library.types.StringType[]): org.openhab.core.library.types.StringListType;
    new(arg0: java.util.List<string>): org.openhab.core.library.types.StringListType;
    new(): org.openhab.core.library.types.StringListType;
  }

  interface StringListType extends java.lang.Object, org.openhab.core.types.Command, org.openhab.core.types.State {
    // nothing special
  }

  interface StringListTypeStatic extends StringListTypeConstructor {
    readonly class: org.openhab.core.library.types.StringListType;
    valueOf(arg0: string): org.openhab.core.library.types.StringListType;
  }

  /*
   * ********************************************************
   * DateTime TYPE
   * *********************************************************
   */

  interface DateTimeTypeClass extends DateTimeTypeConstructor {
    readonly static: DateTimeTypeStatic
    readonly class: java.lang.Class<DateTimeType>
  }

  interface DateTimeTypeConstructor {
    new(arg0: java.time.ZonedDateTime): org.openhab.core.library.types.DateTimeType;
    new(): org.openhab.core.library.types.DateTimeType;
    new(arg0: string): org.openhab.core.library.types.DateTimeType;
  }

  interface DateTimeType extends java.lang.Object, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command {
    format(arg0: java.util.Locale, arg1: string): string;
    format(arg0: string): string;
    getZonedDateTime(): java.time.ZonedDateTime;
    toLocaleZone(): DateTimeType;
    toZone(arg0: any /*java.time.ZoneId*/): DateTimeType;
    toZone(arg0: string): DateTimeType;
  }

  interface DateTimeTypeStatic extends DateTimeTypeConstructor {
    readonly class: org.openhab.core.library.types.DateTimeType;
    valueOf(arg0: string): org.openhab.core.library.types.DateTimeType;
  }

   /*
   * ********************************************************
   * Decimal TYPE
   * *********************************************************
   */

  interface HostClass<CLASS = any, STATIC = any> {

    new(value?: double | string | java.math.BigDecimal): DecimalType;

    readonly static: STATIC

    readonly class: java.lang.Class<CLASS>
  }

  interface DecimalTypeClass extends HostClass {

    new(value: double): DecimalType;
    // new(arg0: long): DecimalType;
    new(value: java.math.BigDecimal): DecimalType;
    new(): DecimalType;
    new(value: string): DecimalType;

    // readonly static: DecimalTypeStatic
    // readonly class: java.lang.Class<DecimalType>
  }

  interface DecimalType extends org.openhab.core.types.PrimitiveType, org.openhab.core.types.State, org.openhab.core.types.Command, java.lang.Comparable<DecimalType> {
    byteValue(): any /*byte*/;
    doubleValue(): double;
    floatValue(): float;
    intValue(): int;
    longValue(): long;
    shortValue(): any /*short*/;
    toBigDecimal(): java.math.BigDecimal;
  }

  interface DecimalTypeStatic {
    readonly class: org.openhab.core.library.types.DecimalType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
  }

  /*
   * ********************************************************
   * HSB TYPE
   * *********************************************************
   */

  interface HSBTypeClass extends HSBTypeConstructor {
    readonly static: HSBTypeStatic
    readonly class: java.lang.Class<HSBType>
  }

  interface HSBTypeConstructor {
    new(arg0: org.openhab.core.library.types.DecimalType, arg1: org.openhab.core.library.types.PercentType, arg2: org.openhab.core.library.types.PercentType): org.openhab.core.library.types.HSBType;
    new(): org.openhab.core.library.types.HSBType;
    new(arg0: string): org.openhab.core.library.types.HSBType;
  }

  interface HSBType extends PercentType, org.openhab.core.types.ComplexType, org.openhab.core.types.State, org.openhab.core.types.Command {

    // as<T>(arg0: java.lang.Class<T>): T;
    byteValue(): any /*byte*/;
    // compareTo(arg0: DecimalType): int;
    doubleValue(): double;
    // equals(arg0: any /*java.lang.Object*/): boolean;
    floatValue(): float;
    // format(arg0: string): string;
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
    // toFullString(): string;
    toRGB(): [PercentType];
    // toString(): string;
    toXY(): [PercentType];

  } // end HSBType

  interface HSBTypeStatic extends HSBTypeConstructor {

    readonly class: org.openhab.core.library.types.HSBType;

    fromRGB(arg0: int, arg1: int, arg2: int): org.openhab.core.library.types.HSBType;
    fromXY(arg0: float, arg1: float): org.openhab.core.library.types.HSBType;
    valueOf(arg0: string): org.openhab.core.library.types.PercentType;
    valueOf(arg0: string): org.openhab.core.library.types.HSBType;
    valueOf(arg0: string): org.openhab.core.library.types.DecimalType;
  }

  /*
   * ********************************************************
   * RAW TYPE
   * *********************************************************
   */

  interface RawTypeClass extends RawTypeConstructor {
    readonly static: RawTypeStatic
    readonly class: java.lang.Class<RawType>
  }

  interface RawTypeConstructor {
    new(arg0: bytearray, arg1: string): org.openhab.core.library.types.RawType;
  }

  interface RawType extends java.lang.Object, org.openhab.core.types.PrimitiveType, org.openhab.core.types.State {
    getBytes(): bytearray;
  }

  interface RawTypeStatic extends RawTypeConstructor {
    readonly class: org.openhab.core.library.types.RawType;
    valueOf(arg0: string): org.openhab.core.library.types.RawType;
  }

  /* GROUP FUNCTIONS */

    /*
   * ********************************************************
   * QuantityTypeArithmeticGroup TYPE
   * *********************************************************
   */

    interface QuantityTypeArithmeticGroupFunctionClass {
      readonly static: QuantityTypeArithmeticGroupFunctionStatic
      readonly class: java.lang.Class<RawType>
    }

    interface QuantityTypeArithmeticGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {
      calculate(arg0: java.util.Set<org.openhab.core.items.Item>): org.openhab.core.types.State;
      getParameters(): org.openhab.core.types.State[];
      getStateAs<T>(arg0: java.util.Set<org.openhab.core.items.Item>, arg1: java.lang.Class<T>): T;
    }
  
    interface QuantityTypeArithmeticGroupFunctionStatic {
      readonly class: QuantityTypeArithmeticGroupFunction;
    }

  /*
   * ********************************************************
   * DateTimeGroup TYPE
   * *********************************************************
   */

  interface DateTimeGroupFunctionClass {
    readonly static: DateTimeGroupFunctionStatic
    readonly class: java.lang.Class<DateTimeGroupFunction>
  }

  interface DateTimeGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {
    calculate(arg0: java.util.Set<org.openhab.core.items.Item>): org.openhab.core.types.State;
    getParameters():org.openhab.core.types.State[];
    getStateAs<T>(arg0: java.util.Set<org.openhab.core.items.Item>, arg1: java.lang.Class<T>): T;
  }

  interface DateTimeGroupFunctionStatic {
    readonly class: DateTimeGroupFunction;
  }

  /*
   * ********************************************************
   * ArithmeticGroupFunction TYPE
   * *********************************************************
   */

  interface ArithmeticGroupFunctionClass {
    readonly static: ArithmeticGroupFunctionStatic
    readonly class: java.lang.Class<ArithmeticGroupFunction>
  }

  interface ArithmeticGroupFunction/* extends org.openhab.core.items.GroupFunction*/ {
    calculate(arg0: java.util.Set<org.openhab.core.items.Item>): org.openhab.core.types.State;
    getParameters(): org.openhab.core.types.State[];
    getStateAs<T>(arg0: java.util.Set<org.openhab.core.items.Item>, arg1: java.lang.Class<T>): T;
  } // end ArithmeticGroupFunction

  interface ArithmeticGroupFunctionStatic {
    readonly class: ArithmeticGroupFunction;
  }

}