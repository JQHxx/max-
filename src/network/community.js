import {apiRequest} from "./request";

export function getPostList(page) {
  return apiRequest({
    url: '/community/post',
    params: {
      page: page
    }
  })
}

export function getPostDetail(id) {
  return apiRequest({
    url: "/community/post",
    params: {
      id: id
    }
  })
}

export function getCategoryList() {
  return apiRequest({
    url: "/community/category"
  })
}