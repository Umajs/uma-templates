import { BaseController, Result ,Path} from '@umajs/core';
import { Query } from '@umajs/arg-decorator';


export default class Index extends BaseController {
    @Path('/')
    index(@Query('id') id:string) {
        return Result.json({
            msg: 'success',
            data: 'this is query data '+ id,
        });
    }
}
