import {apiRequest} from "./request";

export function getFindDetail(page) {
  return apiRequest({
    url: '/find/news/'+page,
  })
}