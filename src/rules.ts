import { automationManager } from "@runtime/RuleSupport";
import { ItemStateChangedEvent, ItemStateUpdatedEvent, GroupItemStateChangedEvent, ItemCommandEvent, ThingStatusInfoChangedEvent } from "./openhab-types";

// import { extractNewState, extractPreviousState, extractReceivedCommand, extractTriggeringItemName } from './events';
import { toSet } from './java-utils';
import { getLogger } from './logger';
import { SimpleRule } from './openhab-types';

const logger = getLogger("libs/rules.ts");

type ExecuteType = (action: org.openhab.core.automation.Action, input: { [index: string]: any }) => void;
type ExecuteTypeExt = (action: org.openhab.core.automation.Action, input: { [index: string]: any },
  props: {
    receivedCommand?: org.openhab.core.types.Command,
    newState?: org.openhab.core.types.State,
    previousState?: org.openhab.core.types.State,
    triggeringItemName?: string,

    thingEvent?: org.openhab.core.thing.events.ThingStatusInfoChangedEvent,
  }
) => void;

type ExecuteFnType = {

  /** Execution function on trigger events */
  execute: ExecuteTypeExt,

  /** Array of triggers */
  triggers?: org.openhab.core.automation.Trigger[],

  /** Tags for rule, also used for sematic stuff ? */
  tags?: string[],

  /** Rule name */
  name?: string

  /** Rule description */
  description?: string,

  /** Set to ``false`` to not automatically add rule via automationManager */
  autoAdd?: boolean
}

/**
 * Creates a rule with all required properties and usually add to automation manager
 * @param params Parameters as object
 */
export const createRule = (params: ExecuteFnType): org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule => {
  const SimpleRuleExt: any = Java.extend(SimpleRule);

  // wrap rule in a final try-catch block to receive the error!
  const execute: ExecuteType = (action, input) => {
    try {
      params.execute(action, input, {
        receivedCommand: extractReceivedCommand(input),
        newState: extractNewState(input),
        previousState: extractPreviousState(input),
        triggeringItemName: extractTriggeringItemName(input),
        thingEvent: extractThingStatusInfoChangedEvent(input)
      });
    } catch (e: any) {
      console.error("------------------------------------------")
      console.error("# Error: ", e.toString());
      console.error("------------------------------------------")
      logger.error("------------------------------------------")
      logger.error("# Error: See console for more details");
      logger.error(`# Failed to execute rule ${e}: ${e.stack}`);
      logger.error("------------------------------------------")
    }
  }

  const rule: org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule = new SimpleRuleExt({ execute: execute });

  if (params.triggers && params.triggers.length > 0) {
    rule.setTriggers(params.triggers);
  }

  if (params.name) {
    rule.setName(params.name);
  }

  if (params.description) {
    rule.setDescription(params.description);
  }

  if (params.tags) {
    rule.setTags(toSet(params.tags));
  }

  if (typeof params.autoAdd === 'undefined' || params.autoAdd === true) {
    // logger.warn("Jeha");
    // return automationManager.addRule(rule);
    automationManager.addRule(rule);
  }

  return rule;
}

const callTypEquals = <T, U>(input: { [index: string]: any }, classType: T, cb: (instance: T) => U): U | undefined => {
  const event = input?.get("event");
  if (event && event.class === classType) {
    return cb(event);
  }
  return undefined;
}



const extractThingStatusInfoChangedEvent = (input: { [index: string]: any }) => {
  let result = callTypEquals(input, ThingStatusInfoChangedEvent, (y) => y);
  if (result) return result;

  return undefined;
}

const extractTriggeringItemName = (input: { [index: string]: any }) => {

  let result = callTypEquals(input, ItemStateChangedEvent, (y) => y.getItemName());
  if (result) return result;

  result = callTypEquals(input, ItemStateUpdatedEvent, (y) => y.getItemName());
  if (result) return result;

  result = callTypEquals(input, GroupItemStateChangedEvent, (y) => y.getItemName());
  if (result) return result;

  result = callTypEquals(input, ItemCommandEvent, (y) => y.getItemName());
  if (result) return result;

  return undefined;
}

const extractNewState = (input: { [index: string]: any }) => {

  let result = callTypEquals(input, ItemStateChangedEvent, (y) => y.getItemState());
  if (result) return result;

  result = callTypEquals(input, ItemStateUpdatedEvent, (y) => y.getItemState());
  if (result) return result;

  result = callTypEquals(input, GroupItemStateChangedEvent, (y) => y.getItemState());
  if (result) return result;

  return undefined;
}

const extractReceivedCommand = (input: { [index: string]: any }) => {

  let result = callTypEquals(input, ItemCommandEvent, (y) => y.getItemCommand());
  if (result) return result;

  return undefined;
}

const extractPreviousState = (input: { [index: string]: any }) => {
  let result = callTypEquals(input, ItemStateChangedEvent, (y) => y.getOldItemState());
  if (result) return result;

  result = callTypEquals(input, GroupItemStateChangedEvent, (y) => y.getOldItemState());
  if (result) return result;

  return undefined;
}

