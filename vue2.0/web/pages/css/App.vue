<template>
  <div id = "app">
    <header class="header">
          <img class="logo" :src="SrejsImg" alt="">
    </header>
    <div>
      <ul>
        <li>
          <p class="scoped">
            Scoped CSS
          </p>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="scoped" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
        </li>
        <li>
          <p class="less">
            预处理器Scoped less
          </p>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="scopedless" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
        </li>
        <li>
          <p class="import-css">
          预处理器全局Import less
          </p>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
            <codemirror :value="importLess" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
        </li>
        <li>
          <p :class="$style.red">
            Scoped css module
          </p>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
              <codemirror :value="scopedModule" :options="cmOptions"> </codemirror>
            </no-ssr>
          </div>
        </li>
        <li>
          <p :class="styles.module">
            预处理文件开启css module
          </p>
          <div class="codeMirrorWrap" >
            <no-ssr placeholder="loading" placeholader-tag="span">
              <codemirror :value="importLessModule" :options="cmOptions"> </codemirror>
            </no-ssr>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/common.less';
import './index.less';
import styles from './index.module.less';
import SrejsImg from '@/images/Umajs-vue-ssr.png';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import NoSSR from 'vue-no-ssr';

export default {
    components: {
        'no-ssr': NoSSR,
    },
    name: 'home',
    props: ['title'],
    data() {
        return {
            styles,
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
            scoped: `
<template>
    <p class="scoped">
    style scoped
  </p>
</template>
<style scoped>
.scoped {
  color: red;
  font-size: 18px;
}
</style>
      `,
            scopedless: `
<template>
    <p class="less">
    Scoped less
  </p>
</template>
<style lang="less" scoped>
  .less{
    color: red;
    font-size: 18px;
  }
</style>
      `,
            importLess: `
import  '@/common.less'
import  './index.less'
      `,
            scopedModule: `
<template>
  <p :class="$style.red">
      Scoped module
  </p>
</template>
<style  module>
  .red {
    color: red;
    font-size: 18px;
  }
</style>
      `,
            importLessModule: `
<template>
    <p :class="styles.module">
    对于外部样式文件，框架默认支持以文件命名:
    xxx.module.(less|scss|css)
    开启使用css module  
  </p>
</template>

// script  将导出的变量设置为模板可识别data对象
import styles from './index.module.less';
export default {
    data () {
      styles
    }
}
      `,
        };
    },
};
</script>
<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e
  overflow-y scroll
p
  text-align center
</style>
<style lang="less" scoped>
  .less{
    color: red;
    font-size: 18px;
  }
</style>

<style scoped>
.scoped {
  color: red;
  font-size: 18px;
}
</style>

<style  module>
.red {
  color: red;
  font-size: 18px;
}
.bold {
  font-weight: bold;
}
</style>
