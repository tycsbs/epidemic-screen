<template>
<div class="w-full h-screen bs-bg">
  <router-view></router-view>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import { useSickStore } from './stores'

const sickStore = useSickStore()
sickStore.getList()
sickStore.getSickRankList()
</script>

<style scoped lang='less'>
.bs-bg {
  background-color: #020308;
}
</style>