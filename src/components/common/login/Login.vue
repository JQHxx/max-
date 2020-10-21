<template>
<div class="container">
  <form class="form-login" action="/login/" method="post">
    <div class="group">
      <input type="text" name="username" class="input-text" placeholder="账户" autofocus="" maxlength="32" required>
    </div>
    <div class="group">
      <input type="password" name="password" class="input-text" placeholder="密码" maxlength="256" required>
    </div>
    <div class="btn">
      <button href="/register/" class="register-btn">注册</button>
      <button type="submit" class="login-btn">登录</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.container {
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(../../../assets/img/user/user-background.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.form-login {
  width: 100%;
  height: 50%;
}

.group {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16%;
  width: 100%;
}

.input-text {
  width: 80%;
  height: 50%;
  display: block;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: #bfbfbfbf;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-shadow: 0 0 6% 3% #babababa; 
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16%;
  width: 100%;
}

.login-btn {
  width: 40%;
  height: 50%;
  background: rgb(79, 120, 255);
  border: 1px solid rgb(132, 79, 255);
  border-radius: 4%;
  box-shadow: 0 0 6% 3% #babababa;
}

.register-btn {
  width: 40%;
  height: 50%;
  background: #bfbfbfbf;
  border: 1px solid #ced4da;
  border-radius: 4%;
  box-shadow: 0 0 2px 1px #babababa;
}
</style>