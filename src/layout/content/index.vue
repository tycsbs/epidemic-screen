<template>
    <div class="flex p-5 flex-1">
        <!-- left -->
        <div class="w-1/4 flex flex-col gap-3 box-border">
            <div class="w-full flex h-80">
                <ProviceTable></ProviceTable>
            </div>
            <div class="w-full flex h-80">
                <BChartPie></BChartPie>
            </div>
            <div class="w-full flex flex-auto">
                <BChartLine></BChartLine>
            </div>
        </div>
        <!-- center  -->
        <div class="flex flex-col h-auto flex-1">
            <div class="w-full flex flex-1">
                <BChartMap class="w-full h-full"></BChartMap>
            </div>
            <div class="w-full flex h-80">
                <BSummary></BSummary>
            </div>
        </div>

        <!-- right -->
        <div class="w-1/4">

        </div>
    </div>
    <!-- <dv-loading>Loading...</dv-loading> -->
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import ProviceTable from '@/components/basic/BProviceTable.vue'
import BChartMap from '@/components/basic/BChartMap.vue';
import BChartPie from '@/components/basic/BChartPie.vue';
import BChartLine from '@/components/basic/BChartLine.vue';
import BSummary from '@/components/basic/BSummary.vue';

</script>
    
<style scoped lang='less'>
.bs-container {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    .bs-content {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        &-header {
            height: 60px;
        }
        &-wrapper {
            flex: 1;
            // background-color: aqua;
            overflow: hidden;
        }
    }
}
</style>