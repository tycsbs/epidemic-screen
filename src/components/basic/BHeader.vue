<template>
    <div class="screen-header">
        <div class="screen-header-top-section">
            <dv-decoration-10 :color="['#45a1f1', '#032d52']" class="dv-dec-10 dev-reverse"/>
            <div class="screen-header-title-section">
                <dv-decoration-8 :color="['#45a1f1', '#000000']" class="dv-dec-8" />
                <div class="title-section">
                    <p class="header-title">新冠疫情数据可视化平台</p>
                </div>
                <dv-decoration-8 :color="['#45a1f1', '#000000']" class="dv-dec-8" :reverse="true" />
            </div>
            <dv-decoration-10 :color="['#45a1f1', '#032d52']" class="dv-dec-10"/>
        </div>
        <div class="screen-header-bottom-section">
            <div class="sub-section">
                <div class="sub-item flex-l sub-item-common-r">
                    <span class="sub-title special">Github地址</span>
                </div>
                <div class="sub-item flex-c react-l">
                    <span class="sub-title special">Gitee地址</span>
                </div>
            </div>
            <div class="sub-dec-section">
                <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <div class="sub-section">
                <div class="sub-item flex-c react-r item-special">
                    <span class="sub-title">版本号：1.0.092202</span>
                </div>
                <div class="sub-item flex-r sub-item-common-l">
                    <span
                        class="sub-title">{{timeInfo.dateYear}}&nbsp;&nbsp;&nbsp;{{timeInfo.dateWeek}}&nbsp;&nbsp;&nbsp;{{timeInfo.dateDay}}</span>
                </div>
            </div>
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

.screen-header {
    width: 100vw;
    .dev-reverse {
        transform: rotateY(180deg);
    }
    .screen-header-top-section {
        display: flex;

        .screen-header-title-section {
            width: 50%;
            display: flex;
            padding-top: 10px;

            .dv-dec-8 {
                width: 30%;
                height: 20px;
            }

            .title-section {
                width: 40%;
                text-align: center;

                .header-title {
                    background-color: transparent;
                    font-size: 24px;
                    font-weight: 550;
                    background-image: linear-gradient(#fff, #45a1f1);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }

        .dv-dec-10 {
            width: 25%;
            height: 20px;
        }
    }

    .screen-header-bottom-section {
        display: flex;

        .sub-section {
            width: 40%;
            display: flex;
            justify-content: space-between;
            height: 50px;

            .sub-item {
                width: calc(50% - 20px);
                // background-color: #0f1325;
                padding: 0 20px;

                .sub-title {
                    color: #fff;
                    font-size: 16px;
                }

                .special {
                    cursor: pointer;
                    color: #37a2da;
                    font-weight: 550;
                }
            }

            .sub-item-common-l {
                background-color: #0f1325;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid #0f1325;
                    border-left: 25px solid transparent;
                    border-right: 25px solid #0f1325;
                    position: absolute;
                    top: 0;
                    left: -50px;
                }
            }

            .sub-item-common-r {
                background-color: #0f1325;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    // border: transparent transparent #0f1325 #0f1325;
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid #0f1325;
                    border-left: 25px solid #0f1325;
                    border-right: 25px solid transparent;
                    position: absolute;
                    top: 0;
                    left: 100%;
                }
            }
        }

        .sub-dec-section {
            width: 20%;
            padding: 0 40px;

            .dv-dec-6 {
                height: 20px;
                margin-top: 15px;
            }
        }
    }
}
</style>