<template>
    <div class="content-wrapper">
        <div class="item-left">
            <dv-border-box-13>
                <dv-scroll-board :config="config" style="width:380px;" />
            </dv-border-box-13>
        </div>
        <div class="item-center">
            <div id="map"></div>
        </div>
        <div class="item-right"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from 'echarts'
import '@/assets/china.js'
import { geoCoordMap } from '@/assets/geoMap'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()
const config = reactive({
    header: ['用户名', '测试', '设定'],
    data: [
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56],
        [12, 34, 56]
    ]
})

// onMounted(() => {
//     const city = sickStore.list.diseaseh5Shelf.areaTree[0].children;
//     //   store.item = city[1].children
//     const data = city.map(v => {
//         return {
//             name: v.name,
//             value: geoCoordMap[v.name].concat(v.total.nowConfirm),
//             children: v.children
//         }
//     })
//     const instance = echarts.init(document.querySelector('#map') as HTMLElement)
//     instance.setOption({
//         geo: {
//             map: "china",
//             aspectScale: 0.8,
//             layoutCenter: ["50%", "50%"],
//             layoutSize: "100%",
//             itemStyle: {
//                 //  normal: {
//                 areaColor: {
//                     type: "linear-gradient",
//                     x: 0,
//                     y: 1200,
//                     x2: 1000,
//                     y2: 0,
//                     colorStops: [
//                         {
//                             offset: 0,
//                             color: "#152E6E", // 0% 处的颜色
//                         },
//                         {
//                             offset: 1,
//                             color: "#0673AD", // 50% 处的颜色
//                         },
//                     ],
//                     global: true, // 缺省为 false
//                 },
//                 shadowColor: "#0f5d9d",
//                 shadowOffsetX: 0,
//                 shadowOffsetY: 15,
//                 opacity: 0.5,
//                 // },
//             },
//             emphasis: {
//                 areaColor: "#0f5d9d",
//             },
//             regions: [
//                 {
//                     name: "南海诸岛",
//                     itemStyle: {
//                         areaColor: "rgba(0, 10, 52, 1)",
//                         borderColor: "rgba(0, 10, 52, 1)",
//                         //normal: {
//                         opacity: 0,
//                         label: {
//                             show: false,
//                             color: "#009cc9",
//                         },
//                         //},
//                     },
//                     label: {
//                         show: false,
//                         color: "#FFFFFF",
//                         fontSize: 12,
//                     },
//                 },
//             ],
//         },
//         series: [
//             {
//                 type: "map",
//                 map: "china",
//                 aspectScale: 0.8,
//                 layoutCenter: ["50%", "50%"], //地图位置
//                 layoutSize: "100%",
//                 label: {
//                     show: true,
//                     color: "#FFFFFF",
//                     fontSize: 12,
//                 },
//                 itemStyle: {
//                     areaColor: "#0c3653",
//                     borderColor: "#1cccff",
//                     borderWidth: 1.8,
//                 },
//                 emphasis: {
//                     areaColor: "#56b1da",
//                     label: {
//                         show: true,
//                         color: "#fff",
//                     },
//                 },
//                 data: data,
//             },
//             {
//                 type: 'scatter',
//                 coordinateSystem: 'geo',
//                 symbol: 'pin',
//                 symbolSize: [45, 45],
//                 label: {
//                     show: true,
//                     color: "#fff",
//                     formatter(value: any) {
//                         return value.data.value[2]
//                     }
//                 },
//                 itemStyle: {
//                     color: '#1E90FF', //标志颜色
//                 },
//                 data: data,
//             },
//         ],
//     })
// })
</script>

<style scoped lang='less'>
.content-wrapper {
    display: flex;
    align-items: center;

    .item-left {
        width: 400px;
        height: 200px;
    }

    .item-center {
        flex: 1;
    }

    .item-right {
        width: 300px
    }
}
</style>