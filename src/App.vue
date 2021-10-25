<template>
  <div style="height: 100%;">
    <a-config-provider :locale="locale">
      <MainLayout />
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import locale from 'ant-design-vue/es/locale/zh_CN'
import MainLayout from './layouts/MainLayout.vue'
export default defineComponent({
  components: {
    MainLayout
  },
  setup () {
    return {
      locale: locale
    }
  }
})
</script>

<style>

</style>
