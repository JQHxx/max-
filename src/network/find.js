import {request, findItemsRequest} from "./request";

export function getFindMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getFindNews(page) {
  return findItemsRequest({
    url: '/find/news',
    params: {
      page: page
    }
  })
}