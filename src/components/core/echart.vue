<template>
    <div ref="chartRef" :id="id" class="h-full w-full"></div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { EChartsType, EChartsOption } from 'echarts'
import geoJson from '@/assets/full.json'

name: 'BaseChart'
const props = defineProps({
    /**
     * id: 容器ID, 唯一值
     */
    id: String,

    /**
     * 容器宽度
     */
    width: {
        type: String
        // required: true
    },

    /**
     * 容器高度
     */
    height: {
        type: String
        // required: true
    },

    /**
     * 自定义样式类名
     */
    className: String,

    /**
     * 图标参数
     */
    options: {
        type: Object,
        default: () => ({}),
    },

    /**
     * 需要加载的地图区域名称
     */
    mapName: {
        type: String,
        default: 'china'
    }

})

const chartRef = ref<HTMLElement>()
const chartInstanceRef = ref<EChartsType>()

onMounted(() => {
    chartInstanceRef.value = echarts.init(chartRef.value!, {})
    props.mapName && echarts.registerMap(props.mapName, geoJson as any)
    initChart()

    chartInstanceRef.value?.on('click', (param) => {
        console.log(param)
    })
})

watch(() => props.options, (opt) => {
    console.log(opt, '====>')
    opt && initChart(opt)
}, {
    deep: true
})

const initChart = (data?: EChartsOption) => {
    const opt = data || props.options
    opt && chartInstanceRef.value?.setOption(opt)
}

defineExpose({
    initChart,
    chartInstanceRef
})
</script>

<style lang='less' scoped>
</style>