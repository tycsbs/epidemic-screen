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
// const mapName = ref('china')
let options = reactive({})
const chartRef = ref()

onMounted(async () => {
    await sickStore.getList()
    const city = sickStore.list.statisGradeCityDetail.slice(0, 10)
    const data = city && city.map(v => {
        return {
            name: v.city,
            value: v.nowConfirm
        }
    })
    options = getOptions(data)
    chartRef.value.initChart(options)
})

function getOptions(data: any) {
    return {
        backgroundColor: "#223651",
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: {
                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                    }
                },
                data: data
            }
        ]
    }
}
</script>
<style lang='less' scoped>

</style>
