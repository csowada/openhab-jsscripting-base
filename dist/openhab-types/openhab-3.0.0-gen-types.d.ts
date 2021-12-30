interface StringStatic {
    readonly class: any;
    new (arg0: bytearray): string;
    new (arg0: bytearray, arg1: int, arg2: int): string;
    new (arg0: bytearray, arg1: any): string;
    new (arg0: bytearray, arg1: string): string;
    new (arg0: bytearray, arg1: int, arg2: int, arg3: any): string;
    new (arg0: any): string;
    new (arg0: any): string;
    new (arg0: chararray, arg1: int, arg2: int): string;
    new (arg0: chararray): string;
    new (arg0: string): string;
    new (): string;
    new (arg0: bytearray, arg1: int, arg2: int, arg3: string): string;
    new (arg0: bytearray, arg1: int): string;
    new (arg0: bytearray, arg1: int, arg2: int, arg3: int): string;
    new (arg0: [int], arg1: int, arg2: int): string;
    copyValueOf(arg0: chararray, arg1: int, arg2: int): string;
    copyValueOf(arg0: chararray): string;
    format(arg0: string, ...arg1: any[]): string;
    format(arg0: java.util.Locale, arg1: string, ...arg2: any[]): string;
    join(arg0: any, ...arg1: any[]): string;
    join(arg0: any, arg1: java.lang.Iterable<any>): string;
    valueOf(arg0: float): string;
    valueOf(arg0: int): string;
    valueOf(arg0: boolean): string;
    valueOf(arg0: long): string;
    valueOf(arg0: double): string;
    valueOf(arg0: any): string;
    valueOf(arg0: any): string;
    valueOf(arg0: chararray): string;
    valueOf(arg0: chararray, arg1: int, arg2: int): string;
}
export declare const String: StringStatic;
interface CollectorsStatic {
    readonly class: any;
    averagingDouble(arg0: any): any;
    averagingInt(arg0: any): any;
    averagingLong(arg0: any): any;
    collectingAndThen<RR, R>(arg0: any, arg1: java.util.funktion.Func<R, RR>): any;
    counting(): any;
    filtering<T>(arg0: java.util.funktion.Predicate<T>, arg1: any): any;
    flatMapping<T, U>(arg0: java.util.funktion.Func<T, java.util.stream.Stream<U>>, arg1: any): any;
    groupingBy<K, T, M>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Supplier<M>, arg2: any): any;
    groupingBy<K, T>(arg0: java.util.funktion.Func<T, K>, arg1: any): any;
    groupingBy<K, T>(arg0: java.util.funktion.Func<T, K>): any;
    groupingByConcurrent<K, T>(arg0: java.util.funktion.Func<T, K>): any;
    groupingByConcurrent<K, T, M>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Supplier<M>, arg2: any): any;
    groupingByConcurrent<K, T>(arg0: java.util.funktion.Func<T, K>, arg1: any): any;
    joining(arg0: any, arg1: any, arg2: any): any;
    joining(): any;
    joining(arg0: any): any;
    mapping<T, U>(arg0: java.util.funktion.Func<T, U>, arg1: any): any;
    maxBy(arg0: any): any;
    minBy(arg0: any): any;
    partitioningBy<T>(arg0: java.util.funktion.Predicate<T>): any;
    partitioningBy<T>(arg0: java.util.funktion.Predicate<T>, arg1: any): any;
    reducing<T, U>(arg0: U, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>): any;
    reducing<T>(arg0: java.util.funktion.BinaryOperator<T>): any;
    reducing<T>(arg0: T, arg1: java.util.funktion.BinaryOperator<T>): any;
    summarizingDouble(arg0: any): any;
    summarizingInt(arg0: any): any;
    summarizingLong(arg0: any): any;
    summingDouble(arg0: any): any;
    summingInt(arg0: any): any;
    summingLong(arg0: any): any;
    toCollection<C>(arg0: java.util.funktion.Supplier<C>): any;
    toConcurrentMap<K, T, U, M>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>, arg3: java.util.funktion.Supplier<M>): any;
    toConcurrentMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>): any;
    toConcurrentMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>): any;
    toList(): any;
    toMap<K, T, U, M>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>, arg3: java.util.funktion.Supplier<M>): any;
    toMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>): any;
    toMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>): any;
    toSet(): any;
    toUnmodifiableList(): any;
    toUnmodifiableMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>): any;
    toUnmodifiableMap<K, T, U>(arg0: java.util.funktion.Func<T, K>, arg1: java.util.funktion.Func<T, U>, arg2: java.util.funktion.BinaryOperator<U>): any;
    toUnmodifiableSet(): any;
}
export declare const Collectors: CollectorsStatic;
interface OffsetDateTimeStatic {
    readonly class: any;
    from(arg0: any): java.time.OffsetDateTime;
    now(arg0: any): java.time.OffsetDateTime;
    now(arg0: any): java.time.OffsetDateTime;
    now(): java.time.OffsetDateTime;
    of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: java.time.ZoneOffset): java.time.OffsetDateTime;
    of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset): java.time.OffsetDateTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneOffset): java.time.OffsetDateTime;
    ofInstant(arg0: any, arg1: any): java.time.OffsetDateTime;
    parse(arg0: any): java.time.OffsetDateTime;
    parse(arg0: any, arg1: any): java.time.OffsetDateTime;
    timeLineOrder(): any;
}
export declare const OffsetDateTime: OffsetDateTimeStatic;
interface TemporalFieldStatic {
    readonly class: any;
}
export declare const TemporalField: TemporalFieldStatic;
interface LocalDateTimeStatic {
    readonly class: any;
    from(arg0: any): java.time.LocalDateTime;
    now(arg0: any): java.time.LocalDateTime;
    now(): java.time.LocalDateTime;
    now(arg0: any): java.time.LocalDateTime;
    of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime;
    of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime;
    of(arg0: java.time.LocalDate, arg1: java.time.LocalTime): java.time.LocalDateTime;
    of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime;
    ofEpochSecond(arg0: long, arg1: int, arg2: java.time.ZoneOffset): java.time.LocalDateTime;
    ofInstant(arg0: any, arg1: any): java.time.LocalDateTime;
    parse(arg0: any, arg1: any): java.time.LocalDateTime;
    parse(arg0: any): java.time.LocalDateTime;
}
export declare const LocalDateTime: LocalDateTimeStatic;
interface OptionalStatic {
    readonly class: any;
    empty<T>(): java.util.Optional<T>;
    of<T>(arg0: T): java.util.Optional<T>;
    ofNullable<T>(arg0: T): java.util.Optional<T>;
}
export declare const Optional: OptionalStatic;
interface CollectionsStatic {
    readonly class: any;
    addAll<T>(arg0: java.util.Collection<T>, ...arg1: T[]): boolean;
    asLifoQueue(arg0: any): any;
    binarySearch<T>(arg0: java.util.List<T>, arg1: T, arg2: any): int;
    binarySearch<T>(arg0: java.util.List<java.lang.Comparable<T>>, arg1: T): int;
    checkedCollection<E>(arg0: java.util.Collection<E>, arg1: java.lang.Class<E>): java.util.Collection<E>;
    checkedList<E>(arg0: java.util.List<E>, arg1: java.lang.Class<E>): java.util.List<E>;
    checkedMap<K, V>(arg0: java.util.Map<K, V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.Map<K, V>;
    checkedNavigableMap<K, V>(arg0: any, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): any;
    checkedNavigableSet<E>(arg0: any, arg1: java.lang.Class<E>): any;
    checkedQueue<E>(arg0: any, arg1: java.lang.Class<E>): any;
    checkedSet<E>(arg0: java.util.Set<E>, arg1: java.lang.Class<E>): java.util.Set<E>;
    checkedSortedMap<K, V>(arg0: any, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): any;
    checkedSortedSet<E>(arg0: any, arg1: java.lang.Class<E>): any;
    copy<T>(arg0: java.util.List<T>, arg1: java.util.List<T>): void;
    disjoint(arg0: java.util.Collection<any>, arg1: java.util.Collection<any>): boolean;
    emptyEnumeration(): any;
    emptyIterator<T>(): java.util.Iterator<T>;
    emptyList<T>(): java.util.List<T>;
    emptyListIterator(): any;
    emptyMap<K, V>(): java.util.Map<K, V>;
    emptyNavigableMap(): any;
    emptyNavigableSet(): any;
    emptySet<T>(): java.util.Set<T>;
    emptySortedMap(): any;
    emptySortedSet(): any;
    enumeration<T>(arg0: java.util.Collection<T>): any;
    fill<T>(arg0: java.util.List<T>, arg1: T): void;
    frequency(arg0: java.util.Collection<any>, arg1: any): int;
    indexOfSubList(arg0: java.util.List<any>, arg1: java.util.List<any>): int;
    lastIndexOfSubList(arg0: java.util.List<any>, arg1: java.util.List<any>): int;
    list(arg0: any): any;
    max<T>(arg0: java.util.Collection<T>): T;
    max<T>(arg0: java.util.Collection<T>, arg1: any): T;
    min<T>(arg0: java.util.Collection<T>): T;
    min<T>(arg0: java.util.Collection<T>, arg1: any): T;
    nCopies<T>(arg0: int, arg1: T): java.util.List<T>;
    newSetFromMap<E>(arg0: java.util.Map<E, boolean | null>): java.util.Set<E>;
    replaceAll<T>(arg0: java.util.List<T>, arg1: T, arg2: T): boolean;
    reverse(arg0: java.util.List<any>): void;
    reverseOrder(arg0: any): any;
    reverseOrder(): any;
    rotate(arg0: java.util.List<any>, arg1: int): void;
    shuffle(arg0: java.util.List<any>, arg1: any): void;
    shuffle(arg0: java.util.List<any>): void;
    singleton<T>(arg0: T): java.util.Set<T>;
    singletonList<T>(arg0: T): java.util.List<T>;
    singletonMap<K, V>(arg0: K, arg1: V): java.util.Map<K, V>;
    sort<T>(arg0: java.util.List<T>): void;
    sort<T>(arg0: java.util.List<T>, arg1: any): void;
    swap(arg0: java.util.List<any>, arg1: int, arg2: int): void;
    synchronizedCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>;
    synchronizedList<T>(arg0: java.util.List<T>): java.util.List<T>;
    synchronizedMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>;
    synchronizedNavigableMap(arg0: any): any;
    synchronizedNavigableSet(arg0: any): any;
    synchronizedSet<T>(arg0: java.util.Set<T>): java.util.Set<T>;
    synchronizedSortedMap(arg0: any): any;
    synchronizedSortedSet(arg0: any): any;
    unmodifiableCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>;
    unmodifiableList<T>(arg0: java.util.List<T>): java.util.List<T>;
    unmodifiableMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>;
    unmodifiableNavigableMap(arg0: any): any;
    unmodifiableNavigableSet(arg0: any): any;
    unmodifiableSet<T>(arg0: java.util.Set<T>): java.util.Set<T>;
    unmodifiableSortedMap(arg0: any): any;
    unmodifiableSortedSet(arg0: any): any;
}
export declare const Collections: CollectionsStatic;
interface TemporalStatic {
    readonly class: any;
}
export declare const Temporal: TemporalStatic;
interface MonthStatic {
    JANUARY: java.time.Month;
    FEBRUARY: java.time.Month;
    MARCH: java.time.Month;
    APRIL: java.time.Month;
    MAY: java.time.Month;
    JUNE: java.time.Month;
    JULY: java.time.Month;
    AUGUST: java.time.Month;
    SEPTEMBER: java.time.Month;
    OCTOBER: java.time.Month;
    NOVEMBER: java.time.Month;
    DECEMBER: java.time.Month;
    readonly class: any;
    from(arg0: any): java.time.Month;
    of(arg0: int): java.time.Month;
    valueOf(arg0: string): java.time.Month;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [java.time.Month];
}
export declare const Month: MonthStatic;
interface LocalDateStatic {
    readonly class: any;
    from(arg0: any): java.time.LocalDate;
    now(): java.time.LocalDate;
    now(arg0: any): java.time.LocalDate;
    now(arg0: any): java.time.LocalDate;
    of(arg0: int, arg1: int, arg2: int): java.time.LocalDate;
    of(arg0: int, arg1: java.time.Month, arg2: int): java.time.LocalDate;
    ofEpochDay(arg0: long): java.time.LocalDate;
    ofInstant(arg0: any, arg1: any): java.time.LocalDate;
    ofYearDay(arg0: int, arg1: int): java.time.LocalDate;
    parse(arg0: any, arg1: any): java.time.LocalDate;
    parse(arg0: any): java.time.LocalDate;
}
export declare const LocalDate: LocalDateStatic;
interface ZoneOffsetStatic {
    readonly class: any;
    from(arg0: any): java.time.ZoneOffset;
    from(arg0: any): any;
    getAvailableZoneIds(): java.util.Set<string>;
    of(arg0: string): java.time.ZoneOffset;
    of(arg0: string): any;
    of(arg0: string, arg1: java.util.Map<string, string>): any;
    ofHours(arg0: int): java.time.ZoneOffset;
    ofHoursMinutes(arg0: int, arg1: int): java.time.ZoneOffset;
    ofHoursMinutesSeconds(arg0: int, arg1: int, arg2: int): java.time.ZoneOffset;
    ofOffset(arg0: string, arg1: java.time.ZoneOffset): any;
    ofTotalSeconds(arg0: int): java.time.ZoneOffset;
    systemDefault(): any;
}
export declare const ZoneOffset: ZoneOffsetStatic;
interface ChronoLocalDateTimeStatic {
    readonly class: any;
    from(arg0: any): java.time.chrono.ChronoLocalDateTime<any>;
    timeLineOrder(): any;
}
export declare const ChronoLocalDateTime: ChronoLocalDateTimeStatic;
interface LocalTimeStatic {
    readonly class: any;
    from(arg0: any): java.time.LocalTime;
    now(): java.time.LocalTime;
    now(arg0: any): java.time.LocalTime;
    now(arg0: any): java.time.LocalTime;
    of(arg0: int, arg1: int, arg2: int): java.time.LocalTime;
    of(arg0: int, arg1: int): java.time.LocalTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalTime;
    ofInstant(arg0: any, arg1: any): java.time.LocalTime;
    ofNanoOfDay(arg0: long): java.time.LocalTime;
    ofSecondOfDay(arg0: long): java.time.LocalTime;
    parse(arg0: any): java.time.LocalTime;
    parse(arg0: any, arg1: any): java.time.LocalTime;
}
export declare const LocalTime: LocalTimeStatic;
interface StreamStatic {
    readonly class: any;
    builder(): any;
    concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>;
    empty<T>(): java.util.stream.Stream<T>;
    generate<T>(arg0: java.util.funktion.Supplier<T>): java.util.stream.Stream<T>;
    iterate<T>(arg0: T, arg1: java.util.funktion.UnaryOperator<T>): java.util.stream.Stream<T>;
    iterate<T>(arg0: T, arg1: java.util.funktion.Predicate<T>, arg2: java.util.funktion.UnaryOperator<T>): java.util.stream.Stream<T>;
    of<T>(arg0: T): java.util.stream.Stream<T>;
    of<T>(...arg0: T[]): java.util.stream.Stream<T>;
    ofNullable<T>(arg0: T): java.util.stream.Stream<T>;
}
export declare const Stream: StreamStatic;
interface ZonedDateTimeStatic {
    readonly class: any;
    from(arg0: any): java.time.ZonedDateTime;
    now(): java.time.ZonedDateTime;
    now(arg0: any): java.time.ZonedDateTime;
    now(arg0: any): java.time.ZonedDateTime;
    of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: any): java.time.ZonedDateTime;
    of(arg0: java.time.LocalDateTime, arg1: any): java.time.ZonedDateTime;
    of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: any): java.time.ZonedDateTime;
    ofInstant(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: any): java.time.ZonedDateTime;
    ofInstant(arg0: any, arg1: any): java.time.ZonedDateTime;
    ofLocal(arg0: java.time.LocalDateTime, arg1: any, arg2: java.time.ZoneOffset): java.time.ZonedDateTime;
    ofStrict(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: any): java.time.ZonedDateTime;
    parse(arg0: any, arg1: any): java.time.ZonedDateTime;
    parse(arg0: any): java.time.ZonedDateTime;
}
export declare const ZonedDateTime: ZonedDateTimeStatic;
interface VisibilityStatic {
    VISIBLE: org.openhab.core.automation.Visibility;
    HIDDEN: org.openhab.core.automation.Visibility;
    EXPERT: org.openhab.core.automation.Visibility;
    readonly class: any;
    valueOf(arg0: string): org.openhab.core.automation.Visibility;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [org.openhab.core.automation.Visibility];
}
export declare const Visibility: VisibilityStatic;
interface DayOfWeekStatic {
    MONDAY: java.time.DayOfWeek;
    TUESDAY: java.time.DayOfWeek;
    WEDNESDAY: java.time.DayOfWeek;
    THURSDAY: java.time.DayOfWeek;
    FRIDAY: java.time.DayOfWeek;
    SATURDAY: java.time.DayOfWeek;
    SUNDAY: java.time.DayOfWeek;
    readonly class: any;
    from(arg0: any): java.time.DayOfWeek;
    of(arg0: int): java.time.DayOfWeek;
    valueOf(arg0: string): java.time.DayOfWeek;
    valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
    values(): [java.time.DayOfWeek];
}
export declare const DayOfWeek: DayOfWeekStatic;
interface IterableStatic {
    readonly class: any;
    new <T>(arg0: java.lang.Iterable<T>): java.lang.Iterable<T>;
}
export declare const Iterable: IterableStatic;
interface ChronologyStatic {
    readonly class: any;
    from(arg0: any): java.time.chrono.Chronology;
    getAvailableChronologies(): java.util.Set<java.time.chrono.Chronology>;
    of(arg0: string): java.time.chrono.Chronology;
    ofLocale(arg0: java.util.Locale): java.time.chrono.Chronology;
}
export declare const Chronology: ChronologyStatic;
export {};
