/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

//利用mock模拟后台返回的数据
import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './fiters' // 加载过滤器

// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App), //代表把APP这个组件展示出来，等价下面的注释
  router, //使用上vue-router,等价于：router:router
  store, // 使用上vuex
})

//等价于
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: {App}，
//   router,
//   store,
// })
