import axios from 'axios'

// 创建 Axios 实例
const instance = axios.create({
  baseURL: 'https://webapi.sporttery.cn/', // 设置基础 URL
  timeout: 5000, // 设置请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可在此处添加请求前的处理逻辑，例如添加请求头部信息等
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 可在此处添加对响应数据的处理逻辑，例如解析响应数据等
    return response.data
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error)
  }
)

// 封装 GET 请求方法
export const get = (url, params) => {
  return instance.get(url, { params })
}

// 封装 POST 请求方法
export const post = (url, data) => {
  return instance.post(url, data)
}

// 封装 PUT 请求方法
export const put = (url, data) => {
  return instance.put(url, data)
}

// 封装 DELETE 请求方法
export const del = (url) => {
  return instance.delete(url)
}
