<template>
  <header class='head-wrapper'>
    <div class="head-left" v-if="goBack" @click="$router.go(-1)">
      <img class="left-arrow"
           src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4="/>
    </div>
    <span class="head-center">{{headTitle}}</span>
    <slot name="option"></slot>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
  },
  props: ['headTitle', 'goBack', 'rightText'],
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
  @import '../../assets/style/mixin';

  .head-wrapper {
    background-image: linear-gradient(90deg, #0af, #0085ff);
    z-index: 100;
    .wh(100%, 1.95rem);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
  }

  .head-left {
    display: flex;
    align-items: center;
    justify-content: center;
    .wh(2rem, 100%)
  }

  .left-arrow {
    width: 0.55rem;
  }

  .head-center {
    position: relative;
    top: 0;
    left: 50%;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    transform: translateX(-50%);
    .sc(0.8rem, #fff);
    height: 1.95rem;
    line-height: 1.95rem;
  }
</style>
