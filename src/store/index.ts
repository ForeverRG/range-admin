import { createStore, Store, useStore } from 'vuex'
import { loginModule } from './login/login'
import { IRootState, IStoreType } from './type'

export const store = createStore<IRootState>({
  state() {
    return {
      name: 'range',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore(): void {
  store.dispatch('loginModule/loadLoginDataFromLocalStorage')
}

// 使用带有模块类型的store
export function userRangeStore(): Store<IStoreType> {
  return useStore()
}
