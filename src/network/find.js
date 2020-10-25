import {apiRequest} from "./request";

export function getFindHeadlines() {
  return apiRequest({
    url: '/find/news'
  })
}

export function getFindNews(page) {
  return apiRequest({
    url: '/find/news',
    params: {
      page: page
    }
  })
}