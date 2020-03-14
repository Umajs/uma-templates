import { BaseController, Result } from '@ursajs/core';

export default class Index extends BaseController {
    index() {
        return Result.json({
            msg: 'success',
            data: 'this is data',
        });
    }
}
