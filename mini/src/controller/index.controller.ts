import { BaseController, Result ,Path} from '@umajs/core';

export default class Index extends BaseController {
    @Path('/')
    index() {
        return Result.json({
            msg: 'success',
            data: 'this is data',
        });
    }
}
