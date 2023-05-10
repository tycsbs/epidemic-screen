<template>
    <div class="w-full flex h-full box-border p-2 flag">
        <BaseChart id="pie" :options="options" ref="chartRef">
        </BaseChart>
        <!-- <dv-capsule-chart :config="dvConf" class="w-full"/> -->
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'

// const dvConf = reactive({
//     data: <{name: string; value: any}[]>[],
//     unit: '',
//     showValue: true,
    // colors: ['#fb7293','#ff9f7f','#ffdb5c','#9fe6b8','#67e0e3',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // '#32c5e9','#37a2da','#32c5e9','#37a2da',
    // ]
// })
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
const avatarMap = reactive({}) as any
const chartRef = ref()
const store = useSickStore()
store.$subscribe((mutation, state) => {
    const names = state.trendList?.map(v => v.char_name)
    const datas = state.trendList?.map(v => v.vote_num)
    options = getOptions(names, datas)
    chartRef.value.initChart(options)
    // dvConf.data = datas.map((v,i) => {
    //     return {
    //         name: names[i],
    //         value: v
    //     }
    // })
})
onMounted(async () => {
    await store.getMongoTrendList()
    const names = store.trendList?.map(v => v.char_name)
    const datas = store.trendList?.map(v => v.vote_num)
    store.trendList?.forEach((item) => {
        avatarMap[item.char_name] = item.photo
        // avatarMap.push(item.photo)
    })
    console.log(avatarMap)
    options = getOptions(names, datas)
    chartRef.value.initChart(options)
    run()
})

function run() {
    setTimeout(async function () {
        await store.getMongoTrendList()
        run()
    }, 10000);
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
            left: 100,
            right: 100,
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
                    borderWidth: 1,
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
    padding-right: 30px;
    /deep/ .dv-capsule-chart .label-column {
    min-width: 85px
}
}

    
</style>
