<template>
<div class="login-c">
  <LoginRegisterNavbar/>
  <div class="form-container">
    <form class="form-login" method="post">
      <div class="group-up">
        <input type="text" name="username" class="input-text" placeholder="账户" autofocus="" maxlength="32" required>
      </div>
      <div class="group-down">
        <input type="password" name="password" class="input-text" placeholder="密码" maxlength="256" required>
      </div>
      <div class="btn">
        <button type="submit" class="login-btn">登录</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import LoginRegisterNavbar from "./LoginRegisterNavbar"

export default {
  name: "Login",
  components: {
    LoginRegisterNavbar
  }
}
</script>

<style scoped>
.login-c {
  position: relative;
  background: black;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/img/common/max.jpg");
  background-size: 100% 300px;
  background-repeat: no-repeat;
}

.form-container {
  width: 100%;
  position: relative;
}
.form-login {
  position: absolute;
  width: 100%;
}
.group-up {
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.group-down {
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-text {
  height: 45px;
  width: 80%;
  padding-left: 15px;
}
input[type="text"]:focus {outline: none;}
input[type="password"]:focus {outline: none;}

.btn {
  margin-top: 15px;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-btn {
  width: 85%;
  height: 45px;
  color: white;
  background-color: #3b3b3b;
}
button[type="submit"]:focus {outline: none;}
</style>