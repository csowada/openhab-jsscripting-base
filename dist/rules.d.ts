import { SimpleRule } from './openhab-types';
declare type ExecuteTypeExt = (action: org.openhab.core.automation.Action, input: {
    [index: string]: any;
}, props: {
    receivedCommand?: org.openhab.core.types.Command;
    newState?: org.openhab.core.types.State;
    previousState?: org.openhab.core.types.State;
    triggeringItemName?: string;
    thingEvent?: org.openhab.core.thing.events.ThingStatusInfoChangedEvent;
}) => void;
declare type ExecuteFnType = {
    /** Execution function on trigger events */
    execute: ExecuteTypeExt;
    /** Array of triggers */
    triggers?: org.openhab.core.automation.Trigger[];
    /** Tags for rule, also used for sematic stuff ? */
    tags?: string[];
    /** Rule name */
    name?: string;
    /** Rule description */
    description?: string;
    /** Set to ``false`` to not automatically add rule via automationManager */
    autoAdd?: boolean;
};
/**
 * Creates a rule with all required properties and usually add to automation manager
 * @param params Parameters as object
 */
export declare const createRule: (params: ExecuteFnType) => org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule;
export {};
