import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}

export function findItemsRequest(config) {
  const instance = new axios.create({
    baseURL: 'http://192.168.3.60:8000/api',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}