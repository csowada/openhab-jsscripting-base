type int = number;
type long = number;
type float = number;
type double = number;
type byte = number;
type char = string;

type chararray = [byte];
type bytearray = [char];

declare namespace java.lang {


    interface AutoCloseable { }
    interface Cloneable { }

    class Object {
        readonly class: any;
        toString(): string;
    }

    interface Class<T> extends Object {
        readonly class: Class<T>;
    }

    interface Enum<T> extends Object {
        readonly class: Class<T>;
        compareTo<E>(arg0: E): int;
        getDeclaringClass<E>(): java.lang.Class<E>;
        name(): string;
        ordinal(): int;
        valueOf(enumType: java.lang.Class<T>, name: string): T;
    }

    // type Object = any;

    interface Runnable {

        (): void;

    } // end Runnable

    interface Comparable<T> {

        compareTo(arg0: T): int;

    } // end Comparable

    interface Iterable<T> {

        (): java.util.Iterator<T>;
        forEach?(arg0: java.util.funktion.Consumer<T>): void;
        spliterator?(): any /*java.util.Spliterator*/;
    
      } // end Iterable

      class String extends Object implements java.io.Serializable, Comparable<any> /*, CharSequence*/ {

        charAt(arg0: int): any /*char*/;
        chars(): any /*java.util.stream.IntStream*/;
        codePointAt(arg0: int): int;
        codePointBefore(arg0: int): int;
        codePointCount(arg0: int, arg1: int): int;
        codePoints(): any /*java.util.stream.IntStream*/;
        compareTo(arg0: string): int;
        compareToIgnoreCase(arg0: string): int;
        concat(arg0: string): string;
        contains(arg0: any /*java.lang.CharSequence*/): boolean;
        contentEquals(arg0: any /*java.lang.CharSequence*/): boolean;
        contentEquals(arg0: any /*java.lang.StringBuffer*/): boolean;
        endsWith(arg0: string): boolean;
        equals(arg0: any /*java.lang.Object*/): boolean;
        equalsIgnoreCase(arg0: string): boolean;
        getBytes(): bytearray;
        getBytes(arg0: any /*java.nio.charset.Charset*/): bytearray;
        getBytes(arg0: int, arg1: int, arg2: bytearray, arg3: int): void;
        getBytes(arg0: string): bytearray;
        getChars(arg0: int, arg1: int, arg2: chararray, arg3: int): void;
        indexOf(arg0: int): int;
        indexOf(arg0: int, arg1: int): int;
        indexOf(arg0: string): int;
        indexOf(arg0: string, arg1: int): int;
        intern(): string;
        isBlank(): boolean;
        isEmpty(): boolean;
        lastIndexOf(arg0: int): int;
        lastIndexOf(arg0: int, arg1: int): int;
        lastIndexOf(arg0: string): int;
        lastIndexOf(arg0: string, arg1: int): int;
        length(): int;
        lines(): java.util.stream.Stream<string>;
        matches(arg0: string): boolean;
        offsetByCodePoints(arg0: int, arg1: int): int;
        regionMatches(arg0: boolean, arg1: int, arg2: string, arg3: int, arg4: int): boolean;
        regionMatches(arg0: int, arg1: string, arg2: int, arg3: int): boolean;
        repeat(arg0: int): string;
        replace(arg0: any /*char*/, arg1: any /*char*/): string;
        replace(arg0: any /*java.lang.CharSequence*/, arg1: any /*java.lang.CharSequence*/): string;
        replaceAll(arg0: string, arg1: string): string;
        replaceFirst(arg0: string, arg1: string): string;
        split(arg0: string): [string];
        split(arg0: string, arg1: int): [string];
        startsWith(arg0: string): boolean;
        startsWith(arg0: string, arg1: int): boolean;
        strip(): string;
        stripLeading(): string;
        stripTrailing(): string;
        subSequence(arg0: int, arg1: int): any /*java.lang.CharSequence*/;
        substring(arg0: int): string;
        substring(arg0: int, arg1: int): string;
        toCharArray(): chararray;
        toLowerCase(): string;
        toLowerCase(arg0: java.util.Locale): string;
        toString(): string;
        toUpperCase(): string;
        toUpperCase(arg0: java.util.Locale): string;
        trim(): string;

    } // end String

}

declare namespace java.util {

    interface RandomAccess { }

    interface Iterator<E> {

        forEachRemaining(arg0: java.util.funktion.Consumer<E>): void;
        hasNext(): boolean;
        next(): E;
        remove(): void;

    } // end Iterator

    interface Collection<E> extends java.lang.Iterable<E> {

