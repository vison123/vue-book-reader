<template>
  <div id="reader" class="reader">
    <top-nav></top-nav>
    <div class="read-container" :bg="bg_color" :night="bg_night" ref="fz_size">
      <swiper :options="swiperOption" v-show="!loading">
        <swiper-slide v-for="(lines,i) in content" :key="i">
          <div class="reader-page" :style="{height: swiperOption.height + 'px'}">
            <div class="top-area">
              <span>{{title}}</span>
              <span>{{`${i + 1}/${content.length}`}}</span>
            </div>
            <div class="center-area" :style="{height: swiperOption.height - 60 + 'px'}">
              <p
                v-for="(line, key) in lines"
                :key="key"
                :class="{'read-line': true, 'first-line': line.indexOf('  ') === 0}"
              >
                {{line}}
              </p>
            </div>
            <div class="bottom-area">
              <span>
                <i class="iconfont icondianliang-"></i>
                {{`${new Date().getHours()}:${new Date().getMinutes()}`}}
              </span>
              <span>{{battery}}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="top-nav-pannel-bk font-container" v-show="font_panel"></div>
    <font-nav></font-nav>
    <bottom-nav></bottom-nav>
    <cover :class="{hide:!list_panel}"></cover>
    <list-panel :class="{show: list_panel}" :bookId="$route.params.id"></list-panel>
    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapActions, mapState} from 'vuex'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import localEvent from '../../store/local'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import FontNav from './FontNav'
import ListPanel from './ListPanel'
import Cover from './Cover'
import Loading from './Loading'
import 'swiper/dist/css/swiper.css'
import {getBattery} from '../../framework/mUtils'

export default {
  components: {
    TopNav,
    BottomNav,
    FontNav,
    ListPanel,
    Cover,
    Loading,
    swiper,
    swiperSlide
  },
  data () {
    return {
      bar: false,
      timer: null,
      title: '',
      content: [],
      loading: false,
      showList: false,
      booksReadInfo: {},
      battery: '0%',
      swiperOption: {
        width: window.innerWidth,
        height: window.innerHeight,
        on: {
          click: this.clickBar
        }
      }
    }
  },
  computed: {
    ...mapState([
      'font_panel',
      'bg_color',
      'fz_size',
      'bg_night',
      'curChapter',
      'windowHeight',
      'list_panel'
    ])
  },
  watch: {
    // 监听fz_size的值更改背景色
    fz_size (val, oldVal) {
      this.$refs.fz_size.style.fontSize = val + 'px'
      localEvent.StorageSetter('fz_size', val)
    },
    // 监听当前章节的改变，保存到本地并获取数据
    curChapter (val, oldVal) {
      localEvent.StorageSetter('cur_chapter', val)
      this.saveBooksInfo()
      this.getData(this.$route.params.id, val)
    }
  },
  created () {
    // 判断本地是否存储了阅读器文字大小
    if (localEvent.StorageGetter('fz_size')) {
      this.$store.state.fz_size = localEvent.StorageGetter('fz_size')
    }
    // 判断本地是否存储了阅读器主题色
    if (localEvent.StorageGetter('bg_color')) {
      this.$store.state.bg_color = localEvent.StorageGetter('bg_color')
    }

    // 加载时从localStorage中回去所有数据阅读进度
    const localBookReaderInfo = localEvent.StorageGetter('bookreaderinfo')
    let id = this.$route.params.id

    // 当前书籍以前读过并有阅读进度
    if (localBookReaderInfo && localBookReaderInfo[id]) {
      this.booksReadInfo = localEvent.StorageGetter('bookreaderinfo')
      this.getData(id, this.booksReadInfo[id].chapter)
      this.$store.dispatch('curChapter', this.booksReadInfo[id].chapter)
    } else {
      // 当前书籍没有读过但是localStorage保存了其他书籍进度
      if (localBookReaderInfo) {
        this.booksReadInfo = localBookReaderInfo
        this.getData(id, 1)
        this.$store.dispatch('curChapter', 1)
      } else {
        // 第一次进入阅读
        this.booksReadInfo[id] = {
          book: id,
          chapter: 1
        }
        this.getData(id, 1)
        this.$store.dispatch('curChapter', 1)
      }
    }
  },
  mounted () {
    // 因为要获取dom元素，所以不能放到created中
    this.$refs.fz_size.style.fontSize = this.fz_size + 'px'
    console.log('每行容纳字数：' + Math.floor(window.innerWidth / this.fz_size))
    console.log('每页容纳行数：' + Math.floor((window.innerHeight - 60) / (this.fz_size * 1.5 + 20)))
    getBattery().then(res => {
      this.battery = res
    })
  },
  methods: {
    ...mapActions([
      'getBookContentByChapterId'
    ]),
    // 切换上下工具栏，如果字体面板显示点击也关闭
    clickBar () {
      this.$store.dispatch('toggleBar')
      this.$store.state.font_panel = false
    },
    startScroll (target, speed) {
      let times = null
      times = setInterval(function () {
        if (speed > 0) {
          if (document.body.scrollTop <= target) {
            document.body.scrollTop += speed
          }
          if (
            document.body.scrollTop > target ||
              document.body.scrollTop + window.screen.height >=
              document.body.scrollHeight
          ) {
            clearInterval(times)
          }
        } else {
          if (document.body.scrollTop >= target) {
            document.body.scrollTop += speed
          }
          if (
            document.body.scrollTop < target ||
              document.body.scrollTop <= 0
          ) {
            clearInterval(times)
          }
        }
      }, 1)
    },
    getData (id, chapter) {
      this.loading = true
      this.getBookContentByChapterId({
        book: 1,
        id: 2
      }).then(data => {
        this.title = data.title
        this.content = this.splitPage(data.content)
        this.loading = false // 获取完毕后隐藏动画
      })
      this.$store.state.windowHeight = window.screen.height
    },
    splitPage (data) {
      // 分割字符串
      let lineArr = []
      data.split('-').forEach(paragraph => {
        let str = '  '.concat(paragraph)
        // 每行容纳字数
        let n = Math.floor((window.innerWidth - 20) / this.fz_size)
        for (let i = 0, l = str.length; i < l / n; i++) {
          let a = str.slice(n * i, n * (i + 1))
          lineArr = lineArr.concat(a)
        }
      })
      // 每页容纳行数
      let lineNum = Math.floor((window.innerHeight - 60) / (this.fz_size * 1.5 + 10))
      return this.chunk(lineArr, lineNum)
    },
    chunk (array, size) {
      // 获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
      const length = array.length
      // 判断不是数组，或者size没有设置，size小于1，就返回空数组
      if (!length || !size || size < 1) {
        return []
      }
      // 核心部分
      let index = 0 // 用来表示切割元素的范围start
      let resIndex = 0 // 用来递增表示输出数组的下标

      // 根据length和size算出输出数组的长度，并且创建它。
      let result = new Array(Math.ceil(length / size))
      // 进行循环
      while (index < length) {
        // 循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, (index += size))
      }
      // 输出新数组
      return result
    },
    prevChapter () {
      this.$store.dispatch('prevChapter')
      this.saveBooksInfo()
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 300)
    },
    // 更换章节时保存阅读进度到localStorage
    nextChapter () {
      this.$store.dispatch('nextChapter', 50)
      this.saveBooksInfo()
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 300)
    },
    saveBooksInfo () {
      // 可用localStorage保存每本小说阅读进度
      let id = this.$route.params.id
      this.booksReadInfo[id] = {
        book: id,
        chapter: this.curChapter
      }
      localEvent.StorageSetter('bookreaderinfo', this.booksReadInfo)
    },
    page (e) {
      if (e.keyCode === 39) {
        console.log(this.nextChapter)
        this.nextChapter()
      } else if (e.keyCode === 37) {
        this.prevChapter()
      }
    }
  }
}
</script>

