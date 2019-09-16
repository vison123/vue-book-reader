import fetch from '@/framework/fetch'
import urls from '@/api/urls'
import * as types from '../../mutations-types'

export default {
  // 获取书架内容
  getShelf ({ commit }, params) {
    return fetch(urls.shelf, 'get', params)
      .then(res => {
        if (res && res.code === '0' && res.result && res.result.data) {
          commit(types.GET_SHELF, res.result.data)
        }
      })
  },
  // 添加书籍到书架
  addBookToShelf ({ commit }, params) {
    return fetch(urls.shelf, 'post', params)
      .then(res => {
        if (res && res.code === '0') {
        }
      })
  },
  // 将书籍从书架移除
  removeBookFromShelf ({ commit }, params) {
    return fetch(urls.shelf, 'delete', params)
      .then(res => {
        if (res && res.code === '0') {
        }
      })
  },
  // 更新书架书籍的最新章节、阅读进度
  updateShelf ({ commit }, params) {
    return fetch(urls.shelf, 'update', params)
      .then(res => {
        if (res && res.code === '0') {
          commit(types.GET_SHELF, res.data)
        }
      })
  }
}
