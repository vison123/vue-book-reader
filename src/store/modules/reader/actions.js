import fetch from '@/framework/fetch'
import urls from '@/api/urls'
// import * as types from '../../mutations-types'

export default {
  // 获取当前书籍所有章节
  getAllChapters ({ commit }, params) {
    return fetch(urls.titles, 'get', params)
      .then(res => {
        if (res && res.code === '0' && res.result && res.result.data) {
          return res.result.data
        }
      })
  },
  // 获取书籍当前章节内容
  getBookContentByChapterId ({ commit }, params) {
    return fetch(urls.book, 'get', params)
      .then(res => {
        if (res && res.code === '0' && res.result && res.result.data) {
          return res.result.data
        }
      })
  }
}
