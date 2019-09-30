import { LuluConfigOptions } from './common/interfaces/index';
import { Client } from './client';
import { resource } from './common/common.resource';
export declare class LuluService extends Client {
    shippingOptions: resource.ShippingOptions;
    constructor(config: LuluConfigOptions);
}
