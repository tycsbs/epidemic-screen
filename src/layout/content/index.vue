<template>
    <div class="w-full h-auto flex box-border">
        <dv-border-box-13 class="overflow-hidden py-7 px-4 flex flex-col box-border">
            <!-- <div class="flex flex-col w-full h-auto"> -->
                <!-- <div class=" bg-slate-500">123</div> -->
                <dv-scroll-board :config="config" class="w-full flex-1" />
            <!-- </div> -->
        </dv-border-box-13>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { geoCoordMap } from '@/assets/geoMap'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()
const config = reactive({
    header: ['地区', '总计', '今日确诊', '发热', '死亡'],
    data: <(number | string)[][]>[]
})

onMounted(() => {
    const list = sickStore.proviceList.map((item) => {
        const { name, total, nowConfirm, heal, dead } = item
        return [name, total, nowConfirm, heal, dead]
    })

    // const tableConf = {
    //     header: ['地区', '总计', '今日确诊', '发热', '死亡'],
    //     data: list
    // }

    nextTick(() => {
        console.log(sickStore.proviceList)
        config.data = list
    })
    
    // const instance = echarts.init(document.querySelector('#map') as HTMLElement)
    // instance.setOption({
    //     geo: {
    //         map: "china",
    //         aspectScale: 0.8,
    //         layoutCenter: ["50%", "50%"],
    //         layoutSize: "100%",
    //         itemStyle: {
    //             //  normal: {
    //             areaColor: {
    //                 type: "linear-gradient",
    //                 x: 0,
    //                 y: 1200,
    //                 x2: 1000,
    //                 y2: 0,
    //                 colorStops: [
    //                     {
    //                         offset: 0,
    //                         color: "#152E6E", // 0% 处的颜色
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: "#0673AD", // 50% 处的颜色
    //                     },
    //                 ],
    //                 global: true, // 缺省为 false
    //             },
    //             shadowColor: "#0f5d9d",
    //             shadowOffsetX: 0,
    //             shadowOffsetY: 15,
    //             opacity: 0.5,
    //             // },
    //         },
    //         emphasis: {
    //             areaColor: "#0f5d9d",
    //         },
    //         regions: [
    //             {
    //                 name: "南海诸岛",
    //                 itemStyle: {
    //                     areaColor: "rgba(0, 10, 52, 1)",
    //                     borderColor: "rgba(0, 10, 52, 1)",
    //                     //normal: {
    //                     opacity: 0,
    //                     label: {
    //                         show: false,
    //                         color: "#009cc9",
    //                     },
    //                     //},
    //                 },
    //                 label: {
    //                     show: false,
    //                     color: "#FFFFFF",
    //                     fontSize: 12,
    //                 },
    //             },
    //         ],
    //     },
    //     series: [
    //         {
    //             type: "map",
    //             map: "china",
    //             aspectScale: 0.8,
    //             layoutCenter: ["50%", "50%"], //地图位置
    //             layoutSize: "100%",
    //             label: {
    //                 show: true,
    //                 color: "#FFFFFF",
    //                 fontSize: 12,
    //             },
    //             itemStyle: {
    //                 areaColor: "#0c3653",
    //                 borderColor: "#1cccff",
    //                 borderWidth: 1.8,
    //             },
    //             emphasis: {
    //                 areaColor: "#56b1da",
    //                 label: {
    //                     show: true,
    //                     color: "#fff",
    //                 },
    //             },
    //             data: data,
    //         },
    //         {
    //             type: 'scatter',
    //             coordinateSystem: 'geo',
    //             symbol: 'pin',
    //             symbolSize: [45, 45],
    //             label: {
    //                 show: true,
    //                 color: "#fff",
    //                 formatter(value: any) {
    //                     return value.data.value[2]
    //                 }
    //             },
    //             itemStyle: {
    //                 color: '#1E90FF', //标志颜色
    //             },
    //             data: data,
    //         },
    //     ],
    // })
})
</script>

<style scoped lang='less'>
</style>