"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSGraph = void 0;
const actions_1 = require("./actions");
const java_utils_1 = require("./java-utils");
const logger_1 = require("./logger");
// import { sharedcache } from "@runtime";
const logger = (0, logger_1.getLogger)("class.TS");
const OAUTH2_URL = "https://login.microsoftonline.com/common/oauth2/v2.0";
// const TOKEN_URL = "https://login.microsoftonline.com/consumers/oauth2/v2.0/token";
const FORM_URLENCODED = "application/x-www-form-urlencoded";
class MSGraph {
    constructor(clientId) {
        this.deviceCode = "";
        this.bearerToken = "";
        this.clientId = clientId;
        this.http = (0, actions_1.getHttpAction)();
    }
    getGraph(url) {
        const headers = (0, java_utils_1.toMap)({
            Accept: "application/json",
            Authorization: "Bearer " + this.bearerToken
        });
        return JSON.parse(this.http.sendHttpGetRequest(url, headers, 1000));
    }
    /**
     *
     * @param scopes
     */
    deviceAuthorizationRequest(scopes) {
        const scopes0 = [...scopes, "offline_access"];
        const formData = this.toFormData({
            client_id: this.clientId,
            scope: scopes0.join(" ") //encodeURIComponent(scopes0.join(" "))
        });
        const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/devicecode`, FORM_URLENCODED, formData, 1000));
        this.deviceCode = jsonData.device_code;
        logger.info(JSON.stringify(jsonData));
        logger.info(jsonData.message);
        return jsonData;
    }
    /**
     *
     * @param code
     */
    deviceAccessTokenRequest(code) {
        const formData = this.toFormData({
            client_id: this.clientId,
            grant_type: "urn:ietf:params:oauth:grant-type:device_code",
            code
        });
        const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/token`, FORM_URLENCODED, formData, 1000));
        this.bearerToken = jsonData.access_token;
        return jsonData;
    }
    /**
     *
     * @param refreshToken
     * @returns
     */
    refreshRefreshToken(refreshToken) {
        const formData = this.toFormData({
            client_id: this.clientId,
            grant_type: "refresh_token",
            refresh_token: refreshToken
        });
        const jsonData = JSON.parse(this.http.sendHttpPostRequest(`${OAUTH2_URL}/token`, FORM_URLENCODED, formData, 1000));
        Object.keys(jsonData).forEach(key => logger.info("key: " + key));
        this.bearerToken = jsonData.access_token;
        return jsonData;
    }
    ;
    /**
     *
     * @param formData
     * @returns
     */
    toFormData(formData) {
        return Object.entries(formData)
            .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
            .join("&");
    }
    ;
}
exports.MSGraph = MSGraph;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXNncmFwaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tc2dyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFzRDtBQUN0RCw2Q0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLDBDQUEwQztBQUUxQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGtCQUFTLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsTUFBTSxVQUFVLEdBQUcsc0RBQXNELENBQUM7QUFDMUUscUZBQXFGO0FBQ3JGLE1BQU0sZUFBZSxHQUFHLG1DQUFtQyxDQUFBO0FBdUMzRCxNQUFhLE9BQU87SUFPbEIsWUFBWSxRQUFnQjtRQUw1QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBS3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQUssRUFBQztZQUNwQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLGFBQWEsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVc7U0FDNUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBMEIsQ0FBQyxNQUFnQjtRQUV6QyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsdUNBQXVDO1NBQ2hFLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFVBQVUsYUFBYSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQXdCLENBQUM7UUFDL0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsQ0FBQyxJQUFZO1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFVBQVUsRUFBRSw4Q0FBOEM7WUFDMUQsSUFBSTtTQUNMLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFVBQVUsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQXdCLENBQUM7UUFFMUksSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsWUFBb0I7UUFFdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLFlBQVk7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsVUFBVSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRW5ILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFFekMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLFFBQW1DO1FBQ3BELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQUEsQ0FBQztDQUNIO0FBMUZELDBCQTBGQyJ9