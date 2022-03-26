import { getHttpAction, HttpAction } from "./actions";
import { toMap } from "./java-utils";
import { getLogger } from "./logger";
// import { sharedcache } from "@runtime";

const logger = getLogger("class.TS");

const OAUTH2_URL = "https://login.microsoftonline.com/common/oauth2/v2.0";
// const TOKEN_URL = "https://login.microsoftonline.com/consumers/oauth2/v2.0/token";
const FORM_URLENCODED = "application/x-www-form-urlencoded"


interface DeviceLoginResponse {

  // "user_code": "FJAUPGXXX",
  // "device_code": "FAQABAAEAAAC5una0EUFgTIF8ElaxtWjT0hwV1l0PGcZXXX6D6brVwuVuSD3H9QrwM86JXLoNp6B8ManAJOYKykrIwiE1EUMl0xl_uEh7_mRBK-gMqmLE8V0n4HMwTrVIoqr9xsY2sXLOtQTgNreUfYNI-LIiketFY8S1QoYOi-bK2lnUVpl7NiAA",
  // "verification_url": "https://microsoft.com/devicelogin",
  // "expires_in": "900",
  // "interval": "5",
  // "message": "To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FJAUPGXXX to authenticate." 

  user_code: string
  device_code: string
  verification_url: string
  expires_in: string
  interval: string
  message: string
}

interface AccessTokenResponse {

  // "token_type": "Bearer",
  // "scope": "email Mail.Read openid profile User.Read",
  // "expires_in": 3600,
  // "ext_expires_in": 3600,
  // "access_token": "eyJ0eXAiOiJKV1QXXXJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYaVpRSXdmazVzS3VNVkt3dXhLaVQ2WlZDTjhHRGpSVFR5MFdlRGo3MWlaNUt4VEhYWkFzSUpTWXlLeVZLMUxLVXlBYjVjdXBBRzFxNGQ2ZGNKUW1Rb3lBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiTi1sQzBuLTlEQUxxd2h1SFluSFE2M0dlQ1hjIiwia2lkIjoiTi1sQzBuLTlEQUxxd2h1SFluSFE2M0dlQ1hjIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTU0MzkzNzM3LCJuYmYiOjE1NTQzOTM3MzcsImV4cCI6MTU1NDM5NzYzNywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhMQUFBQTAzMUxudDY2K0luQURwMnllUlAyYk1qNTZZRzJ6YXJ0NWtCWTRTS29ZPSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiNi02LTE4QXBwIiwiYXBwaWQiOiI2ZTc0MTcyYi1iZTU2LTQ4NDMtOWZmNC1lNjZhMzliYjEyZTMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwiZ2l2ZW5fbmFtZSI6IkoiLCJpcGFkZHIiOiIxOTguMTM0Ljk4LjEwIiwibmFtZSI6IkogQWRtaW4iLCJvaWQiOiJlM2ViNjQyYS1mMWExLTRlN2ItYmI0YS1kZjRjNGMyYTJmMTIiLCJwbGF0ZiI6IjE0IiwicHVpZCI6IjEwMDMzRkZGQUE0RERDNUYiLCJzY3AiOiJlbWFpbCBNYWlsLlJlYWQgb3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIiwic3ViIjoiamE1a2NqeTlLZVY4UUFIOHdzT0FpQUt5V05qY3lSeVJuNFpycHotSy1fTSIsInRpZCI6ImZhMTVkNjkyLWU5YzctNDQ2MC1hNzQzLTI5ZjI5NTZmZDQyOSIsInVuaXF1ZV9uYW1lIjoiYWRtaW5AbXlvcmcuY29tIiwidXBuIjoiYWRtaW5AbXlvcmcuY29tIiwidXRpIjoidFFtc0RfeUpGazYxVlpvWUw2Z21BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIl0sInhtc19zdCI6eyJzdWIiOiJlbU52RWc2QmJZU2w3WlBBby1BSUtNN0ZyNENYb1UzT0pib3pNdnpFNllvIn0sInhtc190Y2R0IjoxNDE5OTY0MDk5fQ.ovFQbqiNZ7itbvnKB2-uWvQ_TLOm-_xmnVzOdH5Eph8Xiq9D8FUlKUh7p8WEipk68YF1n-eF4Ioc0tq7tR372GIGrbulSeTMzr1qMXXAWrkoluGsbWrb0et2h7rR_KabQgZrAOnni-gAInWiATOMWMCSFhUmVnBZBgtRT7pElPj3JGaouGAuZDwmCCbr-p76jl8Ty8Hf3ArDoDj0MiGOq-VGF4fSjz0SviAlRMjxaBe1ZD1lAn1a0L9OAQ1pcmp-U9J3-MuCXWZXMXgYFJ42OqpcvGWLyeWHEnkNUVELyzRhbRtKEHFZhF0Kb54RRoijEw",
  // "refresh_token": "OAQABAAAAAADCoMpjJXrxTqXXX9te-7FXrFdW5F4C2B2RUjpwmTgwLMnO9RLj78_-qwLBCXiI2dkXoeJVoSIMeMvhGHT7hQQhseAA_BvfnfywkQdCuw2KwfGaAq0tEb1yiYbpnHZMNZeRpoB1DboSsQVw_oFANlz63aNHUuK3lGLWBY6t_XvQw8k29yTLNe3AtsVvBzTsKRKl9GQVTbp04-wDzMS7rBjqazzOySOCK{snip}}",
  // "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJXXXI1NiIsImtpZCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyJ9.eyJhdWQiOiI2ZTc0MTcyYi1iZTU2LTQ4NDMtOWZmNC1lNjZhMzliYjEyZTMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZmExNWQ2OTItZTljNy00NDYwLWE3NDItMjlmMjk1NmZkNDI5L3YyLjAiLCJpYXQiOjE1NTQzOTM3MzcsIm5iZiI6MTU1NDM5MzczNywiZXhwIjoxNTU0Mzk3NjM3LCJhaW8iOiJBVFFBeS84TEFBQUFjaytjYkk4YnFqcTdtV3dCcmRXV3ROYkd0ZDVOMzdFU09pUW1rU2xOSlJNRGVxekJyakwzZ2F3WW1kanhwMiIsIm5hbWUiOiJKIEFkbWluIiwib2lkIjoiZTNlYjY0MmEtZjFhMS00ZTdiLWJiNGEtZGY0YzRjMmEyZjEyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5AbXlvcmcuY29tIiwic3ViIjoiZW1OdkVnNkJiWVNsN1pQQW8tQUlLTTdGcjRDWG9VM09KYm96TXZ6RTZZbyIsInRpZCI6ImZhMTVkNjkyLWU5YzctNDQ2MC1hNzQyLTI5ZjI5NTZmZDQyOSIsInV0aSI6InRRbXNEX3lKRms2MVZab1lMNmdtQUEiLCJ2ZXIiOiIyLjAifQ.VbI6gvru70N1u{snip}"

