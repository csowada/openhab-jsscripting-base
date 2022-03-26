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
export interface HttpAction extends Action {
    sendHttpGetRequest(url: string): string;
    sendHttpGetRequest(url: string, timeout: int): string;
    sendHttpGetRequest(url: string, headers: java.util.Map<string, string>, timeout: int): string;
    sendHttpPostRequest(url: string): string;
    sendHttpPostRequest(url: string, timeout: int): string;
    sendHttpPostRequest(url: string, contentType: string, content: string): string;
    sendHttpPostRequest(url: string, contentType: string, content: string, timeout: int): string;
    sendHttpPostRequest(url: string, contentType: string, content: string, headers: java.util.Map<string, string>, timeout: int): string;
    sendHttpPostRequest(url: string, contentType: string, content: string, headers: {
        [key: string]: string;
    }, timeout: int): string;
}
interface MqttAction extends Action {
    publishMQTT(topic: string, value: string, retained?: boolean): boolean;
}
/**
 * Returns a scoped thing action
 * @param scope Scope like ``mail``
 * @param uid The thing UID
 */
declare const getActions: (scope: string, uid: string) => Action | undefined;
declare const getSendMailAction: (uid: string) => SendMailAction;
declare const getMqttAction: (uid: string) => MqttAction;
declare const getHttpAction: () => HttpAction;
export { getActions, getSendMailAction, getMqttAction, getHttpAction };
