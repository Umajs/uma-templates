import { BaseController, Result } from '@ursajs/core';

export default class Index extends BaseController {

    index() {
        return Result.send('This is index.');
    }
}
