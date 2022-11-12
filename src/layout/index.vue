<template>
    <dv-full-screen-container>
        <Header></Header>
        <Content></Content>
        <dv-loading>Loading...</dv-loading>
    </dv-full-screen-container>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Header from './header/index.vue'
import Content from './content/index.vue'
</script>
    
<style scoped lang='less'>

</style>