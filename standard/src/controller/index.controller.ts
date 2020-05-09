import { BaseController, Result } from '@umajs/core';

export default class Index extends BaseController {
    index() {
        return Result.view('index.html', { frameName: 'Umajs' });
    }
}
