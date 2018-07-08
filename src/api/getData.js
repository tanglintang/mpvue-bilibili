import request from '@/utils/request'

export const getVideos = () => new Promise((resolve, reject) => {
    const url = '/videos'
    request.get(url).then(res => {
        wx.hideLoading()
        resolve(res.data.videos)
    })
})

export const getSwiperImg = () => new Promise((resolve, reject) => {
    const url = '/swiperImg'
    request.get(url).then(res => {
        wx.hideLoading()
        resolve(res.data.swiperImg)
    })
})

export const getAnimes = () => new Promise((resolve, reject) => {
    const url = '/animes'
    request.get(url).then(res => {
        wx.hideLoading()
        resolve(res.data.animes)
    })
})

export const getUpInfo = (uid) => new Promise((resolve, reject) => {
    const url = '/upInfo'
    request.get(url).then(res => {
        wx.hideLoading()
        res.data.upInfo.forEach(item => {
            if (item.uid == uid) {
                resolve(item)
            }
        })
    })
})

export const getComments = (aid) => new Promise((resolve, reject) => {
    const url = '/comments'
    request.get(url).then(res => {
        wx.hideLoading()
        const comments = []
        res.data.comments.forEach(item => {
            if (item.aid == aid) {
                comments.push(item)
            }
        })
        resolve(comments)
    })
})