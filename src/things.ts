import { getLogger } from "./logger";

const logger = getLogger("things.ts");

const things: any = Java.type("org.openhab.core.model.script.actions.Things");

interface ThingStatusInfo {
  getDescription(): string;
  getStatus(): "INITIALIZING" | "OFFLINE" | "ONLINE" | "REMOVED" | "REMOVING" | "UNINITIALIZED" | "UNKNOWN"
}

export const getThingStatusInfo = (thingUid: string): ThingStatusInfo | null => {
  return things.getThingStatusInfo(thingUid) as ThingStatusInfo;
}
