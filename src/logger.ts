/// <reference path="../@types/index.d.ts" />

const LoggerFactory: any = Java.type("org.slf4j.LoggerFactory");

/**
 * My function with
 * @param filename 
 * @returns 
 */
export const getLogger = (filename: string) => {
    return LoggerFactory.getLogger("scripting." + filename) as org.slf4j.Logger;
};