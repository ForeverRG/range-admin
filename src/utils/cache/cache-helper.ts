/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CacheType } from './enum'

// TODO: 待拓展
export class CacheHelper {
  cacheType: CacheType

  // 默认指定localstorage缓存类型
  constructor(type: CacheType = CacheType.LoacalStorage) {
    this.cacheType = type
  }

  // 设置缓存
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 获取缓存
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除缓存
  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}
