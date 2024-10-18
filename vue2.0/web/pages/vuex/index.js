/* eslint-disable global-require */
import Vue from 'vue';
import NoSSR from 'vue-no-ssr';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import App from './App.vue';

Vue.use(NoSSR);
if (typeof window !== 'undefined') {
    const VueCodemirror = require('vue-codemirror');

    require('codemirror/mode/vue/vue.js');
    Vue.use(VueCodemirror);
}

export default {
    App,
    Store: {
        state: {
            count: 100,
        },
        mutations: {
            increment: (state) => state.count++,
            decrement: (state) => state.count--,
        },
    },
};
