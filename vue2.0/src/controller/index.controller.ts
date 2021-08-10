import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-vue-ssr';

export default class Index extends BaseController {
    @Path('/')
    index() {
        return Result.vue('index', {
            title: 'umajs-vue-ssr',
            keywords: 'umajs vue ssr',
            description: 'umajs-vue-ssr是基于umajs+vue同构的解决方案，适用于SPA和MPA应用程序的开发，支持SSR和CSR模式动态切换！',
        });
    }

    @Path('/elementUI')
    elementUI() {
        return Result.vue('element', { title: 'umajs-vue-ssr element-ui',
            msg: '欢迎您！',
            userName: '张大佳',
            state: {
                tableData: [{
                    date: '2016-05-02',
                    name: '张大佳',
                    address: '北京市朝阳区酒仙桥IT产业园101 58赶集总部',
                }, {
                    date: '2016-05-04',
                    name: '张大佳',
                    address: '北京市朝阳区酒仙桥IT产业园101 58赶集总部',
                }, {
                    date: '2016-05-01',
                    name: '张大佳',
                    address: '北京市朝阳区酒仙桥IT产业园101 58赶集总部',
                }, {
                    date: '2016-05-03',
                    name: '张大佳',
                    address: '北京市朝阳区酒仙桥IT产业园101 58赶集总部',
                }],
            } });
    }

    @Path('/css')
    css() {
        return Result.vue('css', { title: 'umajs-vue-ssr',
            keywords: 'umajs vue ssr',
            description: 'umajs-vue-ssr是基于umajs+vue同构的解决方案，适用于SPA和MPA应用程序的开发，支持SSR和CSR模式动态切换！' });
    }

    @Path('/vuex')
    vuex() {
        return Result.vue('vuex', { title: 'umajs-vue-ssr',
            keywords: 'umajs vue ssr',
            description: 'umajs-vue-ssr是基于umajs+vue同构的解决方案，适用于SPA和MPA应用程序的开发，支持SSR和CSR模式动态切换！',
            state: {
                count: 200,
            },
        });
    }

    @Path('/andv')
    andv() {
        return Result.vue('andv', { title: 'umajs-vue-ssr',
            keywords: 'umajs vue ssr',
            description: 'umajs-vue-ssr是基于umajs+vue同构的解决方案，适用于SPA和MPA应用程序的开发，支持SSR和CSR模式动态切换！'
        });
    }

    @Path('/router', '/router/:path')
    router() {
        return Result.vue('router', {
            title: 'Vue-router',
            keywords: 'umajs vue ssr',
            home: 'hi 我是首页',
            about: 'hi 我是介绍页',
            description: 'umajs-vue-ssr是基于umajs+vue同构的解决方案，适用于SPA和MPA应用程序的开发，支持SSR和CSR模式动态切换！',
        });
    }
}
