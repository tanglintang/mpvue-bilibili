import request from '@/utils/request'

export function catchRes(url) {

    return request.get(`/${url}`).then((res) => {
        console.log('catchRes')
        wx.hideLoading()
        return res.data
    })
}