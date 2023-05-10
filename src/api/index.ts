import axios from 'axios'
import type { RankListItem } from '@/interface'

const server = axios.create({
    // baseURL: 'https://42.192.144.141/'
})

export const getSickData = () => server.get('/api/getSickData')
.then(({ status, data }) => {
    if (status === 200) {
        return data.data
    }
    return null
})

export const getSickRankList = () => server.get('/api/getSickRankList')
.then(({ status, data }) => {
    if (status === 200) {
        return data.data as RankListItem[]
    }
    return null
})

export const getMongoTrendList = () => server.get('/api/getTrendData2')
.then(({ status, data }) => {
    if (status === 200) {
        return data.data
    }
    return null
})

// getMongoTrendList()