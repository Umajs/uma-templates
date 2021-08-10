import Vue from 'vue';
import App from './App.vue';

if (typeof window !== 'undefined') {
    const VueCodemirror = require('vue-codemirror');

    require('codemirror/mode/vue/vue.js');
    Vue.use(VueCodemirror);
}

export default {
    App,
    Store: {
        state: {
            say: 'hello!',
        },
    },
};
