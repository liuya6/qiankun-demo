import 'reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app
const render = (container?) => {
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
