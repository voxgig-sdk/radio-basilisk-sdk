import { Context } from './Context';
declare class RadioBasiliskError extends Error {
    isRadioBasiliskError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RadioBasiliskError };