        add(arg0: E): boolean;
        addAll(arg0: Collection<E>): boolean;
        clear(): void;
        contains(arg0: any /*java.lang.Object*/): boolean;
        containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        equals(arg0: any /*java.lang.Object*/): boolean;
        forEach<T>(arg0: java.util.funktion.Consumer<T>): void;
        isEmpty(): boolean;
        iterator(): Iterator<E>;
        parallelStream(): java.util.stream.Stream<E>;
        remove(arg0: any /*java.lang.Object*/): boolean;
        removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        removeIf(arg0: java.util.funktion.Predicate<E>): boolean;
        retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        size(): int;
        spliterator(): any /*java.util.Spliterator*/;
        stream(): java.util.stream.Stream<E>;
        toArray(): [any /*java.lang.Object*/];
        toArray<T>(arg0: [T]): [T];
        toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T];
    
      } // end Collection

    interface Map<K, V> {

        // static copyOf<K,V>( arg0:Map<K, V> ):Map<K, V>;
        // static entry<K,V>( arg0:K, arg1:V ):any /*java.util.Map$Entry*/;
        // static of<K,V>(  ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V ):Map<K, V>;
        // static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V, arg18:K, arg19:V ):Map<K, V>;
        // static ofEntries<K,V>( ...arg0:any /*java.util.Map$Entry*/[] ):Map<K, V>;
        clear(): void;
        compute(arg0: K, arg1: java.util.funktion.BiFunction<K, V, V>): V;
        computeIfAbsent(arg0: K, arg1: java.util.funktion.Func<K, V>): V;
        computeIfPresent(arg0: K, arg1: java.util.funktion.BiFunction<K, V, V>): V;
        containsKey(arg0: any /*java.lang.Object*/): boolean;
        containsValue(arg0: any /*java.lang.Object*/): boolean;
        entrySet(): Set<any /*java.util.Map$Entry*/>;
        equals(arg0: any /*java.lang.Object*/): boolean;
        forEach(arg0: BiConsumer<K, V>): void;
        get(arg0: any /*java.lang.Object*/): V;
        getOrDefault(arg0: any /*java.lang.Object*/, arg1: V): V;
        isEmpty(): boolean;
        keySet(): Set<K>;
        merge(arg0: K, arg1: V, arg2: java.util.funktion.BiFunction<V, V, V>): V;
        put(arg0: K, arg1: V): V;
        putAll(arg0: Map<K, V>): void;
        putIfAbsent(arg0: K, arg1: V): V;
        remove(arg0: any /*java.lang.Object*/): V;
        remove(arg0: any /*java.lang.Object*/, arg1: any /*java.lang.Object*/): boolean;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: java.util.funktion.BiFunction<K, V, V>): void;
        size(): int;
        values(): Collection<V>;

    } // end Map

    class Locale extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {

        clone(): any /*java.lang.Object*/;
        equals(arg0: any /*java.lang.Object*/): boolean;
        getCountry(): string;
        getDisplayCountry(): string;
        getDisplayCountry(arg0: Locale): string;
        getDisplayLanguage(): string;
        getDisplayLanguage(arg0: Locale): string;
        getDisplayName(): string;
        getDisplayName(arg0: Locale): string;
        getDisplayScript(): string;
        getDisplayScript(arg0: Locale): string;
        getDisplayVariant(): string;
        getDisplayVariant(arg0: Locale): string;
        getExtension(arg0: any /*char*/): string;
        getExtensionKeys(): Set<any /*java.lang.Character*/>;
        getISO3Country(): string;
        getISO3Language(): string;
        getLanguage(): string;
        getScript(): string;
        getUnicodeLocaleAttributes(): Set<string>;
        getUnicodeLocaleKeys(): Set<string>;
        getUnicodeLocaleType(arg0: string): string;
        getVariant(): string;
        hasExtensions(): boolean;
        static filter(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<Locale>): List<Locale>;
        static filter(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<Locale>, arg2: any /*java.util.Locale$FilteringMode*/): List<Locale>;
        static filterTags(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<string>): List<string>;
        static filterTags(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<string>, arg2: any /*java.util.Locale$FilteringMode*/): List<string>;
        static forLanguageTag(arg0: string): Locale;
        static getAvailableLocales(): [Locale];
        static getDefault(): Locale;
        static getDefault(arg0: any /*java.util.Locale$Category*/): Locale;
        static getISOCountries(): [string];
        static getISOCountries(arg0: any /*java.util.Locale$IsoCountryCode*/): Set<string>;
        static getISOLanguages(): [string];
        static lookup(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<Locale>): Locale;
        static lookupTag(arg0: List<any /*java.util.Locale$LanguageRange*/>, arg1: Collection<string>): string;
        static setDefault(arg0: Locale): void;
        static setDefault(arg0: any /*java.util.Locale$Category*/, arg1: Locale): void;
        stripExtensions(): Locale;
        toLanguageTag(): string;
        toString(): string;

    } // end Locale

}

declare namespace java.io {

    interface Closeable { }
    interface Serializable { }
}

declare namespace java.time {

