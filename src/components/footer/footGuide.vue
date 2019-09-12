<template>
  <footer id='foot_guide'>
    <section @click="gotoAddress({path: '/shelf'})" class="guide_item">
      <img v-if="$route.meta.selectedMenu !== 'Shelf'" class="icon_style" src="../../assets/svg/home.svg"/>
      <img v-else class="icon_style" src="../../assets/svg/home_fill.svg"/>
      <span>书架</span>
    </section>
    <section @click="gotoAddress({path: `/sort`})" class="guide_item">
      <img v-if="$route.meta.selectedMenu !== 'Sort'" class="icon_style" src="../../assets/svg/message.svg"/>
      <img v-else class="icon_style" src="../../assets/svg/message_fill.svg"/>
      <span>分类</span>
    </section>
    <section @click="gotoAddress('/cart')" class="guide_item">
      <img v-if="$route.meta.selectedMenu !== 'Cart'" class="icon_style" src="../../assets/svg/cart.svg"/>
      <img v-else class="icon_style" src="../../assets/svg/cart_fill.svg"/>
      <span>购物车</span>
    </section>
    <section @click="gotoAddress('/profile')" class="guide_item">
      <img v-if="$route.meta.selectedMenu !== 'Profile'" class="icon_style" src="../../assets/svg/my.svg"/>
      <img v-else class="icon_style" src="../../assets/svg/my_fill.svg"/>
      <span>我的</span>
    </section>
  </footer>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {}
  },
  created () {

  },
  mounted () {

  },
  computed: {
    ...mapState([
      'geohash'
    ])
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}

</script>

<style lang="less" scoped>
    @import '../../assets/style/mixin.less';

    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        .wh(100%, 1.95rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }

    .guide_item {
      flex: 1;
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      .icon_style {
        .wh(1rem, 1rem);
        margin-top: .3rem;
        fill: #ccc;
      }
      span {
        .sc(.45rem, #666);
      }
    }

</style>
