import { getLogger } from "./logger";

const logger = getLogger("things.ts");

const things: any = Java.type("org.openhab.core.model.script.actions.Things");

// enum ThingStatus {
//     "INITIALIZING",
//     "OFFLINE",
//     "ONLINE",
//     "REMOVED",
//     "REMOVING",
//     "UNINITIALIZED",
//     "UNKNOWN"
// }

interface ThingStatusInfo {
    getDescription(): string;
    getStatus():     "INITIALIZING" | "OFFLINE" | "ONLINE" | "REMOVED" | "REMOVING" | "UNINITIALIZED" | "UNKNOWN"
}

const getThingStatusInfo = (thingUid: string): ThingStatusInfo | null => {
    return things.getThingStatusInfo(thingUid) as ThingStatusInfo;
}

export {
    // ThingStatus,
    getThingStatusInfo
}