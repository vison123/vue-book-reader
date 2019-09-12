import Mock from 'mockjs'
import api from './api/urls'
import book from './mock/json/book.json'
import titles from './mock/json/titles.json'

Mock.setup({
  timeout: '350-600'
})
Mock.mock(new RegExp(api.book, 'i'), 'get', book)
Mock.mock(new RegExp(api.titles, 'i'), 'get', titles)

export default Mock