    class LocalTime extends java.lang.Object implements java.time.temporal.Temporal /*java.time.temporal.TemporalAdjuster, java.lang.Comparable<any>, java.io.Serializable*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        atDate(arg0: LocalDate): LocalDateTime;
        atOffset(arg0: ZoneOffset): any /*java.time.OffsetTime*/;
        compareTo(arg0: LocalTime): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getHour(): int;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getMinute(): int;
        getNano(): int;
        getSecond(): int;
        isAfter(arg0: LocalTime): boolean;
        isBefore(arg0: LocalTime): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalTime;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalTime;
        minusHours(arg0: long): LocalTime;
        minusMinutes(arg0: long): LocalTime;
        minusNanos(arg0: long): LocalTime;
        minusSeconds(arg0: long): LocalTime;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalTime;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalTime;
        plusHours(arg0: long): LocalTime;
        plusMinutes(arg0: long): LocalTime;
        plusNanos(arg0: long): LocalTime;
        plusSeconds(arg0: long): LocalTime;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochSecond(arg0: LocalDate, arg1: ZoneOffset): long;
        toNanoOfDay(): long;
        toSecondOfDay(): int;
        toString(): string;
        truncatedTo(arg0: any /*java.time.temporal.TemporalUnit*/): LocalTime;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): LocalTime;
        with(arg0: java.time.temporal.TemporalField, arg1: long): LocalTime;
        withHour(arg0: int): LocalTime;
        withMinute(arg0: int): LocalTime;
        withNano(arg0: int): LocalTime;
        withSecond(arg0: int): LocalTime;

    } // end LocalTime

    type ZonedDateTimeClass = {
        class: ZonedDateTime;

        /** Access to all static class methods */
        static: ZonedDateTimeStatic;
    }

    class ZonedDateTimeStatic {

        /** Obtains an instance of ZonedDateTime from a temporal object. */
        from(temporal: any /*TemporalAccessor*/): any;

        /** Obtains the current date-time from the system clock in the default time-zone. */
        now(): ZonedDateTime

        /** Obtains the current date-time from the system clock in the specified time-zone. */
        now(zone: any /* java.time.ZoneId*/): ZonedDateTime

        /** Obtains an instance of ZonedDateTime from a year, month, day, hour, minute, second, nanosecond and time-zone. */
        of(year: number, month: number, dayOfMonth: number, hour: number, minute: number, second: number, nanoOfSecond: number, zone: any /* java.time.ZoneId */): ZonedDateTime

        // static ZonedDateTime	of(LocalDate date, LocalTime time, ZoneId zone)
        // Obtains an instance of ZonedDateTime from a local date and time.
        // static ZonedDateTime	of(LocalDateTime localDateTime, ZoneId zone)
        // Obtains an instance of ZonedDateTime from a local date-time.
        // static ZonedDateTime	ofInstant(Instant instant, ZoneId zone)
        // Obtains an instance of ZonedDateTime from an Instant.
        // static ZonedDateTime	ofInstant(LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone)
        // Obtains an instance of ZonedDateTime from the instant formed by combining the local date-time and offset.
        // static ZonedDateTime	ofLocal(LocalDateTime localDateTime, ZoneId zone, ZoneOffset preferredOffset)
        // Obtains an instance of ZonedDateTime from a local date-time using the preferred offset if possible.
        // static ZonedDateTime	ofStrict(LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone)
        // Obtains an instance of ZonedDateTime strictly validating the combination of local date-time, offset and zone ID.
        // static ZonedDateTime	parse(CharSequence text)
        // Obtains an instance of ZonedDateTime from a text string such as 2007-12-03T10:15:30+01:00[Europe/Paris].
        // static ZonedDateTime	parse(CharSequence text, DateTimeFormatter formatter)
        // Obtains an instance of ZonedDateTime from a text string using a specific formatter.

    }

    class ZonedDateTime extends java.lang.Object /* implements java.time.temporal.Temporal, java.time.chrono.ChronoZonedDateTime<any>, java.io.Serializable*/ {

        compareTo(arg0: any /*java.time.chrono.ChronoZonedDateTime*/): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getChronology(): java.time.chrono.Chronology;
        getDayOfMonth(): int;
        getDayOfWeek(): DayOfWeek;
        getDayOfYear(): int;
        getHour(): int;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getMinute(): int;
        getMonth(): Month;
        getMonthValue(): int;
        getNano(): int;
        getOffset(): ZoneOffset;
        getSecond(): int;
        getYear(): int;
        getZone(): any /*java.time.ZoneId*/;
        isAfter(arg0: any /*java.time.chrono.ChronoZonedDateTime*/): boolean;
        isBefore(arg0: any /*java.time.chrono.ChronoZonedDateTime*/): boolean;
        isEqual(arg0: any /*java.time.chrono.ChronoZonedDateTime*/): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): ZonedDateTime;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): ZonedDateTime;
        minusDays(arg0: long): ZonedDateTime;
        minusHours(arg0: long): ZonedDateTime;
        minusMinutes(arg0: long): ZonedDateTime;
        minusMonths(arg0: long): ZonedDateTime;
        minusNanos(arg0: long): ZonedDateTime;
        minusSeconds(arg0: long): ZonedDateTime;
        minusWeeks(arg0: long): ZonedDateTime;
        minusYears(arg0: long): ZonedDateTime;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): ZonedDateTime;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): ZonedDateTime;
        plusDays(arg0: long): ZonedDateTime;
        plusHours(arg0: long): ZonedDateTime;
        plusMinutes(arg0: long): ZonedDateTime;
        plusMonths(arg0: long): ZonedDateTime;
        plusNanos(arg0: long): ZonedDateTime;
        plusSeconds(arg0: long): ZonedDateTime;
        plusWeeks(arg0: long): ZonedDateTime;
        plusYears(arg0: long): ZonedDateTime;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochSecond(): long;
        toInstant(): any /*java.time.Instant*/;
        toLocalDate(): LocalDate;
        toLocalDateTime(): LocalDateTime;
        toLocalTime(): LocalTime;
        toOffsetDateTime(): OffsetDateTime;
        toString(): string;
        truncatedTo(arg0: any /*java.time.temporal.TemporalUnit*/): ZonedDateTime;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): ZonedDateTime;
        with(arg0: java.time.temporal.TemporalField, arg1: long): ZonedDateTime;
        withDayOfMonth(arg0: int): ZonedDateTime;
        withDayOfYear(arg0: int): ZonedDateTime;
        withEarlierOffsetAtOverlap(): ZonedDateTime;
        withFixedOffsetZone(): ZonedDateTime;
        withHour(arg0: int): ZonedDateTime;
        withLaterOffsetAtOverlap(): ZonedDateTime;
        withMinute(arg0: int): ZonedDateTime;
        withMonth(arg0: int): ZonedDateTime;
        withNano(arg0: int): ZonedDateTime;
        withSecond(arg0: int): ZonedDateTime;
        withYear(arg0: int): ZonedDateTime;
        withZoneSameInstant(arg0: any /*java.time.ZoneId*/): ZonedDateTime;
        withZoneSameLocal(arg0: any /*java.time.ZoneId*/): ZonedDateTime;

    } // end ZonedDateTime

    class ZoneOffset extends java.lang.Object  /* extends ZoneId implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster, java.lang.Comparable<any>, java.io.Serializable*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        compareTo(arg0: ZoneOffset): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        get(arg0: java.time.temporal.TemporalField): int;
        getDisplayName(arg0: any /*java.time.format.TextStyle*/, arg1: java.util.Locale): string;
        getId(): string;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getRules(): any /*java.time.zone.ZoneRules*/;
        getTotalSeconds(): int;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        normalized(): any /*java.time.ZoneId*/;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toString(): string;

    } // end ZoneOffset

    class LocalDateTime extends java.lang.Object /* implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.time.chrono.ChronoLocalDateTime<any>, java.io.Serializable*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        atOffset(arg0: ZoneOffset): OffsetDateTime;
        atZone(arg0: any /*java.time.ZoneId*/): ZonedDateTime;
        compareTo(arg0: java.time.chrono.ChronoLocalDateTime<any /*java.lang.Object*/>): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getChronology(): java.time.chrono.Chronology;
        getDayOfMonth(): int;
        getDayOfWeek(): DayOfWeek;
        getDayOfYear(): int;
        getHour(): int;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getMinute(): int;
        getMonth(): Month;
        getMonthValue(): int;
        getNano(): int;
        getSecond(): int;
        getYear(): int;
        isAfter(arg0: java.time.chrono.ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isBefore(arg0: java.time.chrono.ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isEqual(arg0: java.time.chrono.ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalDateTime;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalDateTime;
        minusDays(arg0: long): LocalDateTime;
        minusHours(arg0: long): LocalDateTime;
        minusMinutes(arg0: long): LocalDateTime;
        minusMonths(arg0: long): LocalDateTime;
        minusNanos(arg0: long): LocalDateTime;
        minusSeconds(arg0: long): LocalDateTime;
        minusWeeks(arg0: long): LocalDateTime;
        minusYears(arg0: long): LocalDateTime;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalDateTime;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalDateTime;
        plusDays(arg0: long): LocalDateTime;
        plusHours(arg0: long): LocalDateTime;
        plusMinutes(arg0: long): LocalDateTime;
        plusMonths(arg0: long): LocalDateTime;
        plusNanos(arg0: long): LocalDateTime;
        plusSeconds(arg0: long): LocalDateTime;
        plusWeeks(arg0: long): LocalDateTime;
        plusYears(arg0: long): LocalDateTime;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochSecond(arg0: ZoneOffset): long;
        toInstant(arg0: ZoneOffset): any /*java.time.Instant*/;
        toLocalDate(): LocalDate;
        toLocalTime(): LocalTime;
        toString(): string;
        truncatedTo(arg0: any /*java.time.temporal.TemporalUnit*/): LocalDateTime;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): LocalDateTime;
        with(arg0: java.time.temporal.TemporalField, arg1: long): LocalDateTime;
        withDayOfMonth(arg0: int): LocalDateTime;
        withDayOfYear(arg0: int): LocalDateTime;
        withHour(arg0: int): LocalDateTime;
        withMinute(arg0: int): LocalDateTime;
        withMonth(arg0: int): LocalDateTime;
        withNano(arg0: int): LocalDateTime;
        withSecond(arg0: int): LocalDateTime;
        withYear(arg0: int): LocalDateTime;

    } // end LocalDateTime

    class OffsetDateTime extends java.lang.Object /* implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<any>, java.io.Serializable*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        atZoneSameInstant(arg0: any /*java.time.ZoneId*/): ZonedDateTime;
        atZoneSimilarLocal(arg0: any /*java.time.ZoneId*/): ZonedDateTime;
        compareTo(arg0: OffsetDateTime): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getDayOfMonth(): int;
        getDayOfWeek(): DayOfWeek;
        getDayOfYear(): int;
        getHour(): int;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getMinute(): int;
        getMonth(): Month;
        getMonthValue(): int;
        getNano(): int;
        getOffset(): ZoneOffset;
        getSecond(): int;
        getYear(): int;
        isAfter(arg0: OffsetDateTime): boolean;
        isBefore(arg0: OffsetDateTime): boolean;
        isEqual(arg0: OffsetDateTime): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): OffsetDateTime;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): OffsetDateTime;
        minusDays(arg0: long): OffsetDateTime;
        minusHours(arg0: long): OffsetDateTime;
        minusMinutes(arg0: long): OffsetDateTime;
        minusMonths(arg0: long): OffsetDateTime;
        minusNanos(arg0: long): OffsetDateTime;
        minusSeconds(arg0: long): OffsetDateTime;
        minusWeeks(arg0: long): OffsetDateTime;
        minusYears(arg0: long): OffsetDateTime;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): OffsetDateTime;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): OffsetDateTime;
        plusDays(arg0: long): OffsetDateTime;
        plusHours(arg0: long): OffsetDateTime;
        plusMinutes(arg0: long): OffsetDateTime;
        plusMonths(arg0: long): OffsetDateTime;
        plusNanos(arg0: long): OffsetDateTime;
        plusSeconds(arg0: long): OffsetDateTime;
        plusWeeks(arg0: long): OffsetDateTime;
        plusYears(arg0: long): OffsetDateTime;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochSecond(): long;
        toInstant(): any /*java.time.Instant*/;
        toLocalDate(): LocalDate;
        toLocalDateTime(): LocalDateTime;
        toLocalTime(): LocalTime;
        toOffsetTime(): any /*java.time.OffsetTime*/;
        toString(): string;
        toZonedDateTime(): ZonedDateTime;
        truncatedTo(arg0: any /*java.time.temporal.TemporalUnit*/): OffsetDateTime;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): OffsetDateTime;
        with(arg0: java.time.temporal.TemporalField, arg1: long): OffsetDateTime;
        withDayOfMonth(arg0: int): OffsetDateTime;
        withDayOfYear(arg0: int): OffsetDateTime;
        withHour(arg0: int): OffsetDateTime;
        withMinute(arg0: int): OffsetDateTime;
        withMonth(arg0: int): OffsetDateTime;
        withNano(arg0: int): OffsetDateTime;
        withOffsetSameInstant(arg0: ZoneOffset): OffsetDateTime;
        withOffsetSameLocal(arg0: ZoneOffset): OffsetDateTime;
        withSecond(arg0: int): OffsetDateTime;
        withYear(arg0: int): OffsetDateTime;

    } // end OffsetDateTime

  /* enum */class Month/* extends java.lang.Enum<any> implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster*/ {

        // JANUARY:Month;
        // FEBRUARY:Month;
        // MARCH:Month;
        // APRIL:Month;
        // MAY:Month;
        // JUNE:Month;
        // JULY:Month;
        // AUGUST:Month;
        // SEPTEMBER:Month;
        // OCTOBER:Month;
        // NOVEMBER:Month;
        // DECEMBER:Month;

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        compareTo<E>(arg0: E): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        firstDayOfYear(arg0: boolean): int;
        firstMonthOfQuarter(): Month;
        get(arg0: java.time.temporal.TemporalField): int;
        getDeclaringClass<E>(): java.lang.Class<E>;
        getDisplayName(arg0: any /*java.time.format.TextStyle*/, arg1: java.util.Locale): string;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getValue(): int;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        length(arg0: boolean): int;
        maxLength(): int;
        minLength(): int;
        minus(arg0: long): Month;
        name(): string;
        ordinal(): int;
        plus(arg0: long): Month;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toString(): string;

    } // end Month

  /* enum */class DayOfWeek/* extends java.lang.Enum<any> implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster*/ {

        // MONDAY:DayOfWeek;
        // TUESDAY:DayOfWeek;
        // WEDNESDAY:DayOfWeek;
        // THURSDAY:DayOfWeek;
        // FRIDAY:DayOfWeek;
        // SATURDAY:DayOfWeek;
        // SUNDAY:DayOfWeek;

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        compareTo<E>(arg0: E): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        get(arg0: java.time.temporal.TemporalField): int;
        getDeclaringClass<E>(): java.lang.Class<E>;
        getDisplayName(arg0: any /*java.time.format.TextStyle*/, arg1: java.util.Locale): string;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getValue(): int;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: long): DayOfWeek;
        name(): string;
        ordinal(): int;
        plus(arg0: long): DayOfWeek;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toString(): string;

    } // end DayOfWeek

    class LocalDate extends java.lang.Object /* implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.time.chrono.ChronoLocalDate, java.io.Serializable*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        atStartOfDay(): LocalDateTime;
        atStartOfDay(arg0: any /*java.time.ZoneId*/): ZonedDateTime;
        atTime(arg0: LocalTime): LocalDateTime;
        atTime(arg0: any /*java.time.OffsetTime*/): OffsetDateTime;
        atTime(arg0: int, arg1: int): LocalDateTime;
        atTime(arg0: int, arg1: int, arg2: int): LocalDateTime;
        atTime(arg0: int, arg1: int, arg2: int, arg3: int): LocalDateTime;
        compareTo(arg0: any /*java.time.chrono.ChronoLocalDate*/): int;
        datesUntil(arg0: LocalDate): java.util.stream.Stream<LocalDate>;
        datesUntil(arg0: LocalDate, arg1: any /*java.time.Period*/): java.util.stream.Stream<LocalDate>;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getChronology(): any /*java.time.chrono.IsoChronology*/;
        getDayOfMonth(): int;
        getDayOfWeek(): DayOfWeek;
        getDayOfYear(): int;
        getEra(): any /*java.time.chrono.IsoEra*/;
        getLong(arg0: java.time.temporal.TemporalField): long;
        getMonth(): Month;
        getMonthValue(): int;
        getYear(): int;
        isAfter(arg0: any /*java.time.chrono.ChronoLocalDate*/): boolean;
        isBefore(arg0: any /*java.time.chrono.ChronoLocalDate*/): boolean;
        isEqual(arg0: any /*java.time.chrono.ChronoLocalDate*/): boolean;
        isLeapYear(): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        lengthOfMonth(): int;
        lengthOfYear(): int;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalDate;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalDate;
        minusDays(arg0: long): LocalDate;
        minusMonths(arg0: long): LocalDate;
        minusWeeks(arg0: long): LocalDate;
        minusYears(arg0: long): LocalDate;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): LocalDate;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): LocalDate;
        plusDays(arg0: long): LocalDate;
        plusMonths(arg0: long): LocalDate;
        plusWeeks(arg0: long): LocalDate;
        plusYears(arg0: long): LocalDate;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochDay(): long;
        toEpochSecond(arg0: LocalTime, arg1: ZoneOffset): long;
        toString(): string;
        until(arg0: any /*java.time.chrono.ChronoLocalDate*/): any /*java.time.Period*/;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): LocalDate;
        with(arg0: java.time.temporal.TemporalField, arg1: long): LocalDate;
        withDayOfMonth(arg0: int): LocalDate;
        withDayOfYear(arg0: int): LocalDate;
        withMonth(arg0: int): LocalDate;
        withYear(arg0: int): LocalDate;

    } // end LocalDate

} // end namespace java.time

