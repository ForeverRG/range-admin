<template>
  <div class="login-pannel">
    <div class="login-title">用 户 登 录</div>

    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>

      <div class="remember-password">
        <el-checkbox v-model="isRemember" label="记住密码" size="medium"></el-checkbox>
        <el-link type="primary">忘记密码？</el-link>
      </div>

      <div class="btn-pannel">
        <el-button type="primary" class="btn-login" icon="el-icon-thumb" @click="handleLoginClick"
          >登录</el-button
        >
        <el-button class="btn-reset" icon="el-icon-refresh" @click="handleResetClick"
          >重置</el-button
        >
      </div>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },

  setup() {
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const isRemember = ref(true)

    // 重置
    function handleResetClick() {
      // 账号登录
      loginAccountRef.value?.resetAction()
      // 手机登录
      loginPhoneRef.value?.resetAction()
    }

    // 登录
    function handleLoginClick() {
      // 账号登录
      loginAccountRef.value?.loginAction()
      // 手机登录
      loginPhoneRef.value?.loginAction()
    }

    return { loginAccountRef, loginPhoneRef, handleLoginClick, handleResetClick, isRemember }
  }
})
</script>

<style lang="less" scoped>
.login-pannel {
  width: 400px;
  margin-bottom: 100px;

  .login-title {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .remember-password {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .btn-pannel {
    display: flex;

    .btn-login,
    .btn-reset {
      flex: 1;
    }
  }
}
</style>
