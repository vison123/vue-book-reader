<template>
  <div class="search-wrapper">
    <div>
      搜索
    </div>
    <div id="bookIframe"></div>
  </div>
</template>

<script>
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
