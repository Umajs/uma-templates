import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';

export default class Index extends BaseController {
    @Path('/')
    index() {
        return Result.reactView(
            'index',
            { title: 'umajs-react-ssr', des: 'Umajs-react-ssr是由Umajs 搭配Srejs构建的轻量级，使用简单，灵活的React服务端渲染解决方案;支持ssr和csr两种模式自由切换。' },
            { cache: false, useEngine: true },
        );
    }
}