declare namespace java.math {

    class BigDecimal/* extends java.lang.Number implements java.lang.Comparable<any>*/ {

        abs(): BigDecimal;
        abs(arg0: any /*java.math.MathContext*/): BigDecimal;
        add(arg0: BigDecimal): BigDecimal;
        add(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        byteValue(): any /*byte*/;
        byteValueExact(): any /*byte*/;
        compareTo(arg0: BigDecimal): int;
        divide(arg0: BigDecimal): BigDecimal;
        divide(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        divide(arg0: BigDecimal, arg1: any /*java.math.RoundingMode*/): BigDecimal;
        divide(arg0: BigDecimal, arg1: int): BigDecimal;
        divide(arg0: BigDecimal, arg1: int, arg2: any /*java.math.RoundingMode*/): BigDecimal;
        divide(arg0: BigDecimal, arg1: int, arg2: int): BigDecimal;
        divideAndRemainder(arg0: BigDecimal): [BigDecimal];
        divideAndRemainder(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): [BigDecimal];
        divideToIntegralValue(arg0: BigDecimal): BigDecimal;
        divideToIntegralValue(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        doubleValue(): double;
        equals(arg0: any /*java.lang.Object*/): boolean;
        floatValue(): float;
        intValue(): int;
        intValueExact(): int;
        longValue(): long;
        longValueExact(): long;
        max(arg0: BigDecimal): BigDecimal;
        min(arg0: BigDecimal): BigDecimal;
        movePointLeft(arg0: int): BigDecimal;
        movePointRight(arg0: int): BigDecimal;
        multiply(arg0: BigDecimal): BigDecimal;
        multiply(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        negate(): BigDecimal;
        negate(arg0: any /*java.math.MathContext*/): BigDecimal;
        plus(): BigDecimal;
        plus(arg0: any /*java.math.MathContext*/): BigDecimal;
        pow(arg0: int): BigDecimal;
        pow(arg0: int, arg1: any /*java.math.MathContext*/): BigDecimal;
        precision(): int;
        remainder(arg0: BigDecimal): BigDecimal;
        remainder(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        round(arg0: any /*java.math.MathContext*/): BigDecimal;
        scale(): int;
        scaleByPowerOfTen(arg0: int): BigDecimal;
        setScale(arg0: int): BigDecimal;
        setScale(arg0: int, arg1: any /*java.math.RoundingMode*/): BigDecimal;
        setScale(arg0: int, arg1: int): BigDecimal;
        shortValue(): any /*short*/;
        shortValueExact(): any /*short*/;
        signum(): int;
        sqrt(arg0: any /*java.math.MathContext*/): BigDecimal;
        static valueOf(arg0: double): BigDecimal;
        static valueOf(arg0: long): BigDecimal;
        static valueOf(arg0: long, arg1: int): BigDecimal;
        stripTrailingZeros(): BigDecimal;
        subtract(arg0: BigDecimal): BigDecimal;
        subtract(arg0: BigDecimal, arg1: any /*java.math.MathContext*/): BigDecimal;
        toBigInteger(): any /*java.math.BigInteger*/;
        toBigIntegerExact(): any /*java.math.BigInteger*/;
        toEngineeringString(): string;
        toPlainString(): string;
        toString(): string;
        ulp(): BigDecimal;
        unscaledValue(): any /*java.math.BigInteger*/;

    } // end BigDecimal

} // end namespace java.math
declare namespace java.time.temporal {

    interface TemporalField {

        adjustInto<R>(arg0: R, arg1: long): R;
        getBaseUnit(): any /*java.time.temporal.TemporalUnit*/;
        getDisplayName(arg0: java.util.Locale): string;
        getFrom(arg0: any /*java.time.temporal.TemporalAccessor*/): long;
        getRangeUnit(): any /*java.time.temporal.TemporalUnit*/;
        isDateBased(): boolean;
        isSupportedBy(arg0: any /*java.time.temporal.TemporalAccessor*/): boolean;
        isTimeBased(): boolean;
        range(): any /*java.time.temporal.ValueRange*/;
        rangeRefinedBy(arg0: any /*java.time.temporal.TemporalAccessor*/): any /*java.time.temporal.ValueRange*/;
        resolve(arg0: java.util.Map<TemporalField, long | null>, arg1: any /*java.time.temporal.TemporalAccessor*/, arg2: any /*java.time.format.ResolverStyle*/): any /*java.time.temporal.TemporalAccessor*/;
        toString(): string;

    } // end TemporalField

    interface Temporal/* extends TemporalAccessor*/ {

        get(arg0: TemporalField): int;
        getLong(arg0: TemporalField): long;
        isSupported(arg0: TemporalField): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): Temporal;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): Temporal;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): Temporal;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): Temporal;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: TemporalField): any /*java.time.temporal.ValueRange*/;
        until(arg0: Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: TemporalField, arg1: long): Temporal;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): Temporal;

    } // end Temporal

} // end namespace java.time.temporal
interface BiConsumer<T, U>/*java.util.function.BiConsumer*/ {

