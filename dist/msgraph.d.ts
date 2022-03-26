import { HttpAction } from "./actions";
interface DeviceLoginResponse {
    user_code: string;
    device_code: string;
    verification_url: string;
    expires_in: string;
    interval: string;
    message: string;
}
interface AccessTokenResponse {
    token_type: string;
    scope: string;
    expires_in: number;
    ext_expires_in: number;
    access_token: string;
    refresh_token: string;
    id_token: string;
}
export declare class MSGraph {
    deviceCode: string;
    bearerToken: string;
    clientId: string;
    http: HttpAction;
    constructor(clientId: string);
    getGraph(url: string): any;
    /**
     *
     * @param scopes
     */
    deviceAuthorizationRequest(scopes: string[]): DeviceLoginResponse;
    /**
     *
     * @param code
     */
    deviceAccessTokenRequest(code: string): AccessTokenResponse;
    /**
     *
     * @param refreshToken
     * @returns
     */
    refreshRefreshToken(refreshToken: string): any;
    /**
     *
     * @param formData
     * @returns
     */
    private toFormData;
}
export {};
