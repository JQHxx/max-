import axios from 'axios'

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