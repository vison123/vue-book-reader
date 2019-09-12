<template>
  <div class="search-wrapper">
    <div>
      搜索
    </div>
    <div id="bookIframe"></div>
  </div>
</template>

<script>
import request from 'superagent'
// import cheerio from 'cheerio'
// import jsonp from 'superagent-jsonp'
// require('superagent-charset')(request)
// require('superagent-cors-proxy')(request, null, window.parent)
export default {
  data () {
    return {
      resource: 'http://www.zwdu.com',
      ruleSearchUrl: '/search.php?keyword=',
      keyword: '牧神记',
      searchResult: ''
    }
  },
  mounted () {
    this.searchBook('http://www.zwdu.com/book/7567/')
  },
  methods: {
    searchBook (url) {
      debugger
      // var header = {
      //   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      //   'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
      //   'Host': 'www.dianping.com',
      //   'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
      //   'Cache-Control': 'max-age=0',
      //   'Connection': 'keep-alive'
      // }
      // request.get(url)
      //   // .use(jsonp)
      //   .set('header', header)
      //   .charset('gbk') // 该网站编码为gbk，用到了superagent-charset
      //   // .query({output: 'jsonp'})
      //   .end((err, res) => {
      //     debugger
      //     console.log(err.message)
      //     if (err) throw err
      //     if (res && res.text) {
      //       console.log(url)
      //       console.log(res)
      //       // var $ = cheerio.load(res.text)
      //     }
      //   })
      let bookIframe = document.getElementById('bookIframe')
      let iframe = document.createElement('iframe')
      var proxy = require('superagent-cors-proxy')(request, iframe)
      proxy.onReady(function () {
        // proxied superagent ready
        console.log('proxy onready')
        debugger
      })
      iframe.id = 'frame'
      iframe.name = 'polling'
      iframe.src = url
      iframe.setAttribute('style', 'display:none;')
      bookIframe.appendChild(iframe)
      iframe.onload = function () {
        debugger
        let idoc = iframe.contentDocument
        console.log(idoc)
        debugger
      }
    }
  }
}
</script>

<style scoped>
  .search-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

</style>
