import { BaseController, Result } from '@umajs/core';

export default class Index extends BaseController {
    index() {
        return Result.json({
            msg: 'success',
            data: 'this is data',
        });
    }
}