    (arg0: T, arg1: U): void;
    andThen?(arg0: BiConsumer<T, U>): BiConsumer<T, U>;

} // end BiConsumer
declare namespace java.time {



} // end namespace java.time
declare namespace java.util {

    class Optional<T>/* extends java.lang.Object*/ {

        equals(arg0: any /*java.lang.Object*/): boolean;
        filter(arg0: java.util.funktion.Predicate<T>): Optional<T>;
        flatMap<U>(arg0: java.util.funktion.Func<T, Optional<U>>): Optional<U>;
        get(): T;
        ifPresent(arg0: java.util.funktion.Consumer<T>): void;
        ifPresentOrElse(arg0: java.util.funktion.Consumer<T>, arg1: java.lang.Runnable): void;
        isEmpty(): boolean;
        isPresent(): boolean;
        map<U>(arg0: java.util.funktion.Func<T, U>): Optional<U>;
        or(arg0: java.util.funktion.Supplier<Optional<T>>): Optional<T>;
        orElse(arg0: T): T;
        orElseGet(arg0: java.util.funktion.Supplier<T>): T;
        orElseThrow(): T;
        orElseThrow<X>(arg0: java.util.funktion.Supplier<X>): T;
        stream(): java.util.stream.Stream<T>;
        toString(): string;

    } // end Optional

