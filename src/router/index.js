import Vue from 'vue'
import Router from 'vue-router'

const Shelf = () => import(/* webpackChunkName: "home" */'@/pages/shelf/index')
const Sort = () => import(/* webpackChunkName: "sort" */'@/pages/sort/index')
const Ranking = () => import(/* webpackChunkName: "sort" */'@/pages/ranking/index')
const Profile = () => import(/* webpackChunkName: "profile" */'@/pages/profile/profile')
const Search = () => import(/* webpackChunkName: "search" */'@/pages/search/index')
const BookDetail = () => import(/* webpackChunkName: "book" */'@/pages/book/detail')
const Reader = () => import(/* webpackChunkName: "reader" */'@/pages/reader/index')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Shelf',
    component: Shelf,
    meta: { showFootMenu: true, selectedMenu: 'Shelf', showHeader: true, headTitle: '书架', showGoBack: false }
  }, {
    path: '/shelf',
    name: 'Shelf',
    component: Shelf,
    meta: { showFootMenu: true, selectedMenu: 'Shelf', showHeader: true, headTitle: '书架', showGoBack: false }
  }, {
    path: '/sort',
    name: 'Sort',
    component: Sort,
    meta: { showFootMenu: true, selectedMenu: 'Sort', showHeader: true, headTitle: '分类', showGoBack: false }
  }, {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking,
    meta: { showFootMenu: true, selectedMenu: 'Ranking', showHeader: true, headTitle: '排行榜', showGoBack: false }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { showFootMenu: true, selectedMenu: 'Profile', showHeader: true, headTitle: '我的', showGoBack: false }
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/bookdetail/:id',
    name: 'bookdetail',
    component: BookDetail
  }, {
    path: '/reader/:id',
    name: 'reader',
    component: Reader
  }
]

export default new Router({
  routes,
  mode: 'hash'
})
