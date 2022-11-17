<template>
    <div class='w-full h-auto flex'>
        <BaseChart id="china" :map-name="mapName"
        :options="options" ref="chartRef">
        </BaseChart>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'
import { geoCoordMap } from '@/assets/geoMap'

const sickStore = useSickStore()
const mapName = ref('china')
let options = reactive({})
const chartRef = ref()

onMounted( async () => {
    await sickStore.getList()
    const city = sickStore.list.diseaseh5Shelf?.areaTree[0]?.children;
    const data = city && city.map(v => {
        return {
            name: v.name,
            value: geoCoordMap[v.name].concat(v.total.nowConfirm),
            children: v.children
        }
    })
    options = getOptions(data)
    chartRef.value.initChart(options)
})

function getOptions(data: any) {
    return {
        geo: {
            map: "china",
            aspectScale: 0.8,
            layoutCenter: ["50%", "50%"],
            layoutSize: "100%",
            itemStyle: {
                areaColor: {
                    type: "linear-gradient",
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#152E6E", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#0673AD", // 50% 处的颜色
                        },
                    ],
                    global: true, // 缺省为 false
                },
                shadowColor: "#0f5d9d",
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },
            emphasis: {
                areaColor: "#0f5d9d",
            },
            regions: [
                {
                    name: "南海诸岛",
                    itemStyle: {
                        areaColor: "rgba(0, 10, 52, 1)",
                        borderColor: "rgba(0, 10, 52, 1)",
                        opacity: 0,
                        label: {
                            show: false,
                            color: "#009cc9",
                        },
                    },
                    label: {
                        show: false,
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                },
            ],
        },
        series: [
            {
                type: "map",
                map: "china",
                aspectScale: 0.8,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: "100%",
                label: {
                    show: true,
                    color: "#FFFFFF",
                    fontSize: 12,
                },
                itemStyle: {
                    areaColor: "#0c3653",
                    borderColor: "#1cccff",
                    borderWidth: 1.8,
                },
                emphasis: {
                    areaColor: "#56b1da",
                    label: {
                        show: true,
                        color: "#fff",
                    },
                },
                data: data,
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [45, 45],
                label: {
                    show: true,
                    color: "#fff",
                    formatter(value: any) {
                        return value.data.value[2]
                    }
                },
                itemStyle: {
                    color: '#1E90FF', //标志颜色
                },
                data: data,
            },
        ],
    }
}
</script>
<style lang='less' scoped>

</style>
