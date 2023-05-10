import {defineStore} from 'pinia'
import type { SickDataMo, RankListItem, ProviceTableMo, TrendListItem } from '@/interface'
import { getMongoTrendList, getSickData, getSickRankList } from '@/api/'

export const useSickStore = defineStore({
    id: 'epidemic',
    state: () => ({
        list: <SickDataMo>{},
        rankList: <RankListItem[]>[],
        trendList: <TrendListItem[]>[]
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
            if (this.list.diseaseh5Shelf) {
                return this.list
            }
            const data = await getSickData() as SickDataMo
            this.list = data
        },

        async getSickRankList() {
            const data = await getSickRankList() as RankListItem[]
            this.rankList = data
        },

        async getMongoTrendList() {
            const data = await getMongoTrendList() as TrendListItem[]
            this.trendList = data
        }
    }
})