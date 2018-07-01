<template>
    <div class="video-card">
        <div class="card" v-for="(item, index) in videos" :key="index">
            <div class="card-hd">
                <div class="cover-img">
                    <image class="cover" :src="item.cover" />
                </div>
                <div class="msg">
                    <div class="msg-left">
                        <play-num :playNum="item.view"></play-num>
                        <danmu-num :danmuNum="danmuNum"></danmu-num>
                    </div>
                    <div class="msg-right duration">{{item.duration}}</div>
                </div>
            </div>
            <div class="card-bd">
                <div class="title">{{item.title}}</div>
            </div>
            <div class="card-ft">
                <span class="tag" v-for="(tag, i) in item.tags" :key="i" v-if="i<2">{{tag}}</span>
                <div class="btn">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PlayNum from '@/views/PlayNum/PlayNum'
import DanmuNum from '@/views/DanmuNum/DanmuNum'

export default {
    name: 'VideoCard',
    components: {PlayNum, DanmuNum},
    props: {
        videos: Array
    },
    data() {
        return {
            danmuNum: 1000,
        }
    },
    mounted() {
        console.log(this.videos)
    }
}
</script>

<style lang="stylus" scoped>
    .video-card
        width 100%
        box-sizing border-box
        display flex
        flex-direction row
        flex-wrap wrap
        vertical-align middle
        justify-content space-between
        // margin -40rpx 0
    .card
        width 48.5%
        height auto
        background-color #fff
        display inline-block
        margin-bottom 20rpx
        border-radius 10rpx
        box-shadow 2rpx 2rpx 2rpx 2rpx #E8E8E8
        .card-hd
            position relative
        .msg
            width 100%
            box-sizing border-box
            height 40rpx
            z-index 9
            position absolute
            bottom 10rpx
            font-size 24rpx
            color #fff
            display flex
            flex-direction row
            justify-content space-between
            vertical-align middle
            align-items center
            .msg-right
                margin-right 10rpx
            .msg-left
                margin-left 10rpx
                display flex
                flex-direction row
                justify-content space-between
                // background-color red
        .cover 
            width 100%
            height 220rpx
            border-radius 10rpx 10rpx 0 0
        .title
            font-size 26rpx
            height 80rpx
            line-height 1.5
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
        .tag
            font-size 26rpx
            color #6E6E6E
            position relative
            &:nth-child(1):after
                content: "\B7";
                margin: 0 .4em;
                color: #6E6E6E;

        .card-bd
            margin 10rpx 20rpx 0
        .card-ft
            margin 0 20rpx 20rpx
            position relative
            vertical-align middle
            .btn
                width 24rpx
                height 24rpx
                background url('../../../static/images/more.png')
                background-repeat no-repeat
                background-size contain
                position absolute
                right 0
                bottom 6rpx
                

</style>
