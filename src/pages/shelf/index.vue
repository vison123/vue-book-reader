<template>
  <div class="shelf-wrapper">
    <mt-button type="primary" plain="true" class="btn-add">
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
export default {
  data () {
    return {
      bookList: [{
        id: 10046,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29239,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }, {
        id: 10026,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29219,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }, {
        id: 10021,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29202,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }, {
        id: 10023,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29204,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }, {
        id: 10025,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29206,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }, {
        id: 10027,
        images: 'https://www.zwdu.com/files/article/image/10/10026/10026s.jpg',
        name: '逆天邪神',
        intro: '天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！',
        author: '火星引力',
        serialize: '连载',
        wordcount: '12'
      }, {
        id: 29208,
        images: 'https://www.zwdu.com/files/article/image/29/29209/29209s.jpg',
        name: '牧神记',
        intro: '大墟的祖训说，天黑，别出门。,　　大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……,　　做个春风中荡漾的反派吧！,　　瞎子对他说。,　　秦牧的反派之路，正在崛起！',
        author: '宅猪',
        serialize: '连载',
        wordcount: '134'
      }]
    }
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
        width: 80px;
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
