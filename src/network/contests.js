import {apiRequest} from "./request";

export function getContestsGame(page) {
  return apiRequest({
    url: '/contests/game',
    params: {
      page: page
    }
  })
}