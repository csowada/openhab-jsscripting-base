interface ThingStatusInfo {
    getDescription(): string;
    getStatus(): "INITIALIZING" | "OFFLINE" | "ONLINE" | "REMOVED" | "REMOVING" | "UNINITIALIZED" | "UNKNOWN";
}
export declare const getThingStatusInfo: (thingUid: string) => ThingStatusInfo | null;
export {};
