<template>
    <!-- <div class="w-full h-auto flex box-border"> -->
        <dv-border-box-13 class="overflow-hidden py-7 px-4 flex flex-col box-border">
            <!-- <div class="flex flex-col w-full h-auto"> -->
                <!-- <div class=" bg-slate-500">123</div> -->
                <dv-scroll-board :config="tableConf" class="w-full flex-1" />
            <!-- </div> -->
        </dv-border-box-13>
    <!-- </div> -->
</template>

<script setup lang='ts'>
import { computed, onMounted, reactive, ref } from 'vue'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()
const tableConf = reactive({
    header: ['地区', '增加', '发热', '治愈', '死亡'],
    rowNum: 6,
    data: <(string | number)[][]>[]
})

// const tableData = computed(() => {
//     const list = sickStore.proviceList?.map((item) => {
//         const { name, total, nowConfirm, heal, dead } = item
//         return [name, total, nowConfirm, heal, dead]
//     })
//     return {
//         header: ['地区', '确诊增加', '发热', '治愈', '死亡'],
//         rowNum: 6,
//         data: list
//     }
// })

onMounted(async () => {
    await sickStore.getList()
    const target = sickStore.list.provinceCompare
    const tableData = []
    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            const ele = target[key]
            tableData.push([key, ele.confirmAdd, ele.heal, ele.zero, ele.heal])
        }
    }
    tableConf.data = tableData
})

</script>

<style scoped lang='less'>
</style>