import {apiRequest} from "./request";

export function getContestsGame(page) {
  return apiRequest({
    url: '/contests/game',
    params: {
      page: page
    }
  })
}

export function getCommentary(game_id) {
  return apiRequest({
    url: '/contests/game/commentary',
    params: {
      game: game_id
    }
  })
}