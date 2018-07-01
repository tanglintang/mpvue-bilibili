import request from '@/utils/request'

export function catchVideos() {
    return request.get('/videos').then((res) => {
        wx.hideLoading()
        return res.data.videos
    })
}