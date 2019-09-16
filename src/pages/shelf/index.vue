<template>
  <div class="shelf-wrapper">
    <mt-button type="primary" :plain="true" class="btn-add" @click="$router.push('/search')">
      <i class="iconfont icontianjia" style="color: #26a2ff"/>
    </mt-button>
    <!--<mt-button type="primary" style="margin-top: 10px" @click="$router.push('/search')">搜索</mt-button>-->
    <div class="book-list">
      <ul>
        <li v-for="(item, index) in bookList" :key="index">
          <router-link :to="{ path: '/bookdetail/' + item.id}">
            <div class="book-image">
              <img :src="item.images" alt="">
            </div>
            <div class="book-detail">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="author">
                <i></i>
                <span>{{item.author}}</span>
              </div>
              <div class="category-r">
                <span>{{''}}</span><span>{{item.serialize}}</span><span>{{item.wordcount}}万字</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      bookList: state => state.shelf.bookList
    })
  },
  mounted () {
    this.getShelf({})
  },
  methods: {
    ...mapActions([
      'getShelf'
    ])
  }
}
</script>

<style scoped lang="less" type="text/less">
  .shelf-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .btn-add {
    margin: 0.5rem;
    width: calc(100% - 0.5rem);
  }
  .book-list {
    padding: 15px;
    background-color: #fff;

    ul li {
      display: flex;
      padding-bottom: 10px;
      margin-bottom: 14px;
      border-bottom: 1px solid #ddd;

      a {
        display: flex;
      }

      .book-image {
        width: 77px;
        height: 102px;
        background: #CCCCCC;
        img {
          width: 100%;
        }
      }
      .book-detail {
        position: relative;
        flex: 1;
        padding: 0;
        margin-left: 20px;

        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 2;
          font-size: 14px;
          color: #969ba3;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .author {
          position: absolute;
          left: 0px;
          bottom: 5px;
          color: #969ba3;
          font-size: 13px;

          i {
            position: relative;
            bottom: -3px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url("../../assets/image/man.png") no-repeat;
          }

        }
        .category-r {
          position: absolute;
          right: 0;
          bottom: 5px;
          float: right;
          color: #969ba3;
          font-size: 10px;

          span {
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0 2px;
          }

          span:nth-child(2) {
            color: #ed424b;
          }

          span:nth-child(3) {
            color: #4284ed;
          }

        }
      }
    }
  }

</style>
