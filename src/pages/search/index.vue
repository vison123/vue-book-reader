<template>
  <div class="search-wrapper">
    <div>
      搜索
    </div>
  </div>
</template>

<script>
import superagent from 'superagent'
require('superagent-charset')(superagent)
var request = require('superagent')
require('superagent-cors-proxy')(request, null, window.parent)
// import cheerio from 'cheerio'
export default {
  data () {
    return {
      resource: 'https://www.zwdu.com',
      ruleSearchUrl: '/search.php?keyword=',
      keyword: '牧神记',
      searchResult: ''
    }
  },
  mounted () {
    this.searchBook(this.resource.concat(this.ruleSearchUrl).concat(this.keyword))
  },
  methods: {
    searchBook (url) {
      debugger
      superagent.get(url)
        .charset('gbk') // 该网站编码为gbk，用到了superagent-charset
        .end((err, res) => {
          debugger
          console.log(err.message)
          if (err) throw err
          if (res && res.text) {
            console.log(url)
            console.log(res)
            // var $ = cheerio.load(res.text)
          }
        })
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
