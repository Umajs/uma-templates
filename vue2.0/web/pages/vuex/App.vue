<template>
  <div id = "app">
      <header>
        <div class="header">
        <img class="logo" :src="SrejsImg"/>
        </div>
      </header>
      <section>
        <h1>简单的计数器</h1>
          <p>{{ count }}</p>
          <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
          </p>
      </section>
        <ul>
          <li>
            <h1>入口文件</h1>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeIndex" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
          </li>
          <li>
            <h1>vue模板</h1>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeVue" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
          </li>
          <li><h1>script脚本</h1>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeJs" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
          </li>
        </ul>
        <div class="line"></div>
         <ul>
          <li>
            <h1>从服务端初始化store数据</h1>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeStore" :options="cmOptions"> </codemirror>
            </no-ssr>
            <p>
              框架默认集成了vuex,在插件提供的vue方法第二个参数中，我们可以通过传递state初始化数据。
              在服务端和客户端渲染时都将会浅合并到store上下文中，我们都可以通过$store.state获取到上下文中的数据。
              在客户端和服务端都达到一致的初始化数据。</p>
          </div>
          </li>
        </ul>
  </div>
</template>

<script>
import '@/common.less';
import SrejsImg from '@/images/Umajs-vue-ssr.png';

export default {
    name: 'vuex',
    computed: {
        count() {
            return this.$store.state.count; // 服务端获取初始化state
        },
    },
    data() {
        return {
            SrejsImg,
            cmOptions: {
        	mode: 'text/javascript',
                tabSize: 4,
                theme: 'base16-dark',
                readOnly: true,
                lineNumbers: true,
                line: true,
                height: 'auto',
     	  },
            codeJs: `export default {
    name: 'vuex',
    computed: {
      count () {
        //监听store中的数据变化
        return this.$store.state.count 
      }
    },
      methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
    `,
            codeVue: `
<template>
  <h1>简单的计数器</h1>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</template>
        `,
            codeIndex: `
import App from './App.vue';
export default {
 App,
 Store:{
  state: {
      count: 100
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--
  }
 }
};
         `,
            codeStore: `
import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-vue-ssr';

export default class Index extends BaseController {
    @Path('/vuex')
    vuex() {
        return Result.vue('vuex', {
        state:{
            count:200
        }
    });
    }
}
` };
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement');
        },
    },
};
</script>
