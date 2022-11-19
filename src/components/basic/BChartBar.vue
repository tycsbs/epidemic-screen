<template>
    <dv-border-box-12 class="w-full flex h-full box-border p-5">
        <dv-capsule-chart :config="barConf"></dv-capsule-chart>
    </dv-border-box-12>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()
let barConf = reactive({})
const chartRef = ref() 

onMounted( () => {
    // await sickStore.getList()
    const city = sickStore.list.statisGradeCityDetail.slice(0, 10)
    const xdata = city && city.map(v => v.city)
    const datas = city && city.map(v => v.nowConfirm)
    // options = getOptions(xdata, datas)
    // chartRef.value.initChart(options)
})

</script>
<style lang='less' scoped>

</style>
