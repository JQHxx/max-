<template>
<div id="post">
  <PostNavBar/>
  <Scroll class="wrapper">
    <AuthorInfo class="author-info">
      <Portrait slot="left" :portrait="Author.portrait"/>
      <NickName slot="center" :nickname="Author.nickname"/>
      <div slot="right">
        <div class="category">
          <img v-if="item.category.id==1" src="../../../assets/img/community/c4.png" alt="">
          <img v-else-if="item.category.id==2" src="../../../assets/img/community/c3.jpg" alt="">
          <img v-else-if="item.category.id==3" src="../../../assets/img/community/c1.jpg" alt="">
          <img v-else src="../../../assets/img/community/c2.jpg" slot="cimage" alt="">
          <div class="category-text">{{item.category.name}}</div>
        </div>
        <Date :date="item.modified_time_timestamp"/>
      </div>
    </AuthorInfo>
    <PostBody :PostBody="item.text" class="text"/>
    <BottomItem/>
  </Scroll>
  <CommentBox/>
</div>
</template>

<script>
import PostNavBar from "./postcomps/PostNavBar"
import PostBody from "./postcomps/PostBody"
import Scroll from "../../common/scroll/Scroll"
import CommentBox from "../commentbox/CommentBox"
import BottomItem from "../bottemitem/BottomItem"
import AuthorInfo from "../authorinfo/AuthorInfo"
import Portrait from "../authorinfo/Portrait"
import NickName from "../authorinfo/NickName"
import Date from "../authorinfo/Date"
import {AuthorinfoC} from "../../../utils/constructor"
import {getPostDetail} from "../../../network/community"

export default {
  name: "Post",
  components: {
    PostNavBar,
    Scroll,
    CommentBox,
    BottomItem,
    AuthorInfo,
    Portrait,
    NickName,
    Date,
    PostBody
  },
  data() {
    return {
      id: Number,
      item: Object,
      Author: Object
    }
  },
  created() {
    this.id = this.$route.query.id
    getPostDetail(this.id).then(res=>{
      this.item = res.results[0]
      this.Author = new AuthorinfoC(this.item)
    })
  },
}
</script>

<style scoped>
#post {
  z-index: 999;
  background: #ffffff;
  height: 100%;
  overflow: hidden;
}

.author-info {
  padding: 0 10px 0 10px;
}

.category {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.category img{
  width: 12px;
  height: 12px;
}
</style>