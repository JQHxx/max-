<template>
<div class="item" @click="itemclick">
  <div class="group">
    <div class="left-team-cover">
      <slot name="left-team-cover"></slot>
    </div>
    <div class="left-team-name">
      <slot name="left-team-name"></slot>
    </div>
  </div>
  <div class="group">
    <div class="score">
      <slot name="score"></slot>
    </div>
    <div class="date">
      <slot name="date"></slot>
    </div>
    <div class="type">
      <slot name="type"></slot>
    </div>
  </div>
  <div class="group">
    <div class="right-team-cover">
      <slot name="right-team-cover"></slot>
    </div>
    <div class="right-team-name">
      <slot name="right-team-name"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NewsItems",
  props: {
    NewsItem: {}
  },
  methods: {
    itemclick () {}
  }
}
</script>

<style scoped>
.item {
  display: flex;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #bfbfbfbf;
  height: 84px;
  width: 100%;
}

.group {
  height: 100%;
  flex: 1;
}
</style>