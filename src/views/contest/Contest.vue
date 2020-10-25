<template>
  <div id="contest">
    <Navbar>
      <div slot="center" class="logo">全部赛事</div>
    </Navbar>
    <Scroll class="wrapper" ref="scroll"
            :probeType="3" :pullUpLoad="true"
            :content="ContestGame.list"
            @pullingUps="getContestsGame">
      <ContestContent :ContestGame="ContestGame.list"/>
    </Scroll>
  </div>
</template>>

<script>
  import Navbar from "../../components/common/navbar/Navbar"
  import Scroll from "../../components/common/scroll/Scroll"
  import ContestContent from "./contestcamps/ContestContent"
  import {getContestsGame} from "../../network/contests"

  export default {
    name: "Data",
    data() {
      return {
        ContestGame: {page: 0, list: []},
        backTopState: false
      }
    },

    components: {
      Navbar,
      Scroll,
      ContestContent
    },

    created() {
      this.getContestsGame()
    },

    methods: {
      async getContestsGame() {
        const page = this.ContestGame.page+1
        await getContestsGame(page)
        .then(res=>{
          console.log(res.results)
          this.ContestGame.list.push(...res.results)
          this.ContestGame.page += 1})
        .catch(err=>{console.log(err)})
        this.$refs.scroll.finishPullUpHandler()
      }
    }
  }
</script>

<style scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 45px;
  bottom: 45px;
  right: 0px;
  left: 0px;
}

.logo {
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}
</style>