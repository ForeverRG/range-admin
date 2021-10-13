import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
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
  ElCheckbox
]

// 注册element组件
export function registerElement(app: App): void {
  for (let index = 0; index < components.length; index++) {
    const element = components[index]
    app.component(element.name, element)
  }
}