    class Collections/* extends java.lang.Object*/ {

        equals(arg0: any /*java.lang.Object*/): boolean;
        toString(): string;

    } // end Collections

    interface List<E>/* extends Collection<E>*/ {

        // static copyOf<E>( arg0:Collection<E> ):List<E>;
        // static of<E>(  ):List<E>;
        // static of<E>( ...arg0:E[] ):List<E>;
        // static of<E>( arg0:E ):List<E>;
        // static of<E>( arg0:E, arg1:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):List<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):List<E>;
        add(arg0: E): boolean;
        add(arg0: int, arg1: E): void;
        addAll(arg0: Collection<E>): boolean;
        addAll(arg0: int, arg1: Collection<E>): boolean;
        clear(): void;
        contains(arg0: any /*java.lang.Object*/): boolean;
        containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        equals(arg0: any /*java.lang.Object*/): boolean;
        forEach<T>(arg0: java.util.funktion.Consumer<T>): void;
        get(arg0: int): E;
        indexOf(arg0: any /*java.lang.Object*/): int;
        isEmpty(): boolean;
        iterator(): Iterator<E>;
        lastIndexOf(arg0: any /*java.lang.Object*/): int;
        listIterator(): any /*java.util.ListIterator*/;
        listIterator(arg0: int): any /*java.util.ListIterator*/;
        parallelStream(): java.util.stream.Stream<E>;
        remove(arg0: any /*java.lang.Object*/): boolean;
        remove(arg0: int): E;
        removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        removeIf(arg0: java.util.funktion.Predicate<E>): boolean;
        replaceAll(arg0: java.util.funktion.UnaryOperator<E>): void;
        retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        set(arg0: int, arg1: E): E;
        size(): int;
        sort(arg0: any /*java.util.Comparator*/): void;
        spliterator(): any /*java.util.Spliterator*/;
        stream(): java.util.stream.Stream<E>;
        subList(arg0: int, arg1: int): List<E>;
        toArray(): [any /*java.lang.Object*/];
        toArray<T>(arg0: [T]): [T];
        toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T];

    } // end List

} // end namespace java.util

/**
 * Use function with k because it is reserved
 */
declare namespace java.util.funktion {
    interface Consumer<T>/*java.util.function.Consumer*/ {

        (arg0: T): void;
        andThen?(arg0: Consumer<T>): Consumer<T>;
    
    } // end Consumer
    
    interface BiPredicate<T, U>/*java.util.function.BiPredicate*/ {
    
