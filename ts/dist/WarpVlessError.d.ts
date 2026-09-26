import { Context } from './Context';
declare class WarpVlessError extends Error {
    isWarpVlessError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WarpVlessError };
