<template>
    <dv-full-screen-container class="bs-container">
        <div class="bs-content">
            <div class="bs-content-header">
                <Header></Header>
            </div>
            <div class="bs-content-wrapper">
                <!-- <Content></Content> -->
            </div>
        </div>
        <!-- <dv-loading>Loading...</dv-loading> -->
    </dv-full-screen-container>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Header from './header/index.vue'
import Content from './content/index.vue'
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