import { WarpVlessEntityBase } from '../WarpVlessEntityBase';
import type { WarpVlessSDK } from '../WarpVlessSDK';
import type { Control } from '../types';
import type { Warp, WarpCreateData } from '../WarpVlessTypes';
declare class WarpEntity extends WarpVlessEntityBase<Warp> {
    constructor(client: WarpVlessSDK, entopts: any);
    make(this: WarpEntity): WarpEntity;
    create(this: any, reqdata?: WarpCreateData, ctrl?: Control): Promise<WarpEntity>;
}
export { WarpEntity };
