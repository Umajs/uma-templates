import * as Koa from 'koa';

import { Uma, IContext } from '@umajs/core';

export default (uma: Uma, options: any = {}): Koa.Middleware => {
    return (ctx: IContext, next: Function) => {
        // TODO
    };
};
