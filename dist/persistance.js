"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previousState = exports.evolutionRate = exports.deltaSince = exports.lastUpdate = exports.sumSince = exports.averageSince = exports.deviationSince = exports.varianceSince = exports.minimumSince = exports.maximumSince = exports.updatedSince = exports.changedSince = exports.historicState = exports.persist = void 0;
const items_1 = require("./items");
const pe = Java.type("org.openhab.core.persistence.extensions.PersistenceExtensions");
// }
/**
 * Persists the state of a given <code>item</code> through the default persistence service.
 *
 * @param item the item to store
 */
const persist = (item) => {
    pe.persist((0, items_1.getItem)(item));
};
exports.persist = persist;
/**
 * Retrieves the historic item for a given <code>item</code> at a certain point in time through the default
 * persistence service.
 *
 * @param item the item for which to retrieve the historic item
 * @param timestamp the point in time for which the historic item should be retrieved
 * @return the historic item at the given point in time, or <code>null</code> if no historic item could be found,
 *         the default persistence service is not available or does not refer to a
 *         {@link QueryablePersistenceService}
 */
const historicState = (item, timestamp) => {
    return pe.historicState((0, items_1.getItem)(item), timestamp);
};
exports.historicState = historicState;
/**
 * Checks if the state of a given <code>item</code> has changed since a certain point in time.
 * The default persistence service is used.
 *
 * @param item the item to check for state changes
 * @param timestamp the point in time to start the check
 * @return <code>true</code> if item state has changed, <code>false</code> if it has not changed or if the default
 *         persistence service is not available or does not refer to a {@link QueryablePersistenceService}
 */
const changedSince = (item, timestamp) => {
    return pe.changedSince((0, items_1.getItem)(item), timestamp);
};
exports.changedSince = changedSince;
/**
 * Checks if the state of a given <code>item</code> has been updated since a certain point in time.
 * The default persistence service is used.
 *
 * @param item the item to check for state updates
 * @param timestamp the point in time to start the check
 * @return <code>true</code> if item state was updated, <code>false</code> if either item has not been updated since
 *         <code>timestamp</code> or if the default persistence does not refer to a
 *         {@link QueryablePersistenceService}, or <code>null</code> if the default persistence service is not
 *         available
 */
const updatedSince = (item, timestamp) => {
    return pe.updatedSince((0, items_1.getItem)(item), timestamp);
};
exports.updatedSince = updatedSince;
/**
 * Gets the historic item with the maximum value of the state of a given <code>item</code> since
 * a certain point in time. The default persistence service is used.
 *
 * @param item the item to get the maximum state value for
 * @param timestamp the point in time to start the check
 * @return a historic item with the maximum state value since the given point in time, or a {@link HistoricItem}
 *         constructed from the <code>item</code> if the default persistence service does not refer to a
 *         {@link QueryablePersistenceService}
 */
const maximumSince = (item, timestamp) => {
    return pe.maximumSince((0, items_1.getItem)(item), timestamp);
};
exports.maximumSince = maximumSince;
/**
 * Gets the historic item with the minimum value of the state of a given <code>item</code> since
 * a certain point in time. The default persistence service is used.
 *
 * @param item the item to get the minimum state value for
 * @param timestamp the point in time from which to search for the minimum state value
 * @return the historic item with the minimum state value since the given point in time or a {@link HistoricItem}
 *         constructed from the <code>item</code>'s state if <code>item</code>'s state is the minimum value or if
 *         the default persistence service does not refer to an available {@link QueryablePersistenceService}
 */
const minimumSince = (item, timestamp) => {
    return pe.minimumSince((0, items_1.getItem)(item), timestamp);
};
exports.minimumSince = minimumSince;
/**
 * Gets the variance of the state of the given {@link Item} since a certain point in time.
 * The default {@link PersistenceService} is used.
 *
 * @param item the {@link Item} to get the variance for
 * @param timestamp the point in time from which to compute the variance
 * @return the variance between now and then, or <code>null</code> if there is no default persistence service
 *         available or it is not a {@link QueryablePersistenceService}, or if there is no persisted state for the
 *         given <code>item</code> at the given <code>timestamp</code>
 */
const varianceSince = (item, timestamp) => {
    return pe.varianceSince((0, items_1.getItem)(item), timestamp);
};
exports.varianceSince = varianceSince;
/**
 * Gets the standard deviation of the state of the given {@link Item} since a certain point in time.
 * The default {@link PersistenceService} is used.
 *
 * <b>Note:</b> If you need variance and standard deviation at the same time do not query both as it is a costly
 * operation. Get the variance only, it is the squared deviation.
 *
 * @param item the {@link Item} to get the standard deviation for
 * @param timestamp the point in time from which to compute the standard deviation
 * @return the standard deviation between now and then, or <code>null</code> if there is no default persistence
 *         service available or it is not a {@link QueryablePersistenceService}, or if there is no persisted state
 *         for the given <code>item</code> at the given <code>timestamp</code>
 */
