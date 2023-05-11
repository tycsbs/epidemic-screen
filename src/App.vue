<template>
<div class="w-full h-screen bs-bg" :class="{'bg-gray': showGray}">
  <dv-loading  v-if="!isOk" class="text-white text-xs">模型加载中...</dv-loading>
  <router-view v-if="isOk"></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref, onMounted } from 'vue'
import { useSickStore } from './stores'

const sickStore = useSickStore()
let isOk = ref(false)
let showGray = ref(false)

// 计算时间在5.12号的时候显示灰色
const checkShowGray = (force = false) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  if ((month === 5 && day === 12) || force) {
    return true
  }
  return false
}

onMounted(async () => {
  // 检测是否显示灰色
  showGray.value = checkShowGray()

  await sickStore.getMongoTrendList()
  isOk.value = true
})
</script>

<style scoped lang='less'>
.bs-bg {
  background: linear-gradient(#4e22b7, #5783ff);
}
.bg-gray {
  filter: grayscale(1);
}
</style>