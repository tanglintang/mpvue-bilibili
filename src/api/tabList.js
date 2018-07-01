import request from '@/utils/request'

export function catchTabList() {
    return request.get('/tabList').then((res) => {
        wx.hideLoading()
        return res.data.tabList
    })
}