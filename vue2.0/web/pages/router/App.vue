<template>
  <div id ='app'>
    <header>
        <div class="header">
        <img class="logo" :src="SrejsImg"/>
        </div>
      </header>
    <section>
      <h1>{{title}}</h1>
      <router-link to="/" title="home">Home</router-link>|
      <router-link to="/about" title="about">About</router-link>
      <router-view></router-view>
    </section>
    <ul>
      <li>
        <h2>入口文件</h2>
      <div class="codeMirrorWrap" style="width:800px;font-size: 16px;" >
        <no-ssr placeholder="loading" placeholader-tag="span">
        <codemirror :value="codeIndex" :options="cmOptions"> </codemirror>
        </no-ssr>
      </div>
      </li>
    </ul>
<h1>服务器端数据预取</h1>
        <ul>
          <li>
            <h2>直出Props</h2>
          <div class="codeMirrorWrap" style="width:800px;font-size: 16px;" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeProps" :options="cmOptions"> </codemirror>
            </no-ssr>
            <p>插件调用时数据上下文中默认注册到页面实例的props对象中
              (直出props属性不能接收state,state默认注入到vuex的store中，通过$stroe.state获取)</p>
          </div>
          </li>
          <li>
            <h2>静态方法asyncData</h2>
          <div class="codeMirrorWrap" style="width:800px;font-size: 16px;" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="codeAsyncData" :options="cmOptions"> </codemirror>
            </no-ssr>
            <p>
              asyncData接收对象参数默认是vuex的store和当前router,通过router可以获取到当前路由的参数等数据，然后调用异步请求获取http类型的数据，
              然后通过store触发状态管理的更新,也可直接改写操作store.state属性。框架会合并到store数据上下文state中。
            </p>
          </div>
          </li>
        </ul>
  </div>
</template>

<script>
import '@/common.less';
import SrejsImg from '@/images/Umajs-vue-ssr.png';

export default {
    name: 'app',
    props: ['title'],
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
            codeIndex: `
import App from './App.vue';
import About from './about.vue';
import Home from './home.vue';
export default {
    App,
    Router:{
        mode: 'history',
        fallback: false,
        base: '/router/',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/about', props: true, component: About },
            { path: '/home', props: true, component: Home },
            { path: '/', redirect: '/home' }
        ]
    }
};
         `,
            codeProps: `
<template>
  <div class="home">
      <p>{{msg}}</p>
  </div>
</template>
// 页面组件注册
export default {
    name: 'home',
    props:['msg'],
}
// 服务端路由调用时
Result.vue('router',{ msg:'hi 我是首页',});
`,
            codeAsyncData: `
<template>
  <div class="home">
      <p>{{message}}</p>
  </div>
</template>

export default {
    name: 'about',
    data () {
		return {
      message : this.$store.state.message
		}
    },
    async asyncData({store,route}){
      // store.state.message = 'about来自asyncData的数据'
      // 触发 action 后，会返回 Promise
      return store.dispatch('fetchItem', route.params.id)
    }
}`,
        };
    },
};
</script>
