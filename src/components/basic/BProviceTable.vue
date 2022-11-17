<template>
    <!-- <div class="w-full h-auto flex box-border"> -->
        <dv-border-box-13 class="overflow-hidden py-7 px-4 flex flex-col box-border">
            <!-- <div class="flex flex-col w-full h-auto"> -->
                <!-- <div class=" bg-slate-500">123</div> -->
                <dv-scroll-board :config="tableData" class="w-full flex-1" />
            <!-- </div> -->
        </dv-border-box-13>
    <!-- </div> -->
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { useSickStore } from '@/stores'

const sickStore = useSickStore()

const tableData = computed(() => {
    const list = sickStore.proviceList?.map((item) => {
        const { name, total, nowConfirm, heal, dead } = item
        return [name, total, nowConfirm, heal, dead]
    })
    return {
        header: ['地区', '总计', '今日确诊', '发热', '死亡'],
        rowNum: 6,
        data: list
    }
})
</script>

<style scoped lang='less'>
</style>