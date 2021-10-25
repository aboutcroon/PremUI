import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export async function loadAllPlugins (app: ReturnType<typeof createApp>) {
  const modules = import.meta.glob('./**.ts')
  for (const path in modules) {
    const mod = await modules[path]()
    if (typeof mod.default === 'function') {
      if (path !== './index.ts') mod.default(app)
    }
  }
}