<style lang="less" type="text/less">
  .reader {
    width: 100%;
    height: 100%;
    .read-container {
      width: 100%;
      min-height: 100%;
      font-size: 16px;
      color: #555;
      line-height: 31px;
      .reader-page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
      }
      .read-line {
        padding: 5px 10px;
        text-align: justify;
        letter-spacing: 0;
        line-height: 1.5;
      }

      .first-line {
        text-indent: 35px;
      }
      .top-area {
        span {
          color: #AAA;
        }
        height: 30px;
        margin: 0 10px;
        font-size: 12px;
        display: flex;
        align-items: start;
        justify-content: space-between;
      }
      .bottom-area {
        i,span {
          color: #AAA;
          font-size: 12px
        }
        height: 30px;
        margin: 0 10px;
        color: #EEE;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      .btn-bar {
        z-index: 80;
        width: 80%;
        margin: 20px auto 0;
        max-width: 800px;
        .btn-tab {
          padding-left: 0;
          height: 34px;
          line-height: 34px;
          background-color: #000;
          border-radius: 8px;
          border: 1px solid #858382;
          font-size: 14px;
          opacity: 0.9;
          li {
            list-style-type: none;
            display: inline-block;
            width: 49%;
            text-align: center;
            color: #fff;
            &:nth-child(1) {
              border-right: 1px solid #858382;
            }
          }
        }
      }
    }
  }

  .bac(@color) {
    background-color: @color;
  }

  .read-container[bg='1'] {
    .bac(#e9dfc7);
    h4 {
      .bac(#e9dfc7);
    }
  }

  .read-container[bg='2'] {
    .bac(#e7eee5);
    h4 {
      .bac(#e7eee5);
    }
  }

  .read-container[bg='3'] {
    .bac(#a4a4a4);
    h4 {
      .bac(#a4a4a4);
    }
  }

  .read-container[bg='4'] {
    .bac(#cdefcd);
    h4 {
      .bac(#cdefcd);
    }
  }

  .read-container[bg='5'] {
    .bac(#283548);
    h4 {
      .bac(#283548);
    }
  }

  .read-container[bg='6'] {
    .bac(#0f1410);
    h4 {
      .bac(#0f1410);
    }
  }

  .read-container[night='true'] {
    .bac(#0f1410);
    h4 {
      .bac(#0f1410);
    }
  }

  .page-up {
    position: fixed;
    width: 100%;
    height: 35%;
    top: 0;
    color: rgba(0, 0, 0, 0.1);
    z-index: 5;
  }

  .click-mask {
    position: fixed;
    width: 100%;
    height: 30%;
    top: 35%;
    color: rgba(0, 0, 0, 0.1);
  }

  .page-down {
    position: fixed;
    width: 100%;
    height: 35%;
    bottom: 65px;
    color: rgba(0, 0, 0, 0.1);
    z-index: 5;
  }

  .top-nav-pannel-bk {
    position: fixed;
    bottom: 70px;
    height: 135px;
    background: #000;
    width: 100%;
    color: #fff;
    opacity: 0.9;
    z-index: 10003;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
