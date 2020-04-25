import { Ursa, IContext, TPlugin, RequestMethod } from '@ursajs/core';

export default (ursa: Ursa, options: any = {}): TPlugin => {
    console.log(options);

    return {
        context: {
            test: 123,
        },
        use: {
            async handler(ctx: IContext, next: Function) {
                console.log('use before');
                await next();
                console.log('use after');
            },
        },
        method: {
            type: RequestMethod.GET,
            async handler(ctx: IContext, next: Function) {
                console.log('method get before');
                await next();
                console.log('method get after');
            },
        },
    };
};
