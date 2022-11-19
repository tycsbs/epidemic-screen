<template>
    <!-- <dv-border-box-12 class="w-full flex h-full box-border p-5 text-yellow-100"> -->
        <div class="grid grid-cols-3 grid-rows-2 gap-3 h-full text-orange-500">
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.localConfirmH5 }}</div>
                <div>{{ infoData.chinaTotal?.localConfirm }}</div>
                <div>本土现有确诊</div>
            </section>
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.nowConfirm }}</div>
                <div>{{ infoData.chinaTotal?.nowConfirm }}</div>
                <div>现有确诊</div>
            </section>
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.confirm }}</div>
                <div>{{ infoData.chinaTotal?.confirm }}</div>
                <div>累计确诊</div>
            </section>
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.noInfect }}</div>
                <div>{{ infoData.chinaTotal?.noInfect }}</div>
                <div>无症状感染者</div>
            </section>
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.importedCase }}</div>
                <div>{{ infoData.chinaTotal?.importedCase }}</div>
                <div>境外输入</div>
            </section>
            <section class="bg-slate-600 border border-stone-600 p-3 flex flex-col items-center">
                <div>较上日+ {{ infoData.chinaAdd?.dead }}</div>
                <div>{{ infoData.chinaTotal?.dead }}</div>
                <div>累计死亡</div>
            </section>
        </div>
    <!-- </dv-border-box-12> -->
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useSickStore } from '@/stores'
import type { Diseaseh5Shelf } from '@/interface'

const sickStore = useSickStore()
let infoData = reactive<Partial<Diseaseh5Shelf>>({})

onMounted(async () => {
    await sickStore.getList()
    infoData = sickStore.list.diseaseh5Shelf
})

</script>
<style lang='less' scoped>
.summary-container {
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(2, 1fr); 
    gap: 12px 12px; 
}
</style>
