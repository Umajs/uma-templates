import * as Koa from 'koa';
import { Uma, IContext } from '@umajs/core';

export type Options = {};

export default (uma: Uma, options: Options = {}): Koa.Middleware => {
    return (ctx: IContext, next: Function) => {
        // TODO
    };
};
