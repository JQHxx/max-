<template>
  <div class="body">
    <Scroll class="wrapper" ref="scroll"
            :probeType="3" :pullUpLoad="true"
            :listLengthStatus="listLengthStatus"
            @scrollPostion="isShowBackTop"
            @pullingUps="getPostList">
      <PostList>
        <PostItem v-for="(item, key) in PostList.list" :key=key :PostId="item.id">
          <AuthorInfo slot="author">
            <Portrait slot="left" :portrait="item.author.portrait"/>
            <NickName slot="center" :nickname="item.author.nickname"/>
            <Date slot="right" :date="item.modified_time_timestamp"/>
          </AuthorInfo>
          <div slot="title">{{item.title}}</div>
          <div slot="abstract">{{item.text.length>54 ? item.text.slice(0, 55)+"..." : item.text}}</div>          
          <div slot="likes">{{item.likes}}</div>
          <img :src="item.category.category_icon" slot="cimage" alt="">
          <div slot="category">{{item.category.name.slice(4)}}</div>
        </PostItem>
      </PostList>
      <BottomItem/>
    </Scroll>
    <BackTop class="backtop" @itemclick="handleBackTop" v-show="backTopState"/>
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
import BackTop from "../../../components/common/backtop/Backtop"
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
    BottomItem,
    BackTop
  },
  data() {
    return {
      PostList: {page: 0, list:[]},
      listLengthStatus: false,
      backTopState: false
    }
  },
  created() {
    this.getPostList()
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
    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    isShowBackTop(position) {
      this.backTopState = Math.abs(position.y) > this.$store.state.screenHeight
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
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

.backtop {
  position: fixed;
  right: 8px;
  bottom: 55px;
  width: 45px;
  height: 45px;
}
</style>