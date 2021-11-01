/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
//// <reference path="openhab-3.0.0-gen.d.ts"/>

interface StringStatic {

  readonly class: any;
  new(arg0: bytearray): string;
  new(arg0: bytearray, arg1: int, arg2: int): string;
  new(arg0: bytearray, arg1: any /*java.nio.charset.Charset*/): string;
  new(arg0: bytearray, arg1: string): string;
  new(arg0: bytearray, arg1: int, arg2: int, arg3: any /*java.nio.charset.Charset*/): string;
  new(arg0: any /*java.lang.StringBuilder*/): string;
  new(arg0: any /*java.lang.StringBuffer*/): string;
  new(arg0: chararray, arg1: int, arg2: int): string;
  new(arg0: chararray): string;
  new(arg0: string): string;
  new(): string;
  new(arg0: bytearray, arg1: int, arg2: int, arg3: string): string;
  new(arg0: bytearray, arg1: int): string;
  new(arg0: bytearray, arg1: int, arg2: int, arg3: int): string;
  new(arg0: [int], arg1: int, arg2: int): string;
  copyValueOf(arg0: chararray, arg1: int, arg2: int): string;
  copyValueOf(arg0: chararray): string;
  format(arg0: string, ...arg1: any /*java.lang.Object*/[]): string;
  format(arg0: java.util.Locale, arg1: string, ...arg2: any /*java.lang.Object*/[]): string;
  join(arg0: any /*java.lang.CharSequence*/, ...arg1: any /*java.lang.CharSequence*/[]): string;
  join(arg0: any /*java.lang.CharSequence*/, arg1: java.lang.Iterable<any /*java.lang.CharSequence*/>): string;
  valueOf(arg0: float): string;
  valueOf(arg0: int): string;
  valueOf(arg0: boolean): string;
  valueOf(arg0: long): string;
  valueOf(arg0: double): string;
  valueOf(arg0: any /*java.lang.Object*/): string;
  valueOf(arg0: any /*char*/): string;
  valueOf(arg0: chararray): string;
  valueOf(arg0: chararray, arg1: int, arg2: int): string;
}

export const String: StringStatic = Java.type("java.lang.String");


interface CollectorsStatic {

