<template>
<div class="w-full h-screen bs-bg">
  <BLoading v-if="!isOk"></BLoading>
  <router-view v-if="isOk "></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive, onMounted} from 'vue'
import { useSickStore } from './stores'
import BLoading from '@/components/core/loading.vue'

const sickStore = useSickStore()
let isOk = ref(true)
// onMounted(async () => {
//   await sickStore.getList()
//   await sickStore.getSickRankList()
//   isOk.value = true
// })
</script>

<style scoped lang='less'>
.bs-bg {
  background-color: #020308;
}
</style>