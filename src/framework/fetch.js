// import storage from './storage'
import axios from 'axios'
import { Toast } from 'mint-ui'

axios.defaults.withCredentials = true
// 请求头注入 用户信息等
axios.interceptors.request.use(
  config => {
    // const userInfo = storage.get('user')
    // const loginType = storage.get('loginType')
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      // accessToken: userInfo && userInfo.accessToken,
      // loginType: loginType && loginType
    }
    // if (config.data && userInfo && userInfo.accessToken) {
    //   config.data.accessToken = userInfo.accessToken
    // } else if (!config.data && userInfo && userInfo.accessToken) {
    //   config.data = {
    //     accessToken: userInfo.accessToken
    //   }
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.toString().startsWith('Network Error')) {
      console.log('网络异常，请检查当前互联网状态')
    } else if (error.toString().startsWith('Error: Request failed')) {
      console.log('接口异常')
    } else if (error.toString() === 'Cancel') {
      // 取消请求不做处理
    } else {
      console.log(error.toString())
    }
  }
)

export default function fetch (url, method, params) {
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.BASE_URL + url,
      method: method,
      data: params
    })
      .then(response => {
        let res = response.data
        // 异常请求 status !== 200, 统一弹窗提醒，业务代码无需处理
        if (res.status && res.status !== 200) {
          if (res.message) {
            Toast(res.message)
          }
        } else {
          resolve(res)
        }
      })
      .catch(error => {
        reject(error)
        console.log(error)
      })
  })
}
