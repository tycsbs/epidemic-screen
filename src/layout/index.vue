<template>
    <!-- <dv-full-screen-container class="font-mono"> -->
        <div class="w-full h-full flex flex-col p-5">
            <div class="w-full mb-2">
                <HeaderComp></HeaderComp>
            </div>
            <div class="w-full flex-auto shadow-md flex flex-col gap-2 mb-2">
                <ContentComp></ContentComp>
            </div>
        </div>
        <!-- <dv-loading>Loading...</dv-loading> -->
    <!-- </dv-full-screen-container> -->
</template>
    
<script setup lang='ts'>
import HeaderComp from './header/index.vue'
import ContentComp from './content/index.vue'

</script>
    
<style scoped lang='less'>
</style>