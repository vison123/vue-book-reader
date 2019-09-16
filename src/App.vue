<template>
  <div class="app">
    <transition name="" mode="out-in">
      <keep-alive v-if="meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <div v-else style="width: 100%;height: 100%">
        <head-top v-show="meta.showHeader" :head-title="meta.headTitle"></head-top>
        <router-view
          class="router"
          :class="{
            'app-foot-margin': meta.showFootMenu,
            'app-header-margin': meta.showHeader
          }"
        >
        </router-view>
        <foot-guide v-show="meta.showFootMenu"></foot-guide>
        <div v-show="this.$store.getters.showLoading" class="cover" @touchmove.prevent @touchstart="hide($event)">
          <loading class="loading"></loading>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import headTop from '@/components/header/head'
import loading from '@/components/loading'

export default {
  name: 'App',
  components: {
    footGuide,
    headTop,
    loading
  },
  mounted () {
    console.log(this.$store)
  },
  computed: {
    meta () {
      return this.$route.meta
    }
  },
  method: {
    hide (e) {
      e.returnValue = false
    }
  }
}
</script>

<style lang="less">
  @import './assets/style/common.less';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

  .app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .app-foot-margin{
    margin-bottom: 1.95rem;
  }

  .app-header-margin{
    margin-top: 1.95rem;
  }

  .router {
    /*width: 100%;*/
    /*height: 100%;*/
    background-color: #FFF;
  }

  .cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 1;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
