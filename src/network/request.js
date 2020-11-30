import axios from 'axios'

export function apiRequest(config) {
  const instance = new axios.create({
    baseURL: 'http://192.168.3.60:8000/api',
    timeout: 10000
  })

  // 请求前拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  
  // 响应前拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}