import { getLogger } from "./logger";
import { ItemStateChangedEvent, ItemStateEvent, GroupItemStateChangedEvent, ItemCommandEvent } from "./openhab-types";

const logger = getLogger("events.ts");

const x = <T, U>(input: { [index: string]: any }, classType: T, cb: (instance: T) => U): U | undefined => {
  const event = input?.get("event");
  // logger.info("class: " + event.class);
  if (event && event.class === classType) {
    return cb(event);
  }
  return undefined;
}

export const triggeringItemName = (input: { [index: string]: any }) => {

  let result = x(input, ItemStateChangedEvent, (y) => y.getItemName());
  if (result) return result;

  result = x(input, ItemStateEvent, (y) => y.getItemName());
  if (result) return result;

  result = x(input, GroupItemStateChangedEvent, (y) => y.getItemName());
  if (result) return result;

  result = x(input, ItemCommandEvent, (y) => y.getItemName());
  if (result) return result;

  return undefined;
}

export const newState = (input: { [index: string]: any }) => {

  let result = x(input, ItemStateChangedEvent, (y) => y.getItemState());
  if (result) return result;

  result = x(input, ItemStateEvent, (y) => y.getItemState());
  if (result) return result;

  result = x(input, GroupItemStateChangedEvent, (y) => y.getItemState());
  if (result) return result;

  return undefined;
}

export const receivedCommand = (input: { [index: string]: any }) => {

  let result = x(input, ItemCommandEvent, (y) => y.getItemCommand());
  if (result) return result;

  return undefined;
}

export const xpreviousState = (input: { [index: string]: any }) => {
  let result = x(input, ItemStateChangedEvent, (y) => y.getOldItemState());
  if (result) return result;

  result = x(input, GroupItemStateChangedEvent, (y) => y.getOldItemState());
  if (result) return result;

  return undefined;
}