        (arg0: T, arg1: U): boolean;
        and?(arg0: BiPredicate<T, U>): BiPredicate<T, U>;
        negate?(): BiPredicate<T, U>;
        or?(arg0: BiPredicate<T, U>): BiPredicate<T, U>;
    
    } // end BiPredicate
    interface BiFunction<T, U, R>/*java.util.function.BiFunction*/ {
    
        (arg0: T, arg1: U): R;
        andThen?<V>(arg0: Func<R, V>): BiFunction<T, U, V>;
    
    } // end BiFunction

    interface Func<T, R>/*java.util.function.Function*/ {

        (arg0: T): R;
        // static identity<T>(  ):Func<T, T>;
        andThen?<V>(arg0: Func<R, V>): Func<T, V>;
        compose?<V>(arg0: Func<V, T>): Func<V, R>;
    
    } // end Func
    
    interface Supplier<T>/*java.util.function.Supplier*/ {
    
        (): T;
    
    } // end Supplier
    
    interface Predicate<T>/*java.util.function.Predicate*/ {

        (arg0: T): boolean;
        // static isEqual<T>( arg0:any /*java.lang.Object*/ ):Predicate<T>;
        // static not<T>( arg0:Predicate<T> ):Predicate<T>;
        and?(arg0: Predicate<T>): Predicate<T>;
        negate?(): Predicate<T>;
        or?(arg0: Predicate<T>): Predicate<T>;
      
      } // end Predicate

    interface BinaryOperator<T>/*java.util.function.BinaryOperator extends BiFunction<T, any, any>*/ {
    
        <R, U>(arg0: T, arg1: U): R;
        // static maxBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
        // static minBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
        andThen?<R, U, V>(arg0: Func<R, V>): BiFunction<T, U, V>;
    
    } // end BinaryOperator

    interface UnaryOperator<T>/*java.util.function.UnaryOperator extends Function<T, any>*/ {

        <R>(arg0: T): R;
        // static identity<T>(  ):UnaryOperator<T>;
        andThen?<R, V>(arg0: java.util.funktion.Func<R, V>): java.util.funktion.Func<T, V>;
        compose?<R, V>(arg0: java.util.funktion.Func<V, T>): java.util.funktion.Func<V, R>;
      
      } // end UnaryOperator
}



declare namespace java.util {

    interface Set<E>/* extends Collection<E>*/ {

        // static copyOf<E>( arg0:Collection<E> ):Set<E>;
        // static of<E>(  ):Set<E>;
        // static of<E>( ...arg0:E[] ):Set<E>;
        // static of<E>( arg0:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):Set<E>;
        // static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):Set<E>;
        add(arg0: E): boolean;
        addAll(arg0: Collection<E>): boolean;
        clear(): void;
        contains(arg0: any /*java.lang.Object*/): boolean;
        containsAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        equals(arg0: any /*java.lang.Object*/): boolean;
        forEach<T>(arg0: java.util.funktion.Consumer<T>): void;
        isEmpty(): boolean;
        iterator(): Iterator<E>;
        parallelStream(): java.util.stream.Stream<E>;
        remove(arg0: any /*java.lang.Object*/): boolean;
        removeAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        removeIf(arg0: java.util.funktion.Predicate<E>): boolean;
        retainAll(arg0: Collection<any /*java.lang.Object*/>): boolean;
        size(): int;
        spliterator(): any /*java.util.Spliterator*/;
        stream(): java.util.stream.Stream<E>;
        toArray(): [any /*java.lang.Object*/];
        toArray<T>(arg0: [T]): [T];
        toArray<T>(arg0: any /*java.util.function.IntFunction*/): [T];

    } // end Set

} // end namespace java.util

declare namespace java.util.stream {

    class Collectors/* extends java.lang.Object*/ {

        equals(arg0: any /*java.lang.Object*/): boolean;
        toString(): string;
    
      } // end Collectors

    interface Stream<T>/* extends BaseStream<T, any>*/ {

        allMatch(arg0: java.util.funktion.Predicate<T>): boolean;
        anyMatch(arg0: java.util.funktion.Predicate<T>): boolean;
        close(): void;
        collect<R>(arg0: java.util.funktion.Supplier<R>, arg1: BiConsumer<R, T>, arg2: BiConsumer<R, R>): R;
        collect<R>(arg0: any /*java.util.stream.Collector*/): R;
        count(): long;
        distinct(): Stream<T>;
        dropWhile(arg0: java.util.funktion.Predicate<T>): Stream<T>;
        filter(arg0: java.util.funktion.Predicate<T>): Stream<T>;
        findAny(): java.util.Optional<T>;
        findFirst(): java.util.Optional<T>;
        flatMap<R>(arg0: java.util.funktion.Func<T, Stream<R>>): Stream<R>;
        flatMapToDouble(arg0: java.util.funktion.Func<T, any /*java.util.stream.DoubleStream*/>): any /*java.util.stream.DoubleStream*/;
        flatMapToInt(arg0: java.util.funktion.Func<T, any /*java.util.stream.IntStream*/>): any /*java.util.stream.IntStream*/;
        flatMapToLong(arg0: java.util.funktion.Func<T, any /*java.util.stream.LongStream*/>): any /*java.util.stream.LongStream*/;
        forEach(arg0: java.util.funktion.Consumer<T>): void;
        forEachOrdered(arg0: java.util.funktion.Consumer<T>): void;
        isParallel(): boolean;
        iterator(): java.util.Iterator<T>;
        limit(arg0: long): Stream<T>;
        map<R>(arg0: java.util.funktion.Func<T, R>): Stream<R>;
        mapToDouble(arg0: any /*java.util.function.ToDoubleFunction*/): any /*java.util.stream.DoubleStream*/;
        mapToInt(arg0: any /*java.util.function.ToIntFunction*/): any /*java.util.stream.IntStream*/;
        mapToLong(arg0: any /*java.util.function.ToLongFunction*/): any /*java.util.stream.LongStream*/;
        max(arg0: any /*java.util.Comparator*/): java.util.Optional<T>;
        min(arg0: any /*java.util.Comparator*/): java.util.Optional<T>;
        noneMatch(arg0: java.util.funktion.Predicate<T>): boolean;
        onClose<S>(arg0: java.lang.Runnable): S;
        parallel<S>(): S;
        peek(arg0: java.util.funktion.Consumer<T>): Stream<T>;
        reduce(arg0: java.util.funktion.BinaryOperator<T>): java.util.Optional<T>;
        reduce(arg0: T, arg1: java.util.funktion.BinaryOperator<T>): T;
        reduce<U>(arg0: U, arg1: java.util.funktion.BiFunction<U, T, U>, arg2: java.util.funktion.BinaryOperator<U>): U;
        sequential<S>(): S;
        skip(arg0: long): Stream<T>;
        sorted(): Stream<T>;
        sorted(arg0: any /*java.util.Comparator*/): Stream<T>;
        spliterator(): any /*java.util.Spliterator*/;
        takeWhile(arg0: java.util.funktion.Predicate<T>): Stream<T>;
        toArray(): [any /*java.lang.Object*/];
        toArray<A>(arg0: any /*java.util.function.IntFunction*/): [A];
        unordered<S>(): S;

    } // end Stream

} // end namespace java.util.stream

