<template>
    <div class="w-full box-border">
        <div class="items-center justify-between flex h-12">
            <dv-decoration-10 :color="['#45a1f1', '#032d52']" class="h-5 w-3/12 rotate-180"/>
            <div class="flex-1 flex justify-between items-end">
                <dv-decoration-8 :color="['#45a1f1', '#000000']" class="flex-1 mt-12 h-12"/>
                <div class="flex items-start text-center h-12 bg-clip-text text-transparent
                bg-gradient-to-t from-green-400 to-blue-500 text-2xl font-semibold min-w-fit px-2">
                    <p>新冠疫情可视化运维平台</p>
                </div>
                <dv-decoration-8 :color="['#45a1f1', '#000000']" class="flex-1 mt-12 h-12" :reverse="true"/>
            </div>
            <dv-decoration-10 :color="['#45a1f1', '#032d52']" class="h-5 w-3/12" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue';
const timeInfo = reactive({
    setInterval: 0,
    dateDay: '',
    dateYear: '',
    dateWeek: ''
})
const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

onMounted(() => {
    handleTime()
})

onUnmounted(() => {
    clearInterval(timeInfo.setInterval)
})

const handleTime = () => {
    timeInfo.setInterval = window.setInterval(() => {
        // const date = new Date()
        timeInfo.dateDay = '2022-11-12'
        timeInfo.dateYear = '2022'
        timeInfo.dateWeek = WEEK[6]
    }, 1000)
}
</script>

<style lang="less" scoped>
</style>