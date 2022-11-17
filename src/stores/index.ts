import {defineStore} from 'pinia'
import type { SickDataMo, RankListItem, ProviceTableMo } from '@/interface'
import { getSickData, getSickRankList } from '@/api/'

export const useSickStore = defineStore({
    id: 'epidemic',
    state: () => ({
        list: <SickDataMo>{},
        rankList: <RankListItem[]>[]

        // proviceList: <ProviceTableMo[]>[]
    }),
    getters: {
        /**
         * 获取各省统计情况
         * @returns {ProviceTableMo[]}
         */
        proviceList: (state) => {
            const originData = state.list?.diseaseh5Shelf?.areaTree[0]?.children
            const proviceData: ProviceTableMo[] = originData?.map((item) => {
                return {
                    name: item.name,
                    total: item.total.confirm,
                    nowConfirm: item.total.nowConfirm,
                    heal: item.total.heal,
                    dead: item.total.dead
                }
            })
            return proviceData
        }
    },
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