<template>
    <dv-border-box-12 class="w-full flex h-full box-border p-5">
        <BaseChart id="pie" :options="options" ref="chartRef">
        </BaseChart>
    </dv-border-box-12>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()
let options = reactive({})
const chartRef = ref() 

onMounted(async () => {
    await sickStore.getList()
    const city = sickStore.list.statisGradeCityDetail.slice(0, 10)
    const xdata = city && city.map(v => v.city)
    const datas = city && city.map(v => v.nowConfirm)
    options = getOptions(xdata, datas)
    chartRef.value.initChart(options)
})

function getOptions(xData: string[], data: number[]) {
    return {
        backgroundColor: "#223651",
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        label: {
            show: true
        },
        series: [
            {
                data: data,
                type: 'line',
                smooth: true
            }
        ]
    }
}
</script>
<style lang='less' scoped>

</style>
