<template>
<div class="w-full h-screen bs-bg">
  <!-- <BLoading v-if="!isOk"></BLoading> -->
  <dv-loading  v-if="!isOk">Loading...</dv-loading>
  <router-view v-if="isOk"></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive, onMounted} from 'vue'
import { useSickStore } from './stores'
// import BLoading from '@/components/core/loading.vue'

const sickStore = useSickStore()
let isOk = ref(false)
onMounted(async () => {
  // await sickStore.getMongoTrendList()
  isOk.value = true
})
</script>

<style scoped lang='less'>
.bs-bg {
  // background-color: #020308;
  background-color: linear-gradient(#4e22b7, #3292ff);
}
</style>