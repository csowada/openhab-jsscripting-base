declare type ItemNameOrItem = string | org.openhab.core.items.Item;
export interface HistoricItem {
    /**
 * returns the timestamp of the persisted item
 *
 * @return the timestamp of the item
 */
    getTimestamp(): java.time.ZonedDateTime;
    /**
     * returns the current state of the item
     *
     * @return the current state
     */
    getState(): org.openhab.core.types.State;
    /**
     * returns the name of the item
     *
     * @return the name of the item
     */
    getName(): string;
}
/**
 * Persists the state of a given <code>item</code> through the default persistence service.
 *
 * @param item the item to store
 */
export declare const persist: (item: ItemNameOrItem) => void;
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
export declare const historicState: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => HistoricItem | null;
/**
 * Checks if the state of a given <code>item</code> has changed since a certain point in time.
 * The default persistence service is used.
 *
 * @param item the item to check for state changes
 * @param timestamp the point in time to start the check
 * @return <code>true</code> if item state has changed, <code>false</code> if it has not changed or if the default
 *         persistence service is not available or does not refer to a {@link QueryablePersistenceService}
 */
export declare const changedSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => boolean;
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
export declare const updatedSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => boolean;
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
export declare const maximumSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => HistoricItem;
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
export declare const minimumSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => HistoricItem;
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
export declare const varianceSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType | null;
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
export declare const deviationSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType | null;
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
export declare const averageSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType | null;
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
export declare const sumSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType;
/**
 * Query the last update time of a given <code>item</code>. The default persistence service is used.
 *
 * @param item the item for which the last update time is to be returned
 * @return point in time of the last update to <code>item</code>, or <code>null</code> if there are no previously
 *         persisted updates or the default persistence service is not available or a
 *         {@link QueryablePersistenceService}
 */
export declare const lastUpdate: (item: ItemNameOrItem) => java.time.ZonedDateTime | null;
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
export declare const deltaSince: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType | null;
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
export declare const evolutionRate: (item: ItemNameOrItem, timestamp: java.time.ZonedDateTime) => org.openhab.core.library.types.DecimalType | null;
/**
 * Returns the previous state of a given <code>item</code>.
 *
 * @param item the item to get the previous state value for
 * @param skipEqual if true, skips equal state values and searches the first state not equal the current state
 * @return the previous state or <code>null</code> if no previous state could be found, or if the default
 *         persistence service is not configured or does not refer to a {@link QueryablePersistenceService}
 */
export declare const previousState: (item: ItemNameOrItem, skipEqual: boolean) => HistoricItem | null;
export {};
