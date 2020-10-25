<template>
<div class="content">
  <ContestContainer>
    <ContestItems v-for="(item, key) in ContestGame" :key=key :game_status="item.game_status" :is_end="item.is_end">
      <img slot="r_team_sign" :src="item.r_team_sign" alt="">
      <img slot="b_team_sign" :src="item.b_team_sign" alt="">
      <div slot="r_team">{{item.r_team_name.slice(4)}}</div>
      <div slot="b_team">{{item.b_team_name.slice(4)}}</div>
      <div slot="contests_name">{{item.contests_name.slice(5)}}</div>
    </ContestItems>
    <BottomItem/>
  </ContestContainer>
</div>
</template>

<script>
import BottomItem from "../../../components/content/bottemitem/BottemItem"
import ContestItems from "../../../components/content/contests/ContestItems"
import ContestContainer from "../../../components/content/contests/ContestContainer"

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
    ContestItems,
    ContestContainer,
    BottomItem
  }
}
</script>

<style scoped>
.content {
  width: 100%;
}
</style>