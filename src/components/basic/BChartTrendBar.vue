<template>
    <div class="w-full flex h-full box-border flag">
        <BaseBarChart id="pie" :options="options" ref="chartRef">
        </BaseBarChart>
        <div class="avatar-wrapper" ref="avatarRef">
            <div class="avatar-container"  id="avatarRef">
                <div class="avatar" v-for="(item, index) in avatarMap" :key="index">
                    <el-avatar :size="40" :src="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'
import BaseBarChart from '@/components/core/baseChart.vue'
import gsap from 'gsap'
import type { EChartsOption } from 'echarts'

const _color = ['#fb7293','#ff9f7f','#ffdb5c','#9fe6b8','#67e0e3',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    ]
const options = ref<EChartsOption>()
const avatarMap = reactive<string[]>([])
const chartRef = ref()
const avatarRef = ref()
const store = useSickStore()

store.$subscribe(() => {
    initPageData()
})

const showListOneByOne = (datas: number[], names: string[], showList: number[] = []) => {
    if (datas.length === 0) return
    const _data = [...datas]
    const temp = showList.length === 0 ? new Array(datas.length).fill(0) : [...showList]
    requestAnimationFrame(() => {
        temp[_data.length - 1] = _data.pop()!
        options.value = getOptions(names, temp)
        showListOneByOne(_data, names, temp)
    })
}

const initPageData = async (isFirst = false) => {
    const names = store.trendList?.map(v => v.char_name)
    const datas = store.trendList?.map(v => v.vote_num)
    options.value = getOptions(names, datas)
    isFirst && chartRef.value.initChart(options)
}


    
onMounted(() => {
    initPageData(true)
    // 获取头像链接
    store.trendList?.forEach((item, index) => {
        if (index > 8) return
        avatarMap.push(item.photo)
    })
    
    // 定时更新数据
    run()
    // 执行头像动画
    doAnim()
})

function run() {
    setTimeout(async function () {
        await store.getMongoTrendList()
        run()
    }, 8000);
}

function doAnim() {
    const tl = gsap.timeline();
    Object.keys(avatarMap).forEach((item, index) => {
        const dom = `#avatarRef > .avatar:nth-child(${index + 1})`
        tl.fromTo(dom,{
            x: 30,
            opacity: 0,
            scale: 0,
            rotate: -30,
        }, {
            duration: 4,
            x: -20,
            opacity: 1,
            scale: 1,
            rotate: 30,
            repeat: -1,
            yoyo: true,
            eagger: true
        }, '<=0.3')
    })
}

function getOptions(xData: string[], data: number[]): EChartsOption {
    return {
        xAxis: {
            max: 'dataMax',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        },
        grid: {
            left: '100px',
            right: '80px',
            top: 10,
            bottom: 25
        },
        color: _color,
        yAxis: {
            type: 'category',
            data: xData,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 32,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#fff'
            }
        },
        series: [
            {
                realtimeSort: true,
                type: 'bar',
                barWidth: 10,
                barGap: 10,
                data: data,
                colorBy: 'data',
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true,
                    color: '#fff',
                },
                itemStyle: {
                    borderRadius: 20,
                    borderWidth: 0.5,
                    borderColor: '#999',
                }
            }
        ],
        legend: {
            show: true
        },
        // animationDuration: 330,
        // animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    }
}

</script>
<style lang='less' scoped>
.flag {
    // margin-right: 15px;
    position: relative;
    box-sizing: border-box;
    .avatar-wrapper {
        position: fixed;
        width: 80px;
        height: 460px;
        right: -20px;
        bottom: 30px;
        overflow: hidden;
        pointer-events: all;
        .avatar-container {
            width: 100%;
            height: 100%;
            padding-top: 16px;
            overflow: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
}

    
</style>
