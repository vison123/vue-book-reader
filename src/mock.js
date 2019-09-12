import Mock from 'mockjs'
import api from './api/urls'
import homeGoodsData from './mock/json/homeGoodsData.json'
import book from './mock/json/book.json'
import titles from './mock/json/titles.json'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(new RegExp(api.home.goods, 'i'), 'post', homeGoodsData)
Mock.mock(new RegExp(api.home.book, 'i'), 'get', book)
Mock.mock(new RegExp(api.home.titles, 'i'), 'get', titles)

export default Mock
