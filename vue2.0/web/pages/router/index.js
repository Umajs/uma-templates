/* eslint-disable global-require */
import Vue from 'vue';
import NoSSR from 'vue-no-ssr';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import App from './App.vue';
import About from './about.vue';
import Home from './home.vue';

Vue.use(NoSSR);
if (typeof window !== 'undefined') {
    const VueCodemirror = require('vue-codemirror');

    require('codemirror/mode/vue/vue.js');
    Vue.use(VueCodemirror);
}

export default {
    App,
    Router: {
        mode: 'history',
        fallback: false,
        base: '/router/',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/about', props: true, component: About },
            { path: '/home', props: true, component: Home },
            { path: '/', redirect: '/home' },
        ],
    },
};
