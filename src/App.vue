<template>
  <div id="app">

    <!--下面<router-view/>表示当前路由对应的组件，如，访问的如果是'/',则下面<router-view/>对应的就是MSite组件，如果此时点击页面下面导航
    按钮：搜索，<router-view/>对应的就是Search组件-->
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import  {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },

    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
