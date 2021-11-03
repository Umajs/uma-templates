import { BaseController, Result, Path } from '@umajs/core';
import { Query } from '@umajs/arg-decorator';

export default class Index extends BaseController {
    @Path('/')
    index(@Query('id') id:string) {
        console.log(id);

        return Result.view('index.html', { frameName: 'Umajs' });
    }
}
