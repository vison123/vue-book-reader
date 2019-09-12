import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../framework/env'

const Shelf = () => import(/* webpackChunkName: "home" */'@/pages/shelf/index')
const Sort = () => import(/* webpackChunkName: "sort" */'@/pages/sort/index')
const Cart = () => import(/* webpackChunkName: "cart" */'@/pages/cart/cart')
const Profile = () => import(/* webpackChunkName: "profile" */'@/pages/profile/profile')
const Search = () => import(/* webpackChunkName: "search" */'@/pages/search/index')
const BookDetail = () => import(/* webpackChunkName: "book" */'@/components/BookDetail')
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
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { showFootMenu: true, selectedMenu: 'Cart', showHeader: true, headTitle: '购物车', showGoBack: false }
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
  mode: routerMode
})
