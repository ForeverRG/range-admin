import router from '@/router'
import {
  accountLoginRequest,
  getUserInfoByIdRequest,
  getUserMenusByRoleIdRequest
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { cacheHelper } from '@/utils'
import { mapMenusToRoutes } from '@/utils/menu/map-menu'
import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState, IUserMenu } from './type'

export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,

  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },

  getters: {},

  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    setUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 根据用户菜单动态加载路由
      const routes = mapMenusToRoutes(userMenus as IUserMenu[])
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },

  actions: {
    // 登录
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.发送登录请求
      const { id, token } = (await accountLoginRequest(payload)).data
      commit('setToken', token)
      cacheHelper.setCache('token', token)

      // 2.根据id获取用户信息
      const userInfo = (await getUserInfoByIdRequest(id)).data
      commit('setUserInfo', userInfo)
      cacheHelper.setCache('userInfo', userInfo)

      // 3.根据角色id获取用户菜单
      const userMenus = (await getUserMenusByRoleIdRequest(userInfo.role.id)).data
      commit('setUserMenus', userMenus)

      cacheHelper.setCache('userMenus', userMenus)

      // 5.跳转路由
      router.push('/main')
    },

    // 加载本地浏览器缓存数据至vuex，防止刷新页面vuex数据丢失
    loadLoginDataFromLocalStorage({ commit }) {
      const token = cacheHelper.getCache('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = cacheHelper.getCache('userInfo')
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }
      const userMenus = cacheHelper.getCache('userMenus')
      if (userMenus) {
        commit('setUserMenus', userMenus)
      }
    }
  }
}
