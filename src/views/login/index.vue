
<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field required clearable label="手机号" placeholder="请输入手机号" />
      <van-field required type="password" label="验证码" placeholder="请输入验证码" />
      <div class="login-btn">
        <van-button type="info">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  // 给组件起名字
  name: 'LoginIndex'
}
</script>

<style lang="less" scoped>
.login {
  .van-nav-bar {
    .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
      line-height: 60px;
    }
  }
  .login-btn {
    padding: 20px;
    .van-button {
      width: 100%;
      .van-button__text {
        font-size: 16px;
      }
    }
  }
}
</style>
