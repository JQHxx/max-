<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style>
  #tabbar {
    display: flex;
    background-color:white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-style: solid;
    border-width: 1px;
    border-color: #bababa;
  }
</style>