  readonly class: any;
  averagingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/;
  averagingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/;
  averagingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/;
  collectingAndThen<RR, R>(arg0: any /*java.util.stream.Collector*/, arg1: Func<R, RR>): any /*java.util.stream.Collector*/;
  counting(): any /*java.util.stream.Collector*/;
  filtering<T>(arg0: Predicate<T>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  flatMapping<T, U>(arg0: Func<T, java.util.stream.Stream<U>>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  groupingBy<K, T, M>(arg0: Func<T, K>, arg1: Supplier<M>, arg2: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  groupingBy<K, T>(arg0: Func<T, K>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  groupingBy<K, T>(arg0: Func<T, K>): any /*java.util.stream.Collector*/;
  groupingByConcurrent<K, T>(arg0: Func<T, K>): any /*java.util.stream.Collector*/;
  groupingByConcurrent<K, T, M>(arg0: Func<T, K>, arg1: Supplier<M>, arg2: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  groupingByConcurrent<K, T>(arg0: Func<T, K>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  joining(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.lang.CharSequence*/, arg2: any /*java.lang.CharSequence*/): any /*java.util.stream.Collector*/;
  joining(): any /*java.util.stream.Collector*/;
  joining(arg0: any /*java.lang.CharSequence*/): any /*java.util.stream.Collector*/;
  mapping<T, U>(arg0: Func<T, U>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  maxBy(arg0: any /*java.util.Comparator*/): any /*java.util.stream.Collector*/;
  minBy(arg0: any /*java.util.Comparator*/): any /*java.util.stream.Collector*/;
  partitioningBy<T>(arg0: Predicate<T>): any /*java.util.stream.Collector*/;
  partitioningBy<T>(arg0: Predicate<T>, arg1: any /*java.util.stream.Collector*/): any /*java.util.stream.Collector*/;
  reducing<T, U>(arg0: U, arg1: Func<T, U>, arg2: BinaryOperator<U>): any /*java.util.stream.Collector*/;
  reducing<T>(arg0: BinaryOperator<T>): any /*java.util.stream.Collector*/;
  reducing<T>(arg0: T, arg1: BinaryOperator<T>): any /*java.util.stream.Collector*/;
  summarizingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/;
  summarizingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/;
  summarizingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/;
  summingDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.Collector*/;
  summingInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.Collector*/;
  summingLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.Collector*/;
  toCollection<C>(arg0: Supplier<C>): any /*java.util.stream.Collector*/;
  toConcurrentMap<K, T, U, M>(arg0: Func<T, K>, arg1: Func<T, U>, arg2: BinaryOperator<U>, arg3: Supplier<M>): any /*java.util.stream.Collector*/;
  toConcurrentMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>, arg2: BinaryOperator<U>): any /*java.util.stream.Collector*/;
  toConcurrentMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>): any /*java.util.stream.Collector*/;
  toList(): any /*java.util.stream.Collector*/;
  toMap<K, T, U, M>(arg0: Func<T, K>, arg1: Func<T, U>, arg2: BinaryOperator<U>, arg3: Supplier<M>): any /*java.util.stream.Collector*/;
  toMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>, arg2: BinaryOperator<U>): any /*java.util.stream.Collector*/;
  toMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>): any /*java.util.stream.Collector*/;
  toSet(): any /*java.util.stream.Collector*/;
  toUnmodifiableList(): any /*java.util.stream.Collector*/;
  toUnmodifiableMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>): any /*java.util.stream.Collector*/;
  toUnmodifiableMap<K, T, U>(arg0: Func<T, K>, arg1: Func<T, U>, arg2: BinaryOperator<U>): any /*java.util.stream.Collector*/;
  toUnmodifiableSet(): any /*java.util.stream.Collector*/;
}

export const Collectors: CollectorsStatic = Java.type("java.util.stream.Collectors");


interface OffsetDateTimeStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.OffsetDateTime;
  now(arg0: any /*java.time.Clock*/): java.time.OffsetDateTime;
  now(arg0: any /*java.time.ZoneId*/): java.time.OffsetDateTime;
  now(): java.time.OffsetDateTime;
  of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: java.time.ZoneOffset): java.time.OffsetDateTime;
  of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset): java.time.OffsetDateTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneOffset): java.time.OffsetDateTime;
  ofInstant(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): java.time.OffsetDateTime;
  parse(arg0: any /*java.lang.CharSequence*/): java.time.OffsetDateTime;
  parse(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.time.format.DateTimeFormatter*/): java.time.OffsetDateTime;
  timeLineOrder(): any /*java.util.Comparator*/;
}

export const OffsetDateTime: OffsetDateTimeStatic = Java.type("java.time.OffsetDateTime");


interface TemporalFieldStatic {

  readonly class: any;
}

export const TemporalField: TemporalFieldStatic = Java.type("java.time.temporal.TemporalField");


interface LocalDateTimeStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.LocalDateTime;
  now(arg0: any /*java.time.ZoneId*/): java.time.LocalDateTime;
  now(): java.time.LocalDateTime;
  now(arg0: any /*java.time.Clock*/): java.time.LocalDateTime;
  of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime;
  of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime;
  of(arg0: java.time.LocalDate, arg1: java.time.LocalTime): java.time.LocalDateTime;
  of(arg0: int, arg1: java.time.Month, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime;
  ofEpochSecond(arg0: long, arg1: int, arg2: java.time.ZoneOffset): java.time.LocalDateTime;
  ofInstant(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): java.time.LocalDateTime;
  parse(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.time.format.DateTimeFormatter*/): java.time.LocalDateTime;
  parse(arg0: any /*java.lang.CharSequence*/): java.time.LocalDateTime;
}

export const LocalDateTime: LocalDateTimeStatic = Java.type("java.time.LocalDateTime");


interface OptionalStatic {

  readonly class: any;
  empty<T>(): java.util.Optional<T>;
  of<T>(arg0: T): java.util.Optional<T>;
  ofNullable<T>(arg0: T): java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


interface CollectionsStatic {

