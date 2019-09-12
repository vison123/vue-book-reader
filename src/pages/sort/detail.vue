<template>
  <!--分类详情-->
  <div class="borderBox datalist-div">
    <NovelBook :books="books" />
  </div>
</template>

<script>
import {showToast, get} from '@/utils/index'
import {getSortDetailUrl} from '@/config'
import NovelBook from '@/components/novel-book/index.vue'
export default{
  data () {
    return {
      nomore: false,
      page: 1,
      books: [],
      gender: '', // 男生:male 女生:female 出版:press
      major: '' // 主分类
    }
  },
  components: {
    NovelBook
  },
  mounted () {
    let query = this.$mp.query
    this.gender = query.gender || 'male'
    this.major = query.major || '玄幻'
    // uni.setNavigationBarTitle({
    //   title: this.major
    // })
    this.getData()
  },
  methods: {
    jumpPage (url) {
      if (url && typeof (url) === 'string') {
        // uni.navigateTo({
        //   url: url,
        //   animationType: 'slide-in-bottom'
        // })
      }
    },
    initData () {
      this.nomore = false
      this.page = 1
      this.books = []
    },
    getData () {
      if (this.nomore) {
        showToast('没有更多')
        return
      };
      get(getSortDetailUrl, {
        gender: this.gender,
        type: 'hot',
        major: this.major,
        minor: '',
        start: this.page,
        limit: 30
      })
        .then((res) => {
          if (res.ok) {
            let books = res.books
            if (books && books.length > 0) {
              books.forEach((item) => {
                item.cover = decodeURIComponent(item.cover).replace('/agent/', '')
              })
              this.books = [...this.books, ...books]
            } else {
              this.nomore = true
            };
            this.page++
          } else {
            showToast('请求出错')
          }
        })
    }
  },
  onPullDownRefresh () {
    // uni.stopPullDownRefresh()
    // uni.hideNavigationBarLoading()
    this.initData()
    this.getData()
  },
  onReachBottom () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
  .datalist-div{
    padding: 30px;
    ul.box-div{
      li.list{
        height: 300px;
        background: #fff;
        padding: 20px;
        border-radius: 16px;
        .img-div{
          image{
            width: 156px;
            height: 220px;
            margin-right: 24px;
            border-radius: 12px;
          }
        }
        .right-div{
          p.name{
            font-size: 32px;
          }
          .desc{
            font-size: 24px;
            color: #919095;
            margin-top: 20px;
          }
        }
        .bottom-div{
          justify-content: space-between;
          font-size: 24px;
          color: #919095;
          margin-top: 16px;
          .r-r{
            span{
              background: #f0eff4;
              line-height: 36px;
              padding: 0 12px;
              border-radius: 18px;
              color: #98979c;
            }
          }
        }
      }
      li.list+li.list{
        margin-top: 20px;
      }
    }
  }
</style>
