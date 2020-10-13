<template>
<div class="find-news">
  <News>
    <NewsItems v-for="(item, index) in FindNews" :key=index>
      <img slot="image" :src="item.cover_url" alt="">
      <div slot="title">{{item.title}}</div>
      <div slot="views">{{item.views}}</div>
      <div slot="date">{{item.released_timestamp | timestampToTime}}</div>
    </NewsItems>
  </News>
</div>
</template>

<script>
  import NewsItems from "../../../components/content/news/NewsItems"
  import News from "../../../components/content/news/News"

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
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000，且10位无秒数
        let r_date = new Date(timestamp * 1000);
        let ry = r_date.getFullYear();
        // 月份从0开始
        let rm = r_date.getMonth()+1;
        let rd = r_date.getDate();
        let rh = r_date.getHours();
        let rmi = r_date.getMinutes();

        let n_date = new Date();
        let ny = n_date.getFullYear();
        let nm = n_date.getMonth();
        let nd = n_date.getDate();
        let nh = n_date.getHours();
        let nmi = n_date.getMinutes();

        if (ny-ry>0) {return ny-ry+"年前"}
        else if (nm-rm>0) {return nm-rm+"个月前"}
        else if (nd-rd>0) {return nd-rd+"天前"}
        else if (nmi-rmi>0) {return nmi-rmi+"分钟前"}
        else {return "刚刚"}
      }
    },

    components: {
      NewsItems,
      News
    }
  }
</script>

<style>
.find-news {
  position: absolute;
  top: 250px;
  left: 0px;
  right: 0px;
  display: list-item;
}
</style>