import { automationManager } from "@runtime/RuleSupport";

import { newState, xpreviousState, receivedCommand, triggeringItemName } from './events';
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
    triggeringItemName?: string
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
        receivedCommand: receivedCommand(input),
        newState: newState(input),
        previousState: xpreviousState(input),
        triggeringItemName: triggeringItemName(input)
      });
    } catch (e: any) {
      console.error("------------------------------------------")
      console.error("# Error: ", e.toString());
      console.error("------------------------------------------")
      logger.error("------------------------------------------")
      logger.error("# Error: See console for more details");
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
    automationManager.addRule(rule);
  }

  return rule;
}