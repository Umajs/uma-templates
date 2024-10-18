import * as Koa from 'koa';
import * as views from 'koa-views';

import { Uma } from '@umajs/core';

export default (uma: Uma, options: any = {}): Koa.Middleware => views(options.root, options.opts);
