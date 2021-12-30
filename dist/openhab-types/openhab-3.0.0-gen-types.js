"use strict";
/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
//// <reference path="openhab-3.0.0-gen.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chronology = exports.Iterable = exports.DayOfWeek = exports.Visibility = exports.ZonedDateTime = exports.Stream = exports.LocalTime = exports.ChronoLocalDateTime = exports.ZoneOffset = exports.LocalDate = exports.Month = exports.Temporal = exports.Collections = exports.Optional = exports.LocalDateTime = exports.TemporalField = exports.OffsetDateTime = exports.Collectors = exports.String = void 0;
exports.String = Java.type("java.lang.String");
exports.Collectors = Java.type("java.util.stream.Collectors");
exports.OffsetDateTime = Java.type("java.time.OffsetDateTime");
exports.TemporalField = Java.type("java.time.temporal.TemporalField");
exports.LocalDateTime = Java.type("java.time.LocalDateTime");
exports.Optional = Java.type("java.util.Optional");
exports.Collections = Java.type("java.util.Collections");
exports.Temporal = Java.type("java.time.temporal.Temporal");
exports.Month = Java.type("java.time.Month");
exports.LocalDate = Java.type("java.time.LocalDate");
exports.ZoneOffset = Java.type("java.time.ZoneOffset");
exports.ChronoLocalDateTime = Java.type("java.time.chrono.ChronoLocalDateTime");
exports.LocalTime = Java.type("java.time.LocalTime");
exports.Stream = Java.type("java.util.stream.Stream");
exports.ZonedDateTime = Java.type("java.time.ZonedDateTime");
exports.Visibility = Java.type("org.openhab.core.automation.Visibility");
exports.DayOfWeek = Java.type("java.time.DayOfWeek");
exports.Iterable = Java.type("java.lang.Iterable");
exports.Chronology = Java.type("java.time.chrono.Chronology");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmhhYi0zLjAuMC1nZW4tdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3BlbmhhYi10eXBlcy9vcGVuaGFiLTMuMC4wLWdlbi10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtDQUErQzs7O0FBcUNsQyxRQUFBLE1BQU0sR0FBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBbURyRCxRQUFBLFVBQVUsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBbUJ4RSxRQUFBLGNBQWMsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBUTdFLFFBQUEsYUFBYSxHQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUF1Qm5GLFFBQUEsYUFBYSxHQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFXMUUsUUFBQSxRQUFRLEdBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQTBFM0QsUUFBQSxXQUFXLEdBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQVFwRSxRQUFBLFFBQVEsR0FBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBMEJwRSxRQUFBLEtBQUssR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBbUJsRCxRQUFBLFNBQVMsR0FBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBb0I5RCxRQUFBLFVBQVUsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBVWpFLFFBQUEsbUJBQW1CLEdBQThCLElBQUksQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQW9CbkcsUUFBQSxTQUFTLEdBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQWlCOUQsUUFBQSxNQUFNLEdBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQXFCNUQsUUFBQSxhQUFhLEdBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQWUxRSxRQUFBLFVBQVUsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0FBcUJuRixRQUFBLFNBQVMsR0FBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBUzlELFFBQUEsUUFBUSxHQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFZM0QsUUFBQSxVQUFVLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyJ9