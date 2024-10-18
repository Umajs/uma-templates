<template>
<div id="app">
  <header>
    <div class="header">
     <img class="logo" :src="SrejsImg"/>
    </div>
  </header>
  <content>
      <section>
        <h3>特性</h3>
        <ul>
          <li>不限制路由</li>
          <li>服务端预处理数据</li>
          <li>SSR和CSR切换自由</li>
          <li>服务端渲染缓存</li>
        </ul>
      </section>
      <section>
        <h3>在线示例</h3>
        <ul>
          <li><a href="/css">CSS Modules</a></li>
          <li><a href="/vuex">Vuex</a></li>
          <li><a href="/router">Vue-router</a></li>
          <li><a href="/elementUI">Element-ui</a></li>
          <li><a href="/andv">Ant Design Vue</a></li>
        </ul>
      </section>
       <section>
        <h3>示例源码</h3>
        <ul>
          <li><a href="/css">CSS Modules</a></li>
          <li><a href="/vuex">Vuex</a></li>
          <li><a href="/vueRouter">Vue-router</a></li>
          <li><a href="/elementUI">Element-ui</a></li>
          <li><a href="/andv">Ant Design Vue</a></li>
        </ul>
        <h3><a href="https://umajs.gitee.io/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/React-ssr.html#%E6%8F%92%E4%BB%B6%E4%BB%8B%E7%BB%8D">文档</a></h3>
      </section>
  </content>
  <footer>
    <ul>
       <li><a href="https://npmcharts.com/compare/@srejs/vue" target="_blank"><img src="https://img.shields.io/npm/dt/@srejs/vue" alt="download"></a></li>
       <li><a href="https://github.com/dazjean/Srejs"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/dazjean/srejs?label=Srejs&style=social"></a></li>
       <li><a href="https://github.com/umajs/umajs"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/umajs/umajs?label=umajs&style=social"></a></li>
       <li><a href="https://github.com/umajs/plugin-vue-ssr"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/umajs/plugin-vue-ssr?label=@umajs/plugin-vue-ssr&style=social"></a></li>
     </ul>
  </footer>
</div>
</template>

<script>
import '@/common.less';
import SrejsImg from '@/images/Umajs-vue-ssr.png';

export default {
    props: ['msg', 'userName'],
    methods: {
    },
    data() {
        return {
            SrejsImg,
        };
    },
};
</script>

<style>
html,body,#app{
    height: 100%;
    width: 100%;
    font-size: 24px;
    overflow-y: auto;
}
</style>

<style scoped>
.github{
  font-size: 4.8rem;
    top: 13.6rem;
    -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    display: inline-block;
    background: #fff;
    -webkit-transition: all .3s cubic-bezier(.25,.8,.25,1);
    transition: all .3s cubic-bezier(.25,.8,.25,1);
    -webkit-transition-property: background-color,-webkit-box-shadow;
    transition-property: background-color,-webkit-box-shadow;
    transition-property: box-shadow,background-color;
    transition-property: box-shadow,background-color,-webkit-box-shadow;
    color: #008eaa;
    padding: .4rem 1.6rem;
}
</style>
