import axios, { AxiosInstance } from 'axios'
import { IRangeInterceptors, IRangeRequestConfig } from './type'

class RangeRequest {
  instance: AxiosInstance
  interceptors?: IRangeInterceptors

  constructor(config: IRangeRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 私有实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorErr
    )

    // 私有实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorErr
    )

    // 公有实例请求拦截器
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err
    )

    // 公有实例响应拦截器
    this.instance.interceptors.response.use(
      (res) => res,
      (err) => err
    )
  }

  // 网络请求
  request<T>(config: IRangeRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个响应拦截器
          if (config.interceptors?.requestInterceptor) {
            config.interceptors.requestInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  // get请求
  get<T>(config: IRangeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  // post请求
  post<T>(config: IRangeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  // delete请求
  delete<T>(config: IRangeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  // path请求
  patch<T>(config: IRangeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export { RangeRequest }
