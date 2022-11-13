<template>
    <el-row>
        <BHeader></BHeader>
        <!-- <el-col :span="8" class="row-left">
            <dv-decoration-10 style="height:8px;" />
        </el-col>
        <el-col :span="8" class="row-center">
            <dv-decoration-5 :dur="6" style="height:40px;" /></el-col>
        <el-col :span="8" class="row-right">
            <dv-decoration-10 style="height:8px;" />
        </el-col> -->
    </el-row>
</template>
    
<script setup lang='ts'>
import BHeader from '@/components/basic/BHeader.vue'
import { ref, reactive } from 'vue'
</script>
    
<style scoped lang='less'>
.row-left {
    padding: 25px 0 0 25px;
}
.row-center {
    padding-top: 25px;
}
.row-right {
    padding: 25px 25px 0 0;
}
</style>