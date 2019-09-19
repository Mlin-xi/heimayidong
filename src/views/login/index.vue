
<template>
  <div class="login">
    <van-nav-bar title="登录" />

    <!-- ValidationProvider 是验证插件提供的一个全局组件
            rules="select" 配置验证规则,当文本框发生改变的时候自动调用select校验规则
            v-slot="{errors}" 获取验证相关的结果参数
            errors[0]用来获取验证失败的错误消息

    -->
    <!--练习  ValidationProvider只能验证一个字段
        <ValidationProvider rules="required|email" v-slot="{ errors }">
      <input v-model="user.mobile" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>-->
    <!-- ValidationObserver 组件会渲染成一个form表单
        可以通过ref 调用这个组件的方法:validate来进行验证
    -->
    <van-cell-group>
      <ValidationObserver tag="form" ref="loginForm">
        <!-- 把需要验证的字段使用 ValidationProvider包裹起来
                在其上面配置对应的验证规则等信息
        -->
        <ValidationProvider tag="div" rules="required|phone" name="手机号" v-slot="{ errors }">
          <!-- van-field提供了提示错误信息 :error-message="errors[0]" -->
          <van-field
            v-model="user.mobile"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            :error-message="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider tag="div" rules="required" name="验证码" v-slot="{ errors }">
          <van-field
            v-model="user.code"
            required
            type="password"
            label="验证码"
            placeholder="请输入验证码"
            :error-message="errors[0]"
          />
        </ValidationProvider>
      </ValidationObserver>
    </van-cell-group>

    <div class="login-btn">
      <van-button :loading="isLoading" type="info" @click="onLogin">登录</van-button>
    </div>
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
        //   表单验证
        const isValid = await this.$refs.loginForm.validate()
        if (!isValid) {
          // 如果验证不通过直接停止登录
          return
        }
        // 提交表单验证通过
        this.isLoading = true
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
