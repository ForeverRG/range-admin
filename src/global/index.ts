import { App } from 'vue'
import { registerElement } from './register-element'

export function registerComponents(app: App): void {
  app.use(registerElement)
}
