<template>
<div class="content">
  <ContestContainer>
    <ContestItems>
      <!--  -->
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
    ContestContent: {
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