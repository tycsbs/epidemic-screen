<template>
    <!-- <dv-full-screen-container class="font-mono"> -->
        <div class="w-full h-full flex flex-col p-5">
            <div class="w-full mb-2">
                <Header></Header>
            </div>
            <div class="w-full flex-auto shadow-md flex flex-col gap-2 mb-2">
                <div class="w-full bg-slate-600 h-16"></div>
                // 中间行
                <div class="flex-1 flex justify-between gap-3 bg-slate-800">
                    <div class=" w-4/12 h-auto flex">
                        <Content></Content>
                    </div>
                    <div class="w-80 h-auto flex">
                        <dv-border-box-12></dv-border-box-12>
                    </div>
                    <!-- <div class="flex-auto flex h-auto">
                        <bs-chart class="h-auto" id="test" :options="state.options" mapName="china"></bs-chart>
                    </div> -->
                    <!-- <div class="w-80 h-auto">
                        <dv-border-box-8></dv-border-box-8>
                    </div>
                    <div class="w-80 h-auto">
                        <dv-border-box-7></dv-border-box-7>
                    </div> -->
                    
                </div>
                <div class="flex-auto flex justify-between gap-3 box-border">
                    <div class="flex-auto flex h-auto">
                        <!-- <dv-border-box-10></dv-border-box-10> -->
                    </div>
                    <div class="flex-auto felx h-auto">
                        <!-- <dv-border-box-12></dv-border-box-12> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- <dv-loading>Loading...</dv-loading> -->
    <!-- </dv-full-screen-container> -->
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Header from './header/index.vue'
import * as echarts from 'echarts'
import Content from './content/index.vue'
import { geoCoordMap } from '@/assets/geoMap'

const chartData = reactive([
    {
        // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        name: '成都市',
        value: 11455,
        elseData: {
            // 这里放置地图 tooltip 里想显示的数据
        }
    }
])

const convertData = (data: Array<any>) => {
    const scatterData = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord = (geoCoordMap as any)[data[i].name];
        if (geoCoord) {
            scatterData.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    console.log(scatterData, 'scatterData')
    return scatterData;
}
const seriesData = [
    {
        name: '四川',
        value: 100
    },
    {
        name: '天津',
        value: 300
    },
    {
        name: '上海',
        value: 98
    },
    {
        name: '北京',
        value: 1243
    },
    {
        name: '云南',
        value: 675
    },
    {
        name: '内蒙古',
        value: 2431
    }
]
const state = reactive({
    height: '360px',
    width: '330px',
    options: {
        showLegendSymbol: true,
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontSize: 14,
                lineHeight: 22,
            },
            position: (point: any) => {
                // 固定在顶部
                return [point[0] + 50, point[1] - 20];
            },
            // 如果需要自定义 tooltip样式，需要使用formatter
            /*
              formatter: params => {
                return `<div style=""> ... </div>`
              }
            */
        },
        // 如果需要根据不同的数据展示深浅不一的颜色，则把这里打开
        // visualMap: {
        //   min: 0,
        //   max: 10,
        //   show: false,
        //   seriesIndex: 0,
        //   // 颜色
        //   inRange: {
        //     color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
        //   },
        // },
        // 底部背景
        geo: [{
            show: true,
            aspectScale: 0.85, //长宽比
            zoom: 1.16,
            top: '10%',
            left: '17%',
            map: 'china',
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: '#7ad5ff7f',
                    shadowOffsetY: 5,
                    shadowBlur: 15,
                    areaColor: 'rgba(5,21,35,0.1)'
                }
            }
        }],
        series: [
            {
                name: '相关指数',
                type: 'map',
                aspectScale: 0.85, //长宽比
                zoom: 1.16, //缩放
                mapType: 'china', // 自定义扩展图表类型
                top: '9%',
                left: '16%',
                itemStyle: {
                    normal: {
                        // 背景渐变色
                        areaColor: {
                            type: 'linear-gradient',
                            x: 0,
                            y: 300,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'RGBA(19,96,187,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'RGBA(7,193,223,1)' // 50% 处的颜色
                            }],
                            global: true // 缺省为 false
                        },
                        borderColor: '#4ECEE6',
                        borderWidth: 1,
                    },
                    emphasis: {
                        areaColor: '#4f7fff',
                        borderColor: 'rgba(0,242,252,.6)',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: '#00f2fc',
                    },
                },
                label: {
                    formatter: (params: any) => `${params.name}`,
                    show: true,
                    position: 'insideRight',
                    textStyle: {
                        fontSize: 14,
                        color: '#efefef',
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                data: chartData,
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                symbolSize: 7,
                effectType: 'ripple',
                legendHoverLink: false,
                showEffectOn: 'render',
                rippleEffect: {
                    period: 4,
                    scale: 2.5,
                    brushType: 'stroke',
                },
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: '#99FBFE',
                        shadowBlur: 5,
                        shadowColor: '#fff',
                    },
                },
                data: convertData(seriesData),
            },
        ],
    }
})
</script>
    
<style scoped lang='less'>
.bs-container {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    .bs-content {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        &-header {
            height: 60px;
        }
        &-wrapper {
            flex: 1;
            // background-color: aqua;
            overflow: hidden;
        }
    }
}
</style>