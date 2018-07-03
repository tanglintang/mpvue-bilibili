<template>
    <div class="intro">
        <up-info />
        <div class="video-info">
            <div class="info hd video-title">{{upInfo}}</div>
            <div class="info-bd">
                <div class="play-num">
                    <img src="../../../static/images/play1.png" alt="">{{view}}
                </div>
                <div class="danmu-num">
                    <img src="../../../static/images/danmu1.png" alt="">{{danmuNum}}
                </div>
                <div class="pubTime">{{pubTime}}</div>
            </div>
            <div class="info-ft">
                <div class="like"></div>
                <div class="tags"></div>
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
            pubTime: ''
        }
    },
    mounted() {
        // const {} = this.upInfo
        let temp = JSON.parse(JSON.stringify(this.upInfo))

        console.log(temp)

        // console.log(temp)
        const video = wx.getStorageSync('videoInfo')
        this.view = this.getPlayNum(video.view)
        this.title = video.title
        this.pubTime = video.pubTime
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
                font-size 32rpx
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
                    // height 40rpx
                    // line-height 40rpx
                    margin 20rpx
                    // align-items center
                    // vertical-align middle
                    img
                        width 32rpx
                        height 32rpx
                        display inline-block
                        margin-right 10rpx
</style>        
