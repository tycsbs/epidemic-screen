<template>
    <div class="w-full h-full container">
        <div class="flex flex-col">
            <StarSky></StarSky>
        </div>
        <div class="mask">
            <BChartTrendBar></BChartTrendBar>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import StarSky from '@/components/core/starSky.vue'
import BChartTrendBar from '@/components/basic/BChartTrendBar.vue'

</script>
    
<style scoped lang='less'>
.container {
    position: relative;
}
.mask {
    position: absolute;
    z-index: 2;
    top: 25px;
    left: 0;
    right: 0;
    bottom: 25px;
    // width: calc(100% - 50px);
    // height: calc(100% - 50px);
    pointer-events: none;
    box-sizing: border-box;
    // 毛玻璃效果
    // backdrop-filter: blur(-1px);
}
</style>