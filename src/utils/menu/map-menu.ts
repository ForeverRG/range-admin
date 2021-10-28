import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { IUserMenu } from '@/store/login/type'
import { RouteRecordRaw } from 'vue-router'

// 将登录角色对应的菜单权限映射为路由
export function mapMenusToRoutes(userMenus: IUserMenu[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.获取所有菜单对应路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.获取用户菜单所有的url,一级菜单url不对应路由，只获取二级菜单url,并找到对应url的路由
  const _recurseGetRoute = (menus: IUserMenu[]) =>
    menus.forEach((menu) => {
      if (menu.type === 2) {
        // 找到对应url的路由
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children!)
      }
    })

  // 递归获取符合条件的路由
  _recurseGetRoute(userMenus)

  return routes
}

// 根据路径匹配到菜单项
export function pathMapToMenu(
  userMenus: IUserMenu[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): IUserMenu | undefined {
  for (const menu of userMenus) {
    if (menu.url === currentPath) {
      breadcrumbs?.push({ name: menu.name, path: menu.url })
      return menu
    } else {
      // 存在二级菜单
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    }
  }
}

// 根据路径匹配面包屑
export function pathMapToBreadcrumb(userMenus: IUserMenu[], currentPath: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