declare namespace java.time.chrono {

    interface Chronology/* extends java.lang.Comparable<any>*/ {

        compareTo(arg0: Chronology): int;
        date(arg0: any /*java.time.chrono.Era*/, arg1: int, arg2: int, arg3: int): any /*java.time.chrono.ChronoLocalDate*/;
        date(arg0: any /*java.time.temporal.TemporalAccessor*/): any /*java.time.chrono.ChronoLocalDate*/;
        date(arg0: int, arg1: int, arg2: int): any /*java.time.chrono.ChronoLocalDate*/;
        dateEpochDay(arg0: long): any /*java.time.chrono.ChronoLocalDate*/;
        dateNow(): any /*java.time.chrono.ChronoLocalDate*/;
        dateNow(arg0: any /*java.time.Clock*/): any /*java.time.chrono.ChronoLocalDate*/;
        dateNow(arg0: any /*java.time.ZoneId*/): any /*java.time.chrono.ChronoLocalDate*/;
        dateYearDay(arg0: any /*java.time.chrono.Era*/, arg1: int, arg2: int): any /*java.time.chrono.ChronoLocalDate*/;
        dateYearDay(arg0: int, arg1: int): any /*java.time.chrono.ChronoLocalDate*/;
        epochSecond(arg0: any /*java.time.chrono.Era*/, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneOffset): long;
        epochSecond(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.time.ZoneOffset): long;
        equals(arg0: any /*java.lang.Object*/): boolean;
        eraOf(arg0: int): any /*java.time.chrono.Era*/;
        eras(): java.util.List<any /*java.time.chrono.Era*/>;
        getCalendarType(): string;
        getDisplayName(arg0: any /*java.time.format.TextStyle*/, arg1: java.util.Locale): string;
        getId(): string;
        isLeapYear(arg0: long): boolean;
        localDateTime(arg0: any /*java.time.temporal.TemporalAccessor*/): ChronoLocalDateTime<any /*java.time.chrono.ChronoLocalDate*/>;
        period(arg0: int, arg1: int, arg2: int): any /*java.time.chrono.ChronoPeriod*/;
        prolepticYear(arg0: any /*java.time.chrono.Era*/, arg1: int): int;
        range(arg0: any /*java.time.temporal.ChronoField*/): any /*java.time.temporal.ValueRange*/;
        resolveDate(arg0: java.util.Map<java.time.temporal.TemporalField, long | null>, arg1: any /*java.time.format.ResolverStyle*/): any /*java.time.chrono.ChronoLocalDate*/;
        toString(): string;
        zonedDateTime(arg0: any /*java.time.Instant*/, arg1: any /*java.time.ZoneId*/): any /*java.time.chrono.ChronoZonedDateTime*/;
        zonedDateTime(arg0: any /*java.time.temporal.TemporalAccessor*/): any /*java.time.chrono.ChronoZonedDateTime*/;

    } // end Chronology

    interface ChronoLocalDateTime<D>/* extends java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<D>*/ {

        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal;
        atZone(arg0: any /*java.time.ZoneId*/): any /*java.time.chrono.ChronoZonedDateTime*/;
        compareTo(arg0: ChronoLocalDateTime<any /*java.lang.Object*/>): int;
        equals(arg0: any /*java.lang.Object*/): boolean;
        format(arg0: any /*java.time.format.DateTimeFormatter*/): string;
        get(arg0: java.time.temporal.TemporalField): int;
        getChronology(): Chronology;
        getLong(arg0: java.time.temporal.TemporalField): long;
        isAfter(arg0: ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isBefore(arg0: ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isEqual(arg0: ChronoLocalDateTime<any /*java.lang.Object*/>): boolean;
        isSupported(arg0: any /*java.time.temporal.TemporalUnit*/): boolean;
        isSupported(arg0: java.time.temporal.TemporalField): boolean;
        minus(arg0: any /*java.time.temporal.TemporalAmount*/): ChronoLocalDateTime<D>;
        minus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): ChronoLocalDateTime<D>;
        plus(arg0: any /*java.time.temporal.TemporalAmount*/): ChronoLocalDateTime<D>;
        plus(arg0: long, arg1: any /*java.time.temporal.TemporalUnit*/): ChronoLocalDateTime<D>;
        query<R>(arg0: any /*java.time.temporal.TemporalQuery*/): R;
        range(arg0: java.time.temporal.TemporalField): any /*java.time.temporal.ValueRange*/;
        toEpochSecond(arg0: java.time.ZoneOffset): long;
        toInstant(arg0: java.time.ZoneOffset): any /*java.time.Instant*/;
        toLocalDate(): D;
        toLocalTime(): java.time.LocalTime;
        toString(): string;
        until(arg0: java.time.temporal.Temporal, arg1: any /*java.time.temporal.TemporalUnit*/): long;
        with(arg0: any /*java.time.temporal.TemporalAdjuster*/): ChronoLocalDateTime<D>;
        with(arg0: java.time.temporal.TemporalField, arg1: long): ChronoLocalDateTime<D>;

    } // end ChronoLocalDateTime

} // end namespace java.time.chrono