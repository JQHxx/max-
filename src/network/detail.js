import {apiRequest} from "./request";

export function getFindDetail(page) {
  return apiRequest({
    url: '/detail/'+page,
  })
}