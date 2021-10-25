import { createApp } from 'vue'
import App from './App.vue'
import { AppConfig } from './config'
import { loadAllPlugins } from './plugins'

import './assets/styles/index.less'
import './assets/styles/antd.less'

const app: ReturnType<typeof createApp> = createApp(App)

/** 将全局静态配置注入到应用中,可以通过 this.a读取  */
app.config.globalProperties = AppConfig
/** 加载所有 Plugins */
await loadAllPlugins(app)

app.mount('#app')
