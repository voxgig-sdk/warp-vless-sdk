import { WarpEntity } from './entity/WarpEntity';
export type * from './WarpVlessTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WarpVlessEntityBase } from './WarpVlessEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class WarpVlessSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Warp(entopts?: Record<string, any>): WarpEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WarpVlessSDK;
    tester(testopts?: any, sdkopts?: any): WarpVlessSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WarpVlessSDK;
export { stdutil, config, BaseFeature, WarpVlessEntityBase, WarpVlessSDK, SDK, };
export type { DirectResult };
