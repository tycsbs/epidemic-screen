<template>
    <div class="container w-full h-full">
        <div class="box1">
            <ProviceTable></ProviceTable>
        </div>
        <div class="box2">
            <BChartPie></BChartPie>
        </div>
        <div class="box3">
            <BChartPie></BChartPie>
        </div>
        <div class="box4">
            <BChartMap></BChartMap>
        </div>
        <div class="box5">
            <!-- <BChartLine></BChartLine> -->
            <BSummary></BSummary>
        </div>
        <div class="box6">
            <div class="box6-1"></div>
            <div class="box6-2"></div>
        </div>
        <div class="box7"></div>
        <div class="box8"></div>
    </div>
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
.container {  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 12px 12px;
  grid-auto-flow: row;
}

.box1 { grid-area: 1 / 1 / 3 / 2; }

.box2 { grid-area: 3 / 1 / 5 / 2; }

.box3 { grid-area: 5 / 1 / 6 / 2; }

.box4 { grid-area: 1 / 2 / 4 / 3; }

.box5 {
    // display: grid; 
    // grid-template-columns: repeat(3, 1fr); 
    // grid-template-rows: repeat(2, 1fr); 
    // gap: 12px 12px; 
    grid-area: 4 / 2 / 6 / 3;
}

.box6 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-area: 1 / 3 / 4 / 4;
}

.box6-1 { grid-area: 1 / 1 / 2 / 2; }

.box6-2 { grid-area: 2 / 1 / 3 / 2; }

.box7 { grid-area: 4 / 3 / 5 / 4; }

.box8 { grid-area: 5 / 3 / 6 / 4; }

</style>