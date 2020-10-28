import {apiRequest} from "./request";

export function getFindDetail(id) {
  return apiRequest({
    url: '/find/news',
    params: {
      id: id
    }
  })
}