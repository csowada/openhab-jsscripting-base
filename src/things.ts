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