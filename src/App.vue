<template>
<div class="screen-container">
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
.screen-container {
  width: 100vw;
  height: 100vh;
  background-color: #020309;
  // color: #fff;
}
</style>