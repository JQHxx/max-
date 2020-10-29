<template>
<div class="content">
  <GameContainer>
    <GameItem v-for="(item, key) in ContestGame" :key=key :game_id="item.id" :game_status="item.game_status" :is_end="item.is_end">
      <img slot="r_team_sign" :src="item.r_team.logo" alt="">
      <img slot="b_team_sign" :src="item.b_team.logo" alt="">
      <div slot="r_team">{{item.r_team.name.slice(4)}}</div>
      <div slot="b_team">{{item.b_team.name.slice(4)}}</div>
      <div slot="contests_name">{{item.contests_name.slice(4)}}</div>
    </GameItem>
  </GameContainer>
  <BottomItem/>
</div>
</template>


<script>
import GameItem from "../gamecontent/GameItem"
import GameContainer from "../gamecontent/GameContainer"
import BottomItem from "../../../components/content/bottemitem/BottemItem"

export default {
  name: "ContestContent",

  props: {
    ContestGame: {
      type: Array,
      default() {
        return []
      }
    }
  },

  components: {
    GameItem,
    GameContainer,
    BottomItem
  }
}
</script>

<style scoped>
.content {
  width: 100%;
}
</style>