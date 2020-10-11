import {request, findItemsRequest} from "./request";

export function getFindMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getFindNews() {
  return findItemsRequest({
    url: '/find/news',
    params: {
      page: 1
    }
  })
}