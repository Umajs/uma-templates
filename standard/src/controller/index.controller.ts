import { BaseController, Result, Path } from '@umajs/core';

export default class Index extends BaseController {
    @Path('/')
    index() {
        return Result.view('index.html', { frameName: 'Umajs' });
    }
}
