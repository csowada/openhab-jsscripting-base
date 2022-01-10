"use strict";

const { historicState, sendCommand, now, getLogger, postUpdate, getItem, stateAsNumber } = require("openhab-jsscripting-base");
const { DecimalType, OnOffType, UnDefType, ON, DateTimeType, ZonedDateTime, PlayPauseType, RefreshType, items } = require("@runtime");

const logger = getLogger("DateTimeDemo.js");

try {
    logger.info("*** DateTimeDemo.js ***")


    const NOW = now();
    logger.info("now(): " + NOW);

    const staticNow = ZonedDateTime.static.now();
    logger.info("ZonedDateTime.static.now(): " + staticNow);


    getItem("Today", (item) => {
        const dateTime = item.getStateAs(DateTimeType)?.getZonedDateTime();
        logger.info("item.getStateAs(DateTimeType): " + dateTime);
    });

    logger.info("Test successful");

} catch (e) {
    logger.error("Test failed: " + e)
}