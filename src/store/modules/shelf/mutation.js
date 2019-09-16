import * as types from '../../mutations-types'

export default {
  [types.GET_SHELF] (state, payload) {
    state.bookList = payload
  }
}
