<template>
<div class="comment">
  <div class="atach-box-left">
    <input type="text" class="comment-box" placeholder="回复主题帖">
  </div>
  <div class="attach-box-right">
    <div class="comment-submit">
      <img src="../../../assets/img/common/submit.svg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CommentBox"
}
</script>

<style scoped>
.comment {
  border-top-style: solid;
  border-width: 1px;
  border-color: #bababa;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 45px;
  background-color: #fff;
  position: absolute;
  display: flex;
}

.atach-box-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  background-color: #fff;
}

.comment-box {
  width: 90%;
  height: 25px;
  border: 2px solid #ced4da;
  border-radius: 8px;
}

input[type="text"]:focus {border-radius: 8px;border:2px solid blue; outline: none;}
input[type="password"]:focus,
textarea:focus { border: 1px solid #bfbfbfbf; background: #ccc; }

.attach-box-right {
  width: 20%;
  height: 100%;
  background-color: blue;
}

.comment-submit {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment-submit img {
  width: 60%;
  height: 60%;
}
</style>