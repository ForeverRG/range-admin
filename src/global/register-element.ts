import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElAside,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem
]

// 注册element组件
export function registerElement(app: App): void {
  for (let index = 0; index < components.length; index++) {
    const element = components[index]
    app.component(element.name, element)
  }
}
