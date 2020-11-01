<template>
  <div class="body" ref="body">
    <Scroll class="wrapper" ref="scroll"
            :probeType="3" :pullUpLoad="true"
            :listLengthStatus="listLengthStatus"
            @pullingUps="getPostList">
      <PostList>
        <PostItem v-for="(item, key) in PostList.list" :key=key :PostId="item.id">
          <AuthorInfo slot="author">
            <Portrait slot="left" :portrait="item.author.portrait"/>
            <NickName slot="center" :nickname="item.author.nickname"/>
            <Date slot="right" :date="item.modified_time_timestamp"/>
          </AuthorInfo>
          <div slot="title">{{item.title}}</div>
          <div slot="abstract">{{item.text.length>56 ? item.text.slice(0, 57)+"..." : item.text}}</div>          
          <div slot="likes">{{item.likes}}</div>
          <img v-if="item.category.id==1" src="../../../assets/img/community/c4.png" slot="cimage" alt="">
          <img v-else-if="item.category.id==2" src="../../../assets/img/community/c3.jpg" slot="cimage" alt="">
          <img v-else-if="item.category.id==3" src="../../../assets/img/community/c1.jpg" slot="cimage" alt="">
          <img v-else src="../../../assets/img/community/c2.jpg" slot="cimage" alt="">
          <div slot="category">{{item.category.name}}</div>
        </PostItem>
      </PostList>
      <BottomItem/>
    </Scroll>
  </div>
</template>

<script>
import PostItem from "../../../components/content/postlist/PostItem"
import PostList from "../../../components/content/postlist/PostList"
import Scroll from "../../../components/common/scroll/Scroll"
import AuthorInfo from "../../../components/content/authorinfo/AuthorInfo"
import Portrait from "../../../components/content/authorinfo/Portrait"
import NickName from "../../../components/content/authorinfo/NickName"
import Date from "../../../components/content/authorinfo/Date"
import BottomItem from "../../../components/content/bottemitem/BottomItem"
import {getPostList} from "../../../network/community"

export default {
  name: "CommunityTopic",
  components: {
    PostList,
    PostItem,
    Scroll,
    AuthorInfo,
    Portrait,
    NickName,
    Date,
    BottomItem
  },
  data() {
    return {
      PostList: {page: 0, list:[]},
      listLengthStatus: false
    }
  },
  created() {
    this.getPostList()
  },
  mounted() {
    this.bodyHeight()
  },
  methods: {
    async getPostList() {
      const page = this.PostList.page+1
      await getPostList(page)
      .then(res=>{
        this.PostList.list.push(...res.results)
        this.listLengthStatus=!this.listLengthStatus
        this.PostList.page += 1})
      .catch(err=>{console.log(err)})
      this.$refs.scroll.finishPullUpHandler()
    },
    bodyHeight() {
      this.$refs.body.style.height = `${this.$store.state.screenHeight-45*2}px`
    }
  }
}
</script>
this.$store.state.
<style scoped>
.body {
  width: 100%;
  background-color: #fff;
  flex-shrink: 0;
  position: relative;
}

.wrapper {
  position: absolute;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>