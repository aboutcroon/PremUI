<template>
  <div class="main-layout">
    <a-layout style="height: 100%;">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background:#fff; padding: 0px;">
          <a-button @click="collapsed = !collapsed">11</a-button>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false)
    }
  }
})
</script>

<style lang="less" scoped>
.main-layout {
  height: 100%;
}
</style>
