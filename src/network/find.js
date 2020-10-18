import {findItemsRequest} from "./request";

export function getFindHeadlines() {
  return findItemsRequest({
    url: '/find/news'
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