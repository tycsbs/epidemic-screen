<template>
    <div class='loading-container flex items-center justify-center'>
        <div class="loader">
            <div class="dot-box">
                <div class="dot" style="--i:0;"></div>
                <div class="dot" style="--i:1;"></div>
                <div class="dot" style="--i:2;"></div>
                <div class="dot" style="--i:3;"></div>
                <div class="dot" style="--i:4;"></div>
                <div class="dot" style="--i:5;"></div>
                <div class="dot" style="--i:6;"></div>
                <div class="dot" style="--i:7;"></div>
                <div class="dot" style="--i:8;"></div>
                <div class="dot" style="--i:9;"></div>
            </div>
            <p>加载中...</p>
            <div class="dot-box">
                <div class="dot" style="--i:0;"></div>
                <div class="dot" style="--i:1;"></div>
                <div class="dot" style="--i:2;"></div>
                <div class="dot" style="--i:3;"></div>
                <div class="dot" style="--i:4;"></div>
                <div class="dot" style="--i:5;"></div>
                <div class="dot" style="--i:6;"></div>
                <div class="dot" style="--i:7;"></div>
                <div class="dot" style="--i:8;"></div>
                <div class="dot" style="--i:9;"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style lang='less' scoped>
.loading-container {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    --c: gold;

    .loader {
        /* 弹性布局 垂直排列 居中 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* 执行动画：动画名 时长 线性 无限次播放 */
        animation: changeColor 5s linear infinite;
    }

    .dot-box {
        display: flex;
    }

    .dot-box .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        /* 通过var函数调用自定义属性--c，设置颜色 */
        background-color: var(--c);
        /* 阴影（发光效果） */
        box-shadow: 0 0 10px var(--c),
            0 0 20px var(--c),
            0 0 40px var(--c),
            0 0 60px var(--c),
            0 0 80px var(--c),
            0 0 100px var(--c);
        margin: 20px 10px;
        /* 默认缩放为0.1倍 */
        transform: scale(0.1);
        /* 执行动画 */
        animation: dotAnimate 2s linear infinite;
        /* 设置每一个点的动画延迟时间 */
        animation-delay: calc(0.1s * var(--i));
    }

    .loader p {
        color: var(--c);
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 5px;
    }

    .dot-box:nth-child(3) .dot {
        /* 设置下面一排圆点的动画延迟时间 */
        animation-delay: calc(-0.1s * var(--i));
    }
}
 /* 定义动画 */
    /* 圆点的动画 */
    @keyframes dotAnimate {
        0% {
            /* 设置缩放 */
            transform: scale(0.2);
        }

        10% {
            transform: scale(1);
        }

        50%,
        100% {
            transform: scale(0.2);
        }
    }

    /* 颜色改变动画 */
    @keyframes changeColor {
        0% {
            /* 颜色滤镜 */
            filter: hue-rotate(0deg);
        }

        100% {
            filter: hue-rotate(360deg);
        }
    }
</style>