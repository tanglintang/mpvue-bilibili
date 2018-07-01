import request from '@/utils/request'

export function catchRes(param) {
    return request.get(`/${param}`).then((res) => {
        wx.hideLoading()
        return res.data
    })
}