// import storage from './storage'
import axios from 'axios'
import { baseUrl } from './env'

let fetcher = axios.create({
  method: 'post',
  baseURL: baseUrl,
  transformRequest: [function (data) {
    return JSON.stringify(data)
  }],
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  body: {
    'accessToken': ''
  }
})

// 请求头注入 用户信息等
fetcher.interceptors.request.use(
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

fetcher.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.toString().startsWith('Network Error')) {
      console.log('网络异常，请检查当前互联网状态')
    } else if (error.toString().startsWith('Error: Request failed')) {
      console.log('接口异常')
    } else {
      console.log(error.toString())
    }
  }
)

export default function fetch (dispatch, apiUrl, arg, showLoading = true, content = '') {
  return fetcher.post(apiUrl, arg)
    .then(data => {
      if (data) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}
