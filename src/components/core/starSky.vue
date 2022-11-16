<template>
    <div class='container'>
        <div ref="canvasRef" :id="id" :style="{width: props.width, height: props.height}"></div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
    /**
     * id: 容器ID, 唯一值
     */
    id: String,

    /**
     * 容器宽度
     */
    width: Number,

    /**
     * 容器高度
     */
    height: Number
})

const canvasRef = ref<HTMLCanvasElement>()
const stars = reactive<number[]>([])
const count = ref(0)
const maxStars = ref(2500)

onMounted(() => {
    // 初始化...
})

const initView = () => {
    const painterWidth = props.width || window.innerWidth
    const painterHeight = props.height || window.innerHeight
    const ctx = canvasRef.value?.getContext('2d')
}
</script>
<style lang='less' scoped>
</style>