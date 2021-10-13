<template>
  <div class="login-phone">
    <el-form
      ref="loginPhoneFormRef"
      :model="phone"
      status-icon
      :rules="phoneFormRules"
      label-width="80px"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <div class="get-vCode">
          <el-input v-model="phone.vCode" autocomplete="off"></el-input>
          <el-button type="primary" class="btn-get-vCode">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

import { phoneFormRules } from '../config/phone-config'

export default defineComponent({
  setup() {
    let phone = reactive({
      num: '',
      vCode: ''
    })

    const loginPhoneFormRef = ref<InstanceType<typeof ElForm>>()

    // 登录
    function loginAction() {
      loginPhoneFormRef.value?.validate((valid) => {
        if (valid) {
          alert('手机登录!')
        } else {
          console.log('手机登录错误!!')
          return false
        }
      })
    }

    // 重置
    function resetAction() {
      console.log('手机登录重置')
      loginPhoneFormRef.value?.resetFields()
    }

    return {
      phone,
      loginPhoneFormRef,
      phoneFormRules,
      loginAction,
      resetAction
    }
  }
})
</script>

<style lang="less" scoped>
.get-vCode {
  display: flex;

  .btn-get-vCode {
    margin-left: 5px;
  }
}
</style>
