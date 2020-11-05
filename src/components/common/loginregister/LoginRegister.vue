<template>
  <div class="form-c">
    <div class="r_c" @click="itemclick_r">
      注册
    </div>
    <div class="l_c"  @click="itemclick_l">
      登录
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
  methods: {
    itemclick_r() {
      this.$router.push({path: '/register'})
    },
    itemclick_l() {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
.form-c {
  width: 100%;
}
.r_c {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 20px 20px 20px;
  height: 45px;
  background-color: #e6e6e6;
}
.l_c {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 20px 20px 20px;
  height: 45px;
  background-color: #bababa;
}
</style>