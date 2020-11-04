<template>
<div class="topic">
  <CategoryList :CategoryList="CategoryList"/>
</div>
</template>

<script>
import CategoryList from "../../../components/common/categorylist/CategoryList"
import {getCategoryList} from "../../../network/community"

export default {
  name: "CommunityTopic",
  components: {
    CategoryList
  },
  created() {
    this.getCategoryList()
  },
  data() {
    return {
      CategoryList: []
    }
  },
  methods: {
    async getCategoryList() {
      await getCategoryList()
      .then(res=>{this.CategoryList.push(...res.results)})
      .catch(err=>{console.log(err)})
    },
  }
}
</script>

<style scoped>
.topic {
  width: 100%;
  flex-shrink: 0;
  height: 100%;
}
</style>