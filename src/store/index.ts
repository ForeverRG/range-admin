import { createStore } from 'vuex'
import { loginModule } from './login/login'
import { IRootState } from './type'

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
