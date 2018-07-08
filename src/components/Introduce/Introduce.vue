<template>
    <div class="intro">
        <up-info :upInfo="upInfo" />
        <div class="video-info">
            <div class="info hd video-title">{{title}}</div>
            <div class="info-bd">
                <div class="play-num">
                    <img src="../../../static/images/play1.png" alt="">
                    <span>{{view}}</span>
                </div>
                <div class="danmu-num">
                    <img src="../../../static/images/danmu1.png" alt="">
                    <span>{{danmuNum}}</span>
                </div>
                <div class="pubTime">{{pubTime}}</div>
            </div>
            <div class="info-ft">
                <div class="like" v-for="item in likeBtn" :key="item">
                    <img :src="url+item.name+'.png'" alt="">
                    <span>{{item.value}}</span>
                </div>
            </div>
            <div class="tag-list">
                <div class="tag" v-for="tag in tagList" :key="tag">{{tag}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import UpInfo from '@/components/UpInfo/UpInfo'

export default {
    name: 'Introduce',
    components: {UpInfo,},
    props: {
        upInfo: {}
    },
    data() {
        return {
            video: undefined,
            danmuNum: 1000,
            title: '',
            view: 0,
            pubTime: '',
            upInfo: {},
            likeBtn: [],
            url: '../../../static/images/',
            tagList: []
        }
    },
    created() {
        const video = wx.getStorageSync('videoInfo')
        this.view = this.getPlayNum(video.view)
        this.title = video.title
        this.pubTime = video.pubTime
        this.tagList = video.tags
        const down = '缓存'
        let {zan, coin, star, share} =  video
        this.likeBtn = [{ name: 'zan', value: zan}, { name: 'coin', value: coin}, { name: 'star', value: star}, { name: 'down', value: down}, { name: 'share', value: share}]

    },
    methods: {
        getPlayNum(view) {
            if (view > 10000) {
                return (view/10000).toFixed(1)+'万'
            } else {
               return view
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .intro
        width auto 
        height 80rpx
        box-sizing border-box
        margin 0 20rpx

        .video-info
            height auto
            display flex
            flex-direction column
            .video-title
                font-size 30rpx
                color #000
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
            .info-bd
                color #a0a0a0
                font-size 24rpx
                display flex
                flex-direction row
                justify-content flex-start
                vertical-align middle
                align-items center
                margin 20rpx
                .play-num, .danmu-num
                    display flex
                    vertical-align middle
                    margin 20rpx
                    img
                        width 32rpx
                        height 32rpx
                        display inline-block
                        margin-right 10rpx
                .pubTime
                    margin-left 10rpx

            .info-ft
                display flex
                flex-direction row
                justify-content space-around
                vertical-align middle
                align-items center
                .like
                    display flex
                    flex-direction column
                    align-items center
                    img 
                        width 50rpx
                        height 48rpx
                    span 
                        font-size 24rpx
                        color #a0a0a0
                        margin-top 20rpx
            .tag-list
                display flex
                flex-direction row
                justify-content flex-start
                overflow hidden
                flex-wrap wrap
                .tag
                    font-size 26rpx
                    background-color #F4F4F4
                    padding 20rpx 30rpx
                    border-radius 40rpx
                    margin 30rpx 20rpx 0
                    white-space nowrap
</style>        