const deviationSince = (item, timestamp) => {
    return pe.deviationSince((0, items_1.getItem)(item), timestamp);
};
exports.deviationSince = deviationSince;
/**
 * Gets the average value of the state of a given {@link Item} since a certain point in time.
 * The default {@link PersistenceService} is used.
 *
 * @param item the {@link Item} to get the average value for
 * @param timestamp the point in time from which to search for the average value
 * @return the average value since <code>timestamp</code> or the state of the given <code>item</code> if no
 *         previous states could be found or if the default persistence service does not refer to an available
 *         {@link QueryablePersistenceService}
 */
const averageSince = (item, timestamp) => {
    return pe.averageSince((0, items_1.getItem)(item), timestamp);
};
exports.averageSince = averageSince;
/**
 * Gets the sum of the state of a given <code>item</code> since a certain point in time.
 * The default persistence service is used.
 *
 * @param item the item for which we will sum its persisted state values since <code>timestamp</code>
 * @param timestamp the point in time from which to start the summation
 * @return the sum of the state values since <code>timestamp</code>, or {@link DecimalType.ZERO} if no historic
 *         states could be found or if the default persistence service does not refer to a
 *         {@link QueryablePersistenceService}
 */
const sumSince = (item, timestamp) => {
    return pe.sumSince((0, items_1.getItem)(item), timestamp);
};
exports.sumSince = sumSince;
/**
 * Query the last update time of a given <code>item</code>. The default persistence service is used.
 *
 * @param item the item for which the last update time is to be returned
 * @return point in time of the last update to <code>item</code>, or <code>null</code> if there are no previously
 *         persisted updates or the default persistence service is not available or a
 *         {@link QueryablePersistenceService}
 */
const lastUpdate = (item) => {
    return pe.lastUpdate((0, items_1.getItem)(item));
};
exports.lastUpdate = lastUpdate;
/**
 * Gets the difference value of the state of a given <code>item</code> since a certain point in time.
 * The default persistence service is used.
 *
 * @param item the item to get the average state value for
 * @param timestamp the point in time from which to compute the delta
 * @return the difference between now and then, or <code>null</code> if there is no default persistence
 *         service available, the default persistence service is not a {@link QueryablePersistenceService}, or if
 *         there is no persisted state for the given <code>item</code> at the given <code>timestamp</code> available
 *         in the default persistence service
 */
const deltaSince = (item, timestamp) => {
    return pe.deltaSince((0, items_1.getItem)(item), timestamp);
};
exports.deltaSince = deltaSince;
/**
 * Gets the evolution rate of the state of a given {@link Item} since a certain point in time.
 * The default {@link PersistenceService} is used.
 *
 * @param item the item to get the evolution rate value for
 * @param timestamp the point in time from which to compute the evolution rate
 * @return the evolution rate in percent (positive and negative) between now and then, or <code>null</code> if
 *         there is no default persistence service available, the default persistence service is not a
 *         {@link QueryablePersistenceService}, or if there is no persisted state for the given <code>item</code> at
 *         the given <code>timestamp</code>, or if there is a state but it is zero (which would cause a
 *         divide-by-zero error)
 */
const evolutionRate = (item, timestamp) => {
    return pe.evolutionRate((0, items_1.getItem)(item), timestamp);
};
exports.evolutionRate = evolutionRate;
/**
 * Returns the previous state of a given <code>item</code>.
 *
 * @param item the item to get the previous state value for
 * @param skipEqual if true, skips equal state values and searches the first state not equal the current state
 * @return the previous state or <code>null</code> if no previous state could be found, or if the default
 *         persistence service is not configured or does not refer to a {@link QueryablePersistenceService}
 */
const previousState = (item, skipEqual) => {
    return pe.previousState((0, items_1.getItem)(item), skipEqual);
};
exports.previousState = previousState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcGVyc2lzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztBQTJCM0YsSUFBSTtBQUVKOzs7O0dBSUc7QUFDSSxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQW9CLEVBQVEsRUFBRTtJQUNsRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUEsZUFBTyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBO0FBRlksUUFBQSxPQUFPLFdBRW5CO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFvQixFQUFFLFNBQWtDLEVBQXVCLEVBQUU7SUFDM0csT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUEsZUFBTyxFQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBaUIsQ0FBQztBQUN0RSxDQUFDLENBQUE7QUFGWSxRQUFBLGFBQWEsaUJBRXpCO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSSxNQUFNLFlBQVksR0FBRyxDQUFDLElBQW9CLEVBQUUsU0FBa0MsRUFBVyxFQUFFO0lBQzlGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFBLGVBQU8sRUFBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUE7QUFGWSxRQUFBLFlBQVksZ0JBRXhCO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNJLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBb0IsRUFBRSxTQUFrQyxFQUFXLEVBQUU7SUFDOUYsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsZUFBTyxFQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQTtBQUZZLFFBQUEsWUFBWSxnQkFF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