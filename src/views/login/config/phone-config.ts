export const phoneFormRules = {
  num: [
    {
      required: true,
      message: '手机号为必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11,}$/,
      message: '手机号位数不正确~',
      trigger: 'blur'
    }
  ],
  vCode: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'blur'
    }
  ]
}
