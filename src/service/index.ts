import { RangeRequest } from './request'

// 导出axios实例
export const rangeRequest = new RangeRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!.Authorization = `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorErr: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorErr: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
