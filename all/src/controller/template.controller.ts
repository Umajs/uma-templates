import { BaseController, Path, Around, Result } from '@umajs/core';
import { Query, Param } from '@umajs/arg-decorator';
import { AgeCheck } from '../decorator/AgeCheck';

import { method } from '../aspect/test.aspect';
import { mw } from '../aspect/mw.aspect';

@Path('/tpl')
export default class Template extends BaseController {
    @Path('/')
    index() {
        return Result.send('this is index router in template');
    }

    @Path('/reg/:name*')
    @Around(method)
    reg(@AgeCheck('age') age: number, @Param('name') name: string) {
        return Result.send(`this is reg router. ${name} ${age}`);
    }

    @Around(mw)
    @Path('/test')
    test(@Query('name') name: string) {
        console.log('hi tpl test', name);

        return Result.send('this is static router in template');
    }

    @Path('/ns')
    notSend() {
        console.log('.....This will not send any msg...');
    }
}
