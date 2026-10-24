import { MusicEntity } from './entity/MusicEntity';
export type * from './RadioBasiliskTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RadioBasiliskEntityBase } from './RadioBasiliskEntityBase';
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
declare class RadioBasiliskSDK {
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
    Music(entopts?: Record<string, any>): MusicEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RadioBasiliskSDK;
    tester(testopts?: any, sdkopts?: any): RadioBasiliskSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RadioBasiliskSDK;
export { stdutil, config, BaseFeature, RadioBasiliskEntityBase, RadioBasiliskSDK, SDK, };
export type { DirectResult };
