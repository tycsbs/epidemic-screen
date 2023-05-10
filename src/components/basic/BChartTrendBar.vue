<template>
    <div class="w-full flex h-full box-border p-5 white">
        <!-- <BaseChart id="pie" :options="options" ref="chartRef">
        </BaseChart> -->
        <dv-capsule-chart :config="dvConf" class="w-full"/>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'
import gsap from 'gsap'

const dvConf = reactive({
    data: <{name: string; value: any}[]>[],
    unit: '',
    showValue: true,
})
let options = reactive({})
const chartRef = ref()
const store = useSickStore()
store.$subscribe((mutation, state) => {
    const names = state.trendList?.map(v => v.char_name)
    const datas = state.trendList?.map(v => v.vote_num)
    dvConf.data = datas.map((v,i) => {
        return {
            name: names[i],
            value: v
        }
    })
})
onMounted(async () => {
    await store.getMongoTrendList()
    // const names = store.trendList?.map(v => v.char_name)
    // const datas = store.trendList?.map(v => v.vote_num)
    // dvConf.data = datas.map((v,i) => {
    //     return {
    //         name: names[i],
    //         value: v
    //     }
    // })
    // options = getOptions(names, datas)
    // chartRef.value.initChart(options)
    run()
})

function run() {
    setTimeout(async function () {
        await store.getMongoTrendList()
        run()
    }, 5000);
}
function getFlag(name: string) {
        if (!name) {
            return '';
        }
        return (
            store.trendList.find(function (item) {
                return item.char_name === name;
            }) || {}
        ).photo
    }
function getOptions(xData: string[], data: number[]) {
    return {
        xAxis: {
            max: 'dataMax'
        },
        grid: {
            left: 160
        },
        yAxis: {
            type: 'category',
            data: xData,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 32,
            axisLabel: {
                show: true,
                fontSize: 14,
                // formatter: function (n:string) {
                //     return n + '{flag|' + getFlag(n) + '}';
                // }
            },
            // rich: {
            //     flag: {
            //         fontSize: 25,
            //         padding: 5,
            //         backgroundColor: {
            //             image: weatherIcons.Cloudy
            //         }
            //     }
            // }
        },
        series: [
            {
                realtimeSort: true,
                type: 'bar',
                // barWidth: 16,
                barGap: 10,
                data: data,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
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
<style lang='less' scoped></style>
