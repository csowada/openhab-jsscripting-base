"use strict";

const { getLogger } = require("openhab-jsscripting-base");
const { DecimalType, OnOffType } = require("@runtime");

const logger = getLogger("OHTypesDemo.js");

try {
    logger.info("*** OHTypesDemo.js ***")

    logger.info("DecimalType -> " + DecimalType);                               //class org.openhab.core.library.types.DecimalType"
    logger.info("DecimalType.class -> " + DecimalType.class);                   //class java.lang.Class
    logger.info("DecimalType.static.class -> " + DecimalType.static.class);     // class org.openhab.core.library.types.DecimalType
    logger.info("DecimalType.static -> " + DecimalType.static);                 // class org.openhab.core.library.types.DecimalType
    logger.info("DecimalType.static -> " + DecimalType.static.valueOf);         // function () { [native code] }
    
    const instance = new DecimalType(123456.7);
    logger.info("Instance -> " + instance);                                 // 123456.7
    logger.info("Instance -> " + instance.as);                              // function () { [native code] }
    logger.info("Instance -> " + instance.toBigDecimal());                  // 123456.7
    
    const instance2 = new DecimalType.static(4444.1);
    logger.info("Instance2 -> " + instance2);                               // 4444.1
    logger.info("Instance2 -> " + instance2.as);                            // function () { [native code] }
    logger.info("Instance2 -> " + instance2.toBigDecimal());                // 4444.1
    
    logger.info("OnOffType -> " + OnOffType);                               // org.openhab.core.library.types.OnOffType
    logger.info("OnOffType.class -> " + OnOffType.class);                   // class java.lang.Class
    logger.info("OnOffType.OFF -> " + OnOffType.OFF);                       // undefined
    logger.info("OnOffType.OFF -> " + OnOffType.static.OFF);                // OFF

    logger.info("Test successful");
}
catch (e) {
    logger.error("Test failed");
}


