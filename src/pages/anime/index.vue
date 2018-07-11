<template>
    <div>
        <video-player :videoUrl="videoUrl" />
        <div class="body">
            <div class="top btn">
                <div class="share">
                    <img src="../../../static/images/share-green.png" alt="">
                    <span>分享</span>
                </div>
                <div class="follow">
                    <img src="../../../static/images/like-red.png" alt="">
                    <span>已追番</span>
                </div>
                <div class="download">
                    <img src="../../../static/images/download-blue.png" alt="">
                    <span>缓存</span>
                </div>
            </div>
            <div class="select-contents">
                <div class="title">
                    <span>选集</span>
                    <span class="num">全 {{totalNum}} 话</span>
                </div>
                <div class="bd contents">
                    <div class="item" v-for="(item, index) in contents" :key="index">
                        <span class="hd">第 {{index+1}} 话</span>
                        <span class="name" v-show="contents.length > 0">{{item}}</span>                        
                    </div>
                </div>
            </div>
            <div class="animeCard" v-for="item in animeInfo" :key="item">
                <div class="left cover">
                    <img :src="item.cover" alt="">
                </div>
                <div class="right info">
                    <div class="title">{{item.name}}</div>
                    <div class="play-status">
                        <img src="../../../static/images/play1.png" alt="">
                        <span class="play">{{item.play}}</span>
                        <img src="../../../static/images/like.png" alt="">
                        <span class="like">{{item.like}}</span>
                    </div>
                    <div class="update-status" v-if="item.status=='完结'">已{{item.status}}，全 {{item.num}} 话</div>
                    <div class="update-status" v-if="item.status=='更新'">更新至 {{item.num}} 话</div>
                    <div class="intro">{{item.intro}}</div>
                    <div class="score">{{item.score}}
                        <span>分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPlayer from '@/views/VideoPlayer/VideoPlayer'

import { getAnimes } from '@/api/getData'

export default {
    components: { VideoPlayer },
    data() {
        return {
            aid: '',
            totalNum: 0,
            animeInfo: [
                // {
                //     "aid": "md6402",
                //     "name": "一人之下 第二季",
                //     "intro": "简介：这个世界是存在异人的。 张楚岚就是一个隐藏在普通人中的异人。在生命的前19年中，他一直小心隐藏着自己和别人的不同。直到有一天，神秘少女冯宝宝找上了他。从此他被活尸追，被怪人砍，被卷入了前所未见的麻烦之中……",
                //     "cover": "https://i0.hdslb.com/bfs/bangumi/f4e355ac82b4508e26f1883e92320879151453a7.jpg@310w_413h.webp",
                //     "num": "24",
                //     "status": "完结",
                //     "score": 9.2,
                //     "play": "9447.9万",
                //     "contents": ["风起云涌，罗天大醮！", "龙虎山", "不摇碧莲", "三十二人", "炁体源流", "饵", "三十六贼", "神莹内敛", "奇门显像", "风后奇门", "清静经"]
                // },
            ],
            totalNum: 0,
            // contents: ["风起云涌，罗天大醮！", "龙虎山", "不摇碧莲", "三十二人", "炁体源流", "饵", "三十六贼", "神莹内敛", "奇门显像", "风后奇门", "清静经"]
            contents: []
        }
    },
    onLoad(options) {
        this.aid = options.aid
    },
    async mounted() {
        const animeInfo = await getAnimes(this.aid)
        this.totalNum = animeInfo.num
        this.contents = animeInfo.contents ? animeInfo.contents : Number(animeInfo.num)
        this.animeInfo = [animeInfo]
    },
}
</script>

<style lang="stylus" scoped>
.body
    box-sizing border-box
    // width 100vw
    height 100vh 
    overflow-x hidden
    overflow-y scroll
    background-color #F4F4F4
    .top
        display flex
        flex-direction row
        vertical-align middle
        align-items center
        height 100rpx
        background-color #fff
        margin-bottom 20rpx
        div 
            flex 1
            text-align center
            display flex
            vertical-align middle
            align-items center
            justify-content center
            img 
                width 40rpx
                height 40rpx
                margin-right 10rpx
            span 
                font-size 26rpx
                color #a0a0a0
    .select-contents
        display flex
        flex-direction column
        margin-bottom 20rpx
        background-color #fff
        .title
            display flex
            flex-direction row
            justify-content space-between
            font-size 26rpx
            margin 30rpx 30rpx 10rpx
            color #414141
            .num
                color #a0a0a0
        .contents
            box-sizing border-box
            display flex
            flex-direction row
            justify-content space-between
            flex-wrap nowrap
            overflow-y scroll
            font-size 24rpx
            color #a0a0a0
            margin 30rpx
            &::-webkit-scrollbar
                display none
            .item
                display flex
                flex-direction column
                align-items left 
                border 2rpx solid #D9D9D9
                border-radius 6rpx
                margin-right 20rpx
                margin-bottom 10rpx
                padding 10rpx
                span 
                    margin 10rpx 0
                    width 280rpx
                    letter-spacing 2rpx
    .animeCard
        box-sizing border-box
        display flex
        flex-direction row
        background-color #fff
        padding 20rpx
        width 100vw
        .cover
            width 24vw
            img 
                width 154rpx
                height 210rpx
                border-radius 6rpx
        .info
            display flex
            flex-direction column
            position relative
            justify-content space-around
            width 76vw
            color #a0a0a0
            .title
                font-size 28rpx
                color #383838
            .play-status
                display flex
                flex-direction row
                font-size 24rpx
                vertical-align middle
                margin-bottom 10rpx
                span 
                    margin-right 20rpx
                img 
                    width 30rpx 
                    height 30rpx
                    margin-right 10rpx
            .update-status
                font-size 24rpx
            .intro
                width 70vw
                font-size 26rpx
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
            .score
                position absolute
                right 20rpx
                top 20rpx
                font-size 36rpx
                color #F7A72A
                span 
                    font-size 24rpx


</style>

