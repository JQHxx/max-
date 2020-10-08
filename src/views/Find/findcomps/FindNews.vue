<template>
  <News>
    <NewsItems v-for="(item, index) in FindNews" :key=index>
      <img slot="image" :src="item.cover_url" alt="">
      <div slot="title">{{item.title}}</div>
      <div slot="date">{{item.released_timestamp | timestampToTime}}</div>
    </NewsItems>
  </News>
</template>

<script>
  import NewsItems from "../../../components/common/news/NewsItems"
  import News from "../../../components/common/news/News"

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

    filters: {
      timestampToTime: function (timestamp) {
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let date = new Date(timestamp * 1000);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D+h+m+s;
      }
    },

    components: {
      NewsItems,
      News
    }
  }
</script>

<style>
</style>