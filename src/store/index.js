import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import actions from './actions'
import shelf from './modules/shelf'
import reader from './modules/reader'
// import localEvent from './local'

Vue.use(Vuex)

let plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

const state = {
  bar: false,
  font_panel: false,
  font_icon: false,
  bg_color: 1,
  bg_night: false,
  fz_size: 18,
  curChapter: 1,
  windowHeight: '',
  list_panel: false,
  curBookDetailId: 1,
  curBookContentId: 1
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    shelf,
    reader
  },
  plugins
})
