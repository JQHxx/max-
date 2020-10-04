import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  })
  return instance(config)
}