import {defineStore} from 'pinia'
import type { SickDataMo, RankListItem } from '@/interface'
import { getSickData, getSickRankList } from '@/api/'

export const useSickStore = defineStore({
    id: 'epidemic',
    state: () => ({
        list: <SickDataMo>{},
        rankList: <RankListItem[]>[]
    }),
    actions: {
        async getList() {
            const data = await getSickData() as SickDataMo
            this.list = data
        },

        async getSickRankList() {
            const data = await getSickRankList() as RankListItem[]
            this.rankList = data
        }
    }
})