  token_type: string
  scope: string
  expires_in: number
  ext_expires_in: number
  access_token: string
  refresh_token: string
  id_token: string
}

export class MSGraph {

  deviceCode: string = "";
  bearerToken: string = "";
  clientId: string;
  http: HttpAction;

  constructor(clientId: string) {
    this.clientId = clientId;
    this.http = getHttpAction();
  }

  getGraph(url: string) {
    const headers = toMap({
      Accept: "application/json",
      Authorization: "Bearer " + this.bearerToken
    });
    return JSON.parse(this.http.sendHttpGetRequest(url, headers, 1000));
  }

  /**
   * 
   * @param scopes 
   */
  deviceAuthorizationRequest(scopes: string[]) {

    const scopes0 = [...scopes, "offline_access"];

    const formData = this.toFormData({
      client_id: this.clientId,
      scope: scopes0.join(" ")//encodeURIComponent(scopes0.join(" "))
    });

    const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/devicecode`, FORM_URLENCODED, formData, 1000)) as DeviceLoginResponse;
    this.deviceCode = jsonData.device_code;
    logger.info(JSON.stringify(jsonData));
    logger.info(jsonData.message);

    return jsonData;
  }

  /**
   * 
   * @param code 
   */
  deviceAccessTokenRequest(code: string) {
    const formData = this.toFormData({
      client_id: this.clientId,
      grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      code
    });

    const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/token`, FORM_URLENCODED, formData, 1000)) as AccessTokenResponse;

    this.bearerToken = jsonData.access_token;
    return jsonData;
  }

  /**
   * 
   * @param refreshToken 
   * @returns 
   */
  refreshRefreshToken(refreshToken: string) {

    const formData = this.toFormData({
      client_id: this.clientId,
      grant_type: "refresh_token",
      refresh_token: refreshToken
    });

    const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/token`, FORM_URLENCODED, formData, 1000));

    Object.keys(jsonData).forEach(key => logger.info("key: " + key));

    this.bearerToken = jsonData.access_token;

    return jsonData;
  };

  /**
   * 
   * @param formData 
   * @returns 
   */
  private toFormData(formData: { [key: string]: string }) {
    return Object.entries(formData)
      .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
      .join("&");
  };
}