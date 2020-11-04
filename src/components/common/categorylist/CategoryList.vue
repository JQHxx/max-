<template>
<div id="container">
  <div class="list">
    <div class="item" v-for="(item, index) in parents_list"
        :key=index :class="{actived: isactive(index)}"
        @click="itemclick(item, index)">
      {{item.name}}
    </div>
  </div>
  <div class="content">
    <div class="c_item" v-for="(item, index) in children_list"
        :key=index
        @click="c_itemclick(item.id)">
      <img :src="item.category_icon" alt="">
      <div class="info">
        <div class="name">
          {{item.name.slice(4)}}
        </div>
        <div class="describe">
          {{item.describe}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    CategoryList: Array
  },
  data() {
    return {
      now_index: 0,
      category_id: Number,
      parents_list: [],
      children_list: []
    }
  },
  created() {
  },
  watch: {
    CategoryList: {
      handler() {
        this.parents_list = this.CategoryList.filter(item => item.is_parents)
        this.children_list = this.CategoryList.filter(item => !item.is_parents)
        this.category_id = this.parents_list[0].id
      }
    },
    category_id: {
      handler() {
        this.children_list = this.CategoryList.filter(item =>item.parents_category==this.category_id)
      }
    }
  },
  methods: {
    isactive(index) {
      return this.now_index===index
    },
    itemclick(item, index) {
      this.now_index = index
      this.category_id = item.id
    },
    c_itemclick(id) {
      this.$router.push({path: '/category', query: {id}})
    }
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  display: flex;
}

.list {
  width: 30%;
  height: 100%;
  background-color: #e6e6e6;
}

.item {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #bfbfbf;
  border-left-style: solid;
  border-left-width: 3px;
  border-left-color: #e6e6e6;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.actived {
  background-color: white;
  border-left-style: solid;
  border-left-width: 3px;
  border-left-color: black;
}

.content {
  width: 70%;
  height: 100%;
}

.c_item {
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  width: auto;
  height: 45px;
  margin: 10px 10px 10px 10px;
}
.c_item img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}
.name {
  font-size: 15px;
}
.describe {
  font-size: 10px;
  color: #bababa;
}
</style>