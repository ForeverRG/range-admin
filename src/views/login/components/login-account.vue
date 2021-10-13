<template>
  <div class="login-account">
    <el-form
      ref="loginAccountFormRef"
      :model="account"
      status-icon
      :rules="accountFormRules"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="account.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

import { accountFormRules } from '../config/account-config'

export default defineComponent({
  setup() {
    let account = reactive({
      username: '',
      password: ''
    })

    let loginAccountFormRef = ref<InstanceType<typeof ElForm>>()

    // 登录
    function loginAction() {
      loginAccountFormRef.value?.validate((valid) => {
        if (valid) {
          alert('账号登录!')
        } else {
          console.log('账号登录错误!!')
          return false
        }
      })
    }

    // 重置
    function resetAction() {
      console.log('账号登录重置')
      loginAccountFormRef.value?.resetFields()
    }

    return { account, loginAccountFormRef, accountFormRules, loginAction, resetAction }
  }
})
</script>

<style scoped></style>
