import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

// 注册element组件
export function registerElement(app: App): void {
  for (let index = 0; index < components.length; index++) {
    const element = components[index]
    app.component(element.name, element)
  }
}
