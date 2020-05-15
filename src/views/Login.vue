<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="login_content">
      <div class="login_Title">登录/注册</div>
      <div class="login_Box">
        <form method="post" action="" onsubmit="return submitTest()">
          <div id="change_margin_1">
            <input class="user" type="text" name="user" placeholder="请输入用户名" onblur="" onfocus="" value="请输入手机号码">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Login',
  components: {
    HelloWorld
  }
}

</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: #A31929;
  font-family: Source Han Sans CN;

  .login_content {

    .login_Title {
      margin-left: 93px;
      height: 200px;
      line-height: 200px;
      font-size: 54px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .login_Box {
      display: flex;
      height: 861px;
      width: 100%;
      justify-content: center;
      align-items: center;

      .user {
        width: 566px;
        height: 90px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.2;
        border-radius: 10px;
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

}

</style>
