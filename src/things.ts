import { bundleContext } from "@runtime/osgi";
import { fromSet } from "./java-utils";
import { getLogger } from "./logger";

const logger = getLogger("things.ts");


/**
 * 
 * @param thingUid 
 * @returns 
 */
export const getThingStatusInfo = (thingUid: string): org.openhab.core.thing.ThingStatusInfo | null => {
  const things: any = Java.type("org.openhab.core.model.script.actions.Things");
  return things.getThingStatusInfo(thingUid) as org.openhab.core.thing.ThingStatusInfo;
}

/**
 * 
 * @returns 
 */
export const getThingRegistry = (): org.openhab.core.thing.ThingRegistry => {
  const ref = bundleContext.getServiceReference("org.openhab.core.thing.ThingRegistry");
  return bundleContext.getService(ref);
}

export const getThingManager = (): any => {
  const ref = bundleContext.getServiceReference("org.openhab.core.thing.ThingManager");
  return bundleContext.getService(ref);
}

/**
 * Enable/Disable a thing
 * @param thingId Thing Id
 * @param enable ``true`` to enable, or ``false`` to disable
 */
export const enableThing = (thingId: string, enable: boolean) => {
  
  const ThingUID: any = Java.type("org.openhab.core.thing.ThingUID");
  const tid = new ThingUID(thingId) as org.openhab.core.thing.ThingUID;

  getThingManager().setEnabled(tid, enable);
}

/**
 * 
 * @returns 
 */
export const getItemChannelLinkRegistry = (): org.openhab.core.thing.link.ItemChannelLinkRegistry => {
  const ref = bundleContext.getServiceReference("org.openhab.core.thing.link.ItemChannelLinkRegistry");
  return bundleContext.getService(ref);
}

/**
 * 
 * @returns 
 */
export const getAllThings = () => {
  return fromSet(getThingRegistry().getAll());
}