import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求和响应拦截器接口
export interface IRangeInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorErr: (requestErr: any) => any
  responseInterceptor?: (response: T) => T
  responseInterceptorErr?: (responseErr: any) => any
}

// 请求配置类
export interface IRangeRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IRangeInterceptors<T>
}