  readonly class: any;
  addAll<T>(arg0: java.util.Collection<T>, ...arg1: T[]): boolean;
  asLifoQueue(arg0: any /*java.util.Deque*/): any /*java.util.Queue*/;
  binarySearch<T>(arg0: java.util.List<T>, arg1: T, arg2: any /*java.util.Comparator*/): int;
  binarySearch<T>(arg0: java.util.List<java.lang.Comparable<T>>, arg1: T): int;
  checkedCollection<E>(arg0: java.util.Collection<E>, arg1: java.lang.Class<E>): java.util.Collection<E>;
  checkedList<E>(arg0: java.util.List<E>, arg1: java.lang.Class<E>): java.util.List<E>;
  checkedMap<K, V>(arg0: java.util.Map<K, V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.Map<K, V>;
  checkedNavigableMap<K, V>(arg0: any /*java.util.NavigableMap*/, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): any /*java.util.NavigableMap*/;
  checkedNavigableSet<E>(arg0: any /*java.util.NavigableSet*/, arg1: java.lang.Class<E>): any /*java.util.NavigableSet*/;
  checkedQueue<E>(arg0: any /*java.util.Queue*/, arg1: java.lang.Class<E>): any /*java.util.Queue*/;
  checkedSet<E>(arg0: java.util.Set<E>, arg1: java.lang.Class<E>): java.util.Set<E>;
  checkedSortedMap<K, V>(arg0: any /*java.util.SortedMap*/, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): any /*java.util.SortedMap*/;
  checkedSortedSet<E>(arg0: any /*java.util.SortedSet*/, arg1: java.lang.Class<E>): any /*java.util.SortedSet*/;
  copy<T>(arg0: java.util.List<T>, arg1: java.util.List<T>): void;
  disjoint(arg0: java.util.Collection<any /*java.lang.Object*/>, arg1: java.util.Collection<any /*java.lang.Object*/>): boolean;
  emptyEnumeration(): any /*java.util.Enumeration*/;
  emptyIterator<T>(): java.util.Iterator<T>;
  emptyList<T>(): java.util.List<T>;
  emptyListIterator(): any /*java.util.ListIterator*/;
  emptyMap<K, V>(): java.util.Map<K, V>;
  emptyNavigableMap(): any /*java.util.NavigableMap*/;
  emptyNavigableSet(): any /*java.util.NavigableSet*/;
  emptySet<T>(): java.util.Set<T>;
  emptySortedMap(): any /*java.util.SortedMap*/;
  emptySortedSet(): any /*java.util.SortedSet*/;
  enumeration<T>(arg0: java.util.Collection<T>): any /*java.util.Enumeration*/;
  fill<T>(arg0: java.util.List<T>, arg1: T): void;
  frequency(arg0: java.util.Collection<any /*java.lang.Object*/>, arg1: any /*java.lang.Object*/): int;
  indexOfSubList(arg0: java.util.List<any /*java.lang.Object*/>, arg1: java.util.List<any /*java.lang.Object*/>): int;
  lastIndexOfSubList(arg0: java.util.List<any /*java.lang.Object*/>, arg1: java.util.List<any /*java.lang.Object*/>): int;
  list(arg0: any /*java.util.Enumeration*/): any /*java.util.ArrayList*/;
  max<T>(arg0: java.util.Collection<T>): T;
  max<T>(arg0: java.util.Collection<T>, arg1: any /*java.util.Comparator*/): T;
  min<T>(arg0: java.util.Collection<T>): T;
  min<T>(arg0: java.util.Collection<T>, arg1: any /*java.util.Comparator*/): T;
  nCopies<T>(arg0: int, arg1: T): java.util.List<T>;
  newSetFromMap<E>(arg0: java.util.Map<E, boolean | null>): java.util.Set<E>;
  replaceAll<T>(arg0: java.util.List<T>, arg1: T, arg2: T): boolean;
  reverse(arg0: java.util.List<any /*java.lang.Object*/>): void;
  reverseOrder(arg0: any /*java.util.Comparator*/): any /*java.util.Comparator*/;
  reverseOrder(): any /*java.util.Comparator*/;
  rotate(arg0: java.util.List<any /*java.lang.Object*/>, arg1: int): void;
  shuffle(arg0: java.util.List<any /*java.lang.Object*/>, arg1: any /*java.util.Random*/): void;
  shuffle(arg0: java.util.List<any /*java.lang.Object*/>): void;
  singleton<T>(arg0: T): java.util.Set<T>;
  singletonList<T>(arg0: T): java.util.List<T>;
  singletonMap<K, V>(arg0: K, arg1: V): java.util.Map<K, V>;
  sort<T>(arg0: java.util.List<T>): void;
  sort<T>(arg0: java.util.List<T>, arg1: any /*java.util.Comparator*/): void;
  swap(arg0: java.util.List<any /*java.lang.Object*/>, arg1: int, arg2: int): void;
  synchronizedCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>;
  synchronizedList<T>(arg0: java.util.List<T>): java.util.List<T>;
  synchronizedMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>;
  synchronizedNavigableMap(arg0: any /*java.util.NavigableMap*/): any /*java.util.NavigableMap*/;
  synchronizedNavigableSet(arg0: any /*java.util.NavigableSet*/): any /*java.util.NavigableSet*/;
  synchronizedSet<T>(arg0: java.util.Set<T>): java.util.Set<T>;
  synchronizedSortedMap(arg0: any /*java.util.SortedMap*/): any /*java.util.SortedMap*/;
  synchronizedSortedSet(arg0: any /*java.util.SortedSet*/): any /*java.util.SortedSet*/;
  unmodifiableCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>;
  unmodifiableList<T>(arg0: java.util.List<T>): java.util.List<T>;
  unmodifiableMap<K, V>(arg0: java.util.Map<K, V>): java.util.Map<K, V>;
  unmodifiableNavigableMap(arg0: any /*java.util.NavigableMap*/): any /*java.util.NavigableMap*/;
  unmodifiableNavigableSet(arg0: any /*java.util.NavigableSet*/): any /*java.util.NavigableSet*/;
  unmodifiableSet<T>(arg0: java.util.Set<T>): java.util.Set<T>;
  unmodifiableSortedMap(arg0: any /*java.util.SortedMap*/): any /*java.util.SortedMap*/;
  unmodifiableSortedSet(arg0: any /*java.util.SortedSet*/): any /*java.util.SortedSet*/;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


interface TemporalStatic {

  readonly class: any;
}

export const Temporal: TemporalStatic = Java.type("java.time.temporal.Temporal");


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
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.Month;
  of(arg0: int): java.time.Month;
  valueOf(arg0: string): java.time.Month;
  valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
  values(): [java.time.Month];
}

export const Month: MonthStatic = Java.type("java.time.Month");


interface LocalDateStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.LocalDate;
  now(): java.time.LocalDate;
  now(arg0: any /*java.time.Clock*/): java.time.LocalDate;
  now(arg0: any /*java.time.ZoneId*/): java.time.LocalDate;
  of(arg0: int, arg1: int, arg2: int): java.time.LocalDate;
  of(arg0: int, arg1: java.time.Month, arg2: int): java.time.LocalDate;
  ofEpochDay(arg0: long): java.time.LocalDate;
  ofInstant(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): java.time.LocalDate;
  ofYearDay(arg0: int, arg1: int): java.time.LocalDate;
  parse(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.time.format.DateTimeFormatter*/): java.time.LocalDate;
  parse(arg0: any /*java.lang.CharSequence*/): java.time.LocalDate;
}

export const LocalDate: LocalDateStatic = Java.type("java.time.LocalDate");


interface ZoneOffsetStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.ZoneOffset;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): any /*java.time.ZoneId*/;
  getAvailableZoneIds(): java.util.Set<string>;
  of(arg0: string): java.time.ZoneOffset;
  of(arg0: string): any /*java.time.ZoneId*/;
  of(arg0: string, arg1: java.util.Map<string, string>): any /*java.time.ZoneId*/;
  ofHours(arg0: int): java.time.ZoneOffset;
  ofHoursMinutes(arg0: int, arg1: int): java.time.ZoneOffset;
  ofHoursMinutesSeconds(arg0: int, arg1: int, arg2: int): java.time.ZoneOffset;
  ofOffset(arg0: string, arg1: java.time.ZoneOffset): any /*java.time.ZoneId*/;
  ofTotalSeconds(arg0: int): java.time.ZoneOffset;
  systemDefault(): any /*java.time.ZoneId*/;
}

