<template>
<div class="find-news">
  <News>
    <NewsItems v-for="(item, index) in FindNews" :key=index :NewsItemId="item.id">
      <img slot="image" :src="item.cover_url" alt="">
      <div slot="title">{{item.title}}</div>
      <div slot="views">{{item.views}}</div>
      <div slot="date">{{item.released_timestamp | timestampToTime}}</div>
    </NewsItems>
  </News>
  <BottomItem/>
</div>
</template>

<script>
import NewsItems from "../../../components/content/news/NewsItems"
import News from "../../../components/content/news/News"
import BottomItem from "../../../components/content/bottemitem/BottemItem"

export default {
  name: "FindNews",
  props: {
    FindNews: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    NewsItems,
    News,
    BottomItem
  }
}
</script>

<style>
/* 如果你真的想实现绝对定位还能撑开父元素，只能通过JavaScript实现：获取到绝对定位的子元素的高度，再设置给父元素。
或者，用 float: left / float:right 还有 margin 来调整位置，子元素再通过父元素设置的overflow:hidden来撑开父元素。*/
.find-news {
  width: 100%;
}
</style>