"use strict";

const { getLogger } = require("openhab-jsscripting-base");
const logger = getLogger("JavaMBeanDemo.js");

try {
    logger.info("*** JavaMBeanDemo.js ***")

    const Thread = Java.type("java.lang.Thread");
    const ManagementFactory = Java.type("java.lang.management.ManagementFactory");
    const memoryMxBean = ManagementFactory.getMemoryMXBean();

    logger.info("Thread.activeCount():              " + Thread.activeCount());
    logger.info("memoryMxBean.getHeapMemoryUsage(): " + memoryMxBean.getHeapMemoryUsage().getUsed() / 1024 / 1024);

    logger.info("Test successful");
}
catch (e) {
    logger.error("Test failed");
}
