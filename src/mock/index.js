import Mock from 'mockjs'
import api from '../api/urls'
import book from './json/book.json'
import titles from './json/titles.json'
import shelf from './json/shelf.json'

Mock.setup({
  timeout: '350-600'
})
Mock.mock(new RegExp(api.book, 'i'), 'get', book)
Mock.mock(new RegExp(api.titles, 'i'), 'get', titles)
Mock.mock(new RegExp(api.shelf, 'i'), 'get', shelf)

export default Mock
