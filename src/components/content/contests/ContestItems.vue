<template>
<div class="item">
  <div class="item-body" @click="itemclick">
    <div class="group">
      <div class="team-cover">
        <slot name="r_team_sign"></slot>
      </div>
      <div class="team-name">
        <slot name="r_team"></slot>
      </div>
    </div>
    <div class="group" v-if="is_end">
      <div class="contests-status" v-if="game_status===0">
        <div>
          <slot name="r_team"></slot>
          <span>获胜</span>
        </div>
      </div>
      <div class="contests-status" v-else-if="game_status===1">
        <div>
          <slot name="b_team"></slot>
          <span>获胜</span>
        </div>
      </div>
      <div class="contests-special" v-else>
        <div>平局</div>
      </div>
      <div class="contests-name">
        <slot name="contests_name"></slot>
      </div>
    </div>
    <div class="group" v-else>
      <div class="ongoing">
        <div class="ongoing-text">进行中</div>
      </div>
      <div class="contests-name">
        <slot name="contests_name"></slot>
      </div>
    </div>
    <div class="group">
      <div class="team-cover">
        <slot name="b_team_sign"></slot>
      </div>
      <div class="team-name">
        <slot name="b_team"></slot>
      </div>
    </div>
  </div>
  <div class="commentary" v-show="commentary">
    赛况
  </div>
</div>
</template>

<script>
export default {
  name: "NewsItems",

  props: {
    game_status: {
      type: Number,
      default() {return 2}
    },
    is_end: {
      type: Boolean,
      default() {return false}
    }
  },

  data() {
    return {
      commentary: false
    }
  },

  methods: {
    itemclick() {
      this.commentary = !this.commentary
    }
  }
}
</script>

<style scoped>
.item-body {
  display: flex;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #bfbfbfbf;
  height: 84px;
  width: 100%;
}

.commentary {
  width: 100%;
  background-color: #bfbfbfbf;
}

.group {
  height: 100%;
  flex: 1;
}

.team-cover {
  height: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-cover img {
  height: 50px;
  width: 50px;
}

.team-name {
  height: 25%;
  width: 100%;
  font-size: 10px;
  text-align: center;
}

.contests-status {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  font-size: 10px;
  color: #bfbfbfbf;
  text-align: center;
}

.contests-special {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
  font-size: 20px;
  color: #bfbfbfbf;
}

.contests-name {
  height: 30%;
  width: 100%;
  font-size: 10px;
  text-align: center;
  color: #babababa;
}

.ongoing {
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ongoing-text {
  height: 20px;
  width: 50%;
  border-radius: 15px;
  background-color: green;
  color: white;
  text-align: center;
  font-size: 15px;
}
</style>