export const ZoneOffset: ZoneOffsetStatic = Java.type("java.time.ZoneOffset");


interface ChronoLocalDateTimeStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.chrono.ChronoLocalDateTime<any /*java.lang.Object*/>;
  timeLineOrder(): any /*java.util.Comparator*/;
}

export const ChronoLocalDateTime: ChronoLocalDateTimeStatic = Java.type("java.time.chrono.ChronoLocalDateTime");


interface LocalTimeStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.LocalTime;
  now(): java.time.LocalTime;
  now(arg0: any /*java.time.Clock*/): java.time.LocalTime;
  now(arg0: any /*java.time.ZoneId*/): java.time.LocalTime;
  of(arg0: int, arg1: int, arg2: int): java.time.LocalTime;
  of(arg0: int, arg1: int): java.time.LocalTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalTime;
  ofInstant(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): java.time.LocalTime;
  ofNanoOfDay(arg0: long): java.time.LocalTime;
  ofSecondOfDay(arg0: long): java.time.LocalTime;
  parse(arg0: any /*java.lang.CharSequence*/): java.time.LocalTime;
  parse(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.time.format.DateTimeFormatter*/): java.time.LocalTime;
}

export const LocalTime: LocalTimeStatic = Java.type("java.time.LocalTime");


interface StreamStatic {

