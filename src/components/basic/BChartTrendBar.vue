<template>
    <div class="w-full flex h-full box-border flag">
        <BaseChart id="pie" :options="options" ref="chartRef">
        </BaseChart>
        <!-- <dv-capsule-chart :config="dvConf" class="w-full"/> -->
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
import gsap from 'gsap'

const _color = ['#fb7293','#ff9f7f','#ffdb5c','#9fe6b8','#67e0e3',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    '#32c5e9','#37a2da','#32c5e9','#37a2da',
    ]
let options = reactive({})
const avatarMap = reactive({} as {[key: string]: string})
const chartRef = ref()
const avatarRef = ref()
const store = useSickStore()
store.$subscribe((mutation, state) => {
    const names = state.trendList?.map(v => v.char_name)
    const datas = state.trendList?.map(v => v.vote_num)
    options = getOptions(names, datas)
    chartRef.value.initChart(options)
})
onMounted(async () => {
    // await store.getMongoTrendList()
    const names = store.trendList?.map(v => v.char_name)
    const datas = store.trendList?.map(v => v.vote_num)
    store.trendList?.forEach((item, index) => {
        if (index > 8) return
        avatarMap[item.char_name] = item.photo
    })
    options = getOptions(names, datas)
    chartRef.value.initChart(options)
    run()
    setTimeout(() => {
        doAnim()
    })
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

function getOptions(xData: string[], data: number[]) {
    return {
        xAxis: {
            max: 'dataMax',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
                // fontSize: 10,
                // color: '#fff',
                // rotate: 20
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
        animationDuration: 0,
        animationDurationUpdate: 3000,
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
