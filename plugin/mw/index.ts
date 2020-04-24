import * as Koa from 'koa';

import { Ursa, IContext } from '@ursajs/core';

export default (ursa: Ursa, options: any = {}): Koa.Middleware => {
    return (ctx: IContext, next: Function) => {
        // TODO
    };
};
