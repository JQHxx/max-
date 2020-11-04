<template>
<div class="container">
  <Scroll class="wrapper" ref="scroll"
            :probeType="3" :pullUpLoad="true"
            :listLengthStatus="listLengthStatus"
            @scrollPostion="isShowBackTop"
            @pullingUps="getCategorySubPList(categoryId)">
    <PostList>
      <PostItem v-for="(item, key) in CategoryPostList.list" :key=key :PostId="item.id">
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
</div>
</template>

<script>
import PostItem from "../postlist/PostItem"
import PostList from "../postlist/PostList"
import Scroll from "../../common/scroll/Scroll"
import AuthorInfo from "../authorinfo/AuthorInfo"
import Portrait from "../authorinfo/Portrait"
import NickName from "../authorinfo/NickName"
import Date from "../authorinfo/Date"
import BottomItem from "../bottemitem/BottomItem"
import BackTop from "../../common/backtop/Backtop"
import { getCategorySubPList } from '../../../network/community'

export default {
  name: "CategorySubp",
  components: {
    PostList,
    PostItem,
    AuthorInfo,
    Portrait,
    NickName,
    Date,
    BottomItem,
    BackTop,
    Scroll
  },
  data() {
    return {
      CategoryPostList: {page: 0, list: []},
      listLengthStatus: false,
      categoryId: 0,
      backTopState: false
    }
  },
  created() {
    this.categoryId = this.$route.query.id
    this.getCategorySubPList(this.categoryId)
  },
  methods: {
    async getCategorySubPList(id) {
      const page = this.CategoryPostList.page+1
      await getCategorySubPList(id, page)
      .then(res=>{
        this.CategoryPostList.list.push(...res.results)
        this.listLengthStatus=!this.listLengthStatus
        this.CategoryPostList.page += 1})
      .catch(err=>{console.log(err)})
      this.$refs.scroll.finishPullUpHandler()
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
</style>