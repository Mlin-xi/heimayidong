
<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号" />
      <van-field v-model="user.code" required type="password" label="验证码" placeholder="请输入验证码" />
      <div class="login-btn">
        <van-button :loading="isLoading" type="info" @click="onLogin">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  // 给组件起名字
  name: 'LoginIndex',
  data () {
    //   控制登录按钮的加载状态 (默认是false)

    return {
      isLoading: false,
      user: {
        mobile: '13366304205',
        code: '246810'
      }
    }
  },
  methods: {
    async onLogin () {
      this.isLoading = true
      //   try {
      //     const { data } = await request({
      //       method: "POST",
      //       url: "/app/v1_0/authorizations",
      //       data: this.data
      //     });
      //   } catch (err) {
      //     if (err.resqonse && err.resqonse.status === 400) {
      //       this.$toast.fail("手机号或验证码错误");
      //     }
      try {
        const { data } = await login(this.user)
        // console.log(data);
        // 成功的提示
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }
      //   无论登录成功与否都停止loading
      this.isLoading = false
    }
  }
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
