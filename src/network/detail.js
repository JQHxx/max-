import {findItemsRequest} from "./request";

export function getFindDetail(page) {
  return findItemsRequest({
    url: '/detail/'+page,
  })
}
