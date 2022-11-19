<template>
    <div class='w-full h-full flex'>
        <div ref="canvasRef" id="scence" class=""></div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useResizeObserver } from '@vueuse/core'
import type { Points, BufferGeometry, PointsMaterial } from 'three';
import gsap from 'gsap'

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

const canvasRef = ref()
const body = ref(document.body)
let scence = reactive({}) as THREE.Scene
let camera = reactive({}) as THREE.PerspectiveCamera
let renderer = reactive({}) as THREE.WebGLRenderer
let control = reactive({})
let pointsList = reactive({}) as Points<BufferGeometry, PointsMaterial>
const winOpt = reactive({
    width: window.innerWidth,
    height: window.innerHeight
})


onMounted(() => {
    // 初始化...
    initView()
})

const initView = () => {
    scence = new THREE.Scene()
    scence.background = loadBackground()
    camera = new THREE.PerspectiveCamera(45, winOpt.width / winOpt.height, 0.1, 100)
    camera.position.set(5, 5, 2)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(winOpt.width, winOpt.height)

    // const geometry = new THREE.BoxGeometry(1,1,1)
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0x00ffff,
    //     opacity: 0.5
    // })
    // const cube = new THREE.Mesh(geometry, material)

    control = new OrbitControls(camera, renderer.domElement)

    // scence.add(cube)

    canvasRef.value.appendChild(renderer.domElement)

    loopRender()

    loadPoints()
}

const loadPoints = () => {
    const geometry = new THREE.BufferGeometry()
    const verties = []
    for (let index = 0; index < 30000; index++) {
        const points = THREE.MathUtils.randFloat(-4, 4)
        // geometry.tween.push(gsap.to({points}, {
        //     duration: 6,
        //     yoyo: true,
        //     repeat: -1,
        //     ease: 'power1.inOut'
        // }))
        verties.push(points)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verties), 3))

    pointsList = new THREE.Points(geometry, new THREE.PointsMaterial({
        map: new THREE.TextureLoader().load('/public/snow.png'),
        opacity: 0.3,
        transparent: true,
        alphaTest: 0.05,
        depthTest: true,
        size: 0.05
    }))

    scence.add(pointsList)
}

useResizeObserver(body, (entry) => {
    const tar = entry[0]
    const { width, height } = tar.contentRect
    winOpt.width = width
    winOpt.height = height

    nextTick(() => {
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()

        pointsList.rotation.z += 0.005
        pointsList.position.y += 0.001

        if (pointsList.position.z > 4) {
            pointsList.position.z = 0
        }
        gsap.to(pointsList.position, {
            y: 3,
            duration: 30,
            yoyo: true,
            repeat: -1,
            ease: 'power1'
        })
        gsap.to(pointsList.rotation, {
            z: Math.PI / 3,
            duration: 60,
            yoyo: true,
            repeat: -1,
            ease: 'power1'
        })
    })
})

const loadBackground = () => {
    const canvas = document.createElement('canvas')
    canvas.width = winOpt.width
    canvas.height = winOpt.height
    const ctx = canvas.getContext('2d')!
    const gradient = ctx?.createLinearGradient(0, 0, winOpt.width, 0)
    ctx.fillStyle = gradient
    gradient?.addColorStop(0, '#4e22b7')
    gradient?.addColorStop(1, '#3292ff')

    ctx?.fillRect(0, 0, winOpt.width, winOpt.height)

    const canvasTexture = new THREE.CanvasTexture(canvas)
    return canvasTexture

}

const loopRender = () => {
    renderer.render(scence, camera)
    requestAnimationFrame(loopRender)
}
</script>
<style lang='less' scoped>
</style>