  readonly class: any;
  builder(): any /*java.util.stream.Stream$Builder*/;
  concat<T>(arg0: java.util.stream.Stream<T>, arg1: java.util.stream.Stream<T>): java.util.stream.Stream<T>;
  empty<T>(): java.util.stream.Stream<T>;
  generate<T>(arg0: Supplier<T>): java.util.stream.Stream<T>;
  iterate<T>(arg0: T, arg1: UnaryOperator<T>): java.util.stream.Stream<T>;
  iterate<T>(arg0: T, arg1: Predicate<T>, arg2: UnaryOperator<T>): java.util.stream.Stream<T>;
  of<T>(arg0: T): java.util.stream.Stream<T>;
  of<T>(...arg0: T[]): java.util.stream.Stream<T>;
  ofNullable<T>(arg0: T): java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface ZonedDateTimeStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.ZonedDateTime;
  now(): java.time.ZonedDateTime;
  now(arg0: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  now(arg0: any /*java.time.Clock*/): java.time.ZonedDateTime;
  of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  of(arg0: java.time.LocalDateTime, arg1: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  ofInstant(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  ofInstant(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  ofLocal(arg0: java.time.LocalDateTime, arg1: any /*java.time.ZoneId*/, arg2: java.time.ZoneOffset): java.time.ZonedDateTime;
  ofStrict(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: any /*java.time.ZoneId*/): java.time.ZonedDateTime;
  parse(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.time.format.DateTimeFormatter*/): java.time.ZonedDateTime;
  parse(arg0: any /*java.lang.CharSequence*/): java.time.ZonedDateTime;
}

export const ZonedDateTime: ZonedDateTimeStatic = Java.type("java.time.ZonedDateTime");


interface VisibilityStatic {

  VISIBLE: org.openhab.core.automation.Visibility;
  HIDDEN: org.openhab.core.automation.Visibility;
  EXPERT: org.openhab.core.automation.Visibility;

  readonly class: any;
  valueOf(arg0: string): org.openhab.core.automation.Visibility;
  valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
  values(): [org.openhab.core.automation.Visibility];
}

export const Visibility: VisibilityStatic = Java.type("org.openhab.core.automation.Visibility");


interface DayOfWeekStatic {

  MONDAY: java.time.DayOfWeek;
  TUESDAY: java.time.DayOfWeek;
  WEDNESDAY: java.time.DayOfWeek;
  THURSDAY: java.time.DayOfWeek;
  FRIDAY: java.time.DayOfWeek;
  SATURDAY: java.time.DayOfWeek;
  SUNDAY: java.time.DayOfWeek;

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.DayOfWeek;
  of(arg0: int): java.time.DayOfWeek;
  valueOf(arg0: string): java.time.DayOfWeek;
  valueOf<T>(arg0: java.lang.Class<T>, arg1: string): T;
  values(): [java.time.DayOfWeek];
}

export const DayOfWeek: DayOfWeekStatic = Java.type("java.time.DayOfWeek");


interface IterableStatic {

  readonly class: any;
  new <T>(arg0: java.lang.Iterable<T>): java.lang.Iterable<T>;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface ChronologyStatic {

  readonly class: any;
  from(arg0: any /*java.time.temporal.TemporalAccessor*/): java.time.chrono.Chronology;
  getAvailableChronologies(): java.util.Set<java.time.chrono.Chronology>;
  of(arg0: string): java.time.chrono.Chronology;
  ofLocale(arg0: java.util.Locale): java.time.chrono.Chronology;
}

export const Chronology: ChronologyStatic = Java.type("java.time.chrono.Chronology");


