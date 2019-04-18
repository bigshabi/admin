<template>
    <div class="login-bg">
        <div class="login">
            <div class="message">x-admin2.0-管理登录</div>
            <div id="darkbannerwrap"></div>
            <div>
                <el-input v-model="username" placeholder="用户名"></el-input>
                <hr class="hr15">
                <el-input v-model="password" placeholder="密码" type="password"></el-input>
                <hr class="hr15">
                <el-button>登录</el-button>
                <hr class="hr20" >
            </div>
        </div>
    </div>
</template>

<style>
.login-bg{
    background:url(../../assets/images/bg.png) no-repeat center;
    background-size: cover;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
}
.login{
    margin: 120px auto 0 auto;
    min-height: 420px;
    max-width: 420px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 4px;
    box-sizing: border-box;
}
.login .message {
    margin: 10px 0 0 -58px;
    padding: 18px 10px 18px 60px;
    background: #189F92;
    color: #fff;
    font-size: 14px;
}
.login #darkbannerwrap {
    background: url(../../assets/images/aiwrap.png);
    width: 18px;
    height: 10px;
    margin: 0 0 20px -58px;
}
.login input[type=text],
.login input[type=password]{
    height: 50px;
}
.login input[type=text]:focus,
.login input[type=password]:focus{
    border: 1px solid #27A9E3;
}
.login hr {
    background: #fff url() 0 0 no-repeat;
}
.login hr.hr15 {
    height: 15px;
    border: none;
    margin: 0px;
}
.login hr.hr20 {
    border: none;
}

.login button {
  background-color: #189F92;
  width: 100%;
  line-height: 24px;
  color: #ffffff;
  font-size: 14px;
}
</style>

<script>

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
