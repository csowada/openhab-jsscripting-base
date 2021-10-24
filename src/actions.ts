import { getLogger } from "./logger";

const logger = getLogger("actions.ts");

const ScriptServiceUtil: any = Java.type("org.openhab.core.model.script.ScriptServiceUtil");
const HTTP: any = Java.type("org.openhab.core.model.script.actions.HTTP");

interface Action {

}

interface SendMailAction extends Action {
  sendMail(recipient: string, subject: string, text: string): boolean;
  sendMail(recipient: string, subject: string, text: string, url: string): boolean;
  sendMail(recipient: string, subject: string, text: string, urls: string[]): boolean;

  sendHtmlMail(recipient: string, subject: string, htmlContent: string): boolean;
  sendHtmlMail(recipient: string, subject: string, htmlContent: string, url: string): boolean;
  sendHtmlMail(recipient: string, subject: string, htmlContent: string, urls: string[]): boolean;
}

interface MqttAction extends Action {
  publishMQTT(topic: string, value: string, retained?: boolean): boolean
}


const getActionScope = (thingAction: any) => {

  const ThingActionsScope: any = Java.type("org.openhab.core.thing.binding.ThingActionsScope");
  const scopeAnnotation: any = thingAction.class.getAnnotation(ThingActionsScope.class);

  if (scopeAnnotation) {
    return scopeAnnotation.name();
  }
};

const getThingUID = (thingAction: any) => {
  const thing: any = thingAction.getThingHandler().getThing();
  return thing.getUID();
}

// const actionServices = ScriptServiceUtil.getActionServices();
// if (actionServices != null) {
//   for (var actionService in actionServices) {
//     var cn = actionServices[actionService].getActionClassName();
//     var className = cn.substring(cn.lastIndexOf(".") + 1);
//     logger.info("-->" + cn + "-->" + className);
//     // actions[className] = services[actionService];
//     // actionList[actionService] = className;
//   }
// }

/**
 * Returns a scoped thing action
 * @param scope Scope like ``mail``
 * @param uid The thing UID
 */
const getActions = (scope: string, uid: string) => {

  if (scope && uid) {
    const thingActions: Action[] = Java.from(ScriptServiceUtil.getThingActions());
    const result = thingActions.filter(thingAction => getActionScope(thingAction) === scope && getThingUID(thingAction));

    if (result.length > 0) {
      return result[0];
    }
  }
  return undefined;
}

const getSendMailAction = (uid: string) => {
  return getActions("mail", uid) as SendMailAction;
}

const getMqttAction = (uid: string) => {
  return getActions("mqtt", uid) as MqttAction;
}

const getHttpAction = () => {
  return HTTP;
}

export {
  getActions,
  getSendMailAction,
  getMqttAction,
  getHttpAction
}