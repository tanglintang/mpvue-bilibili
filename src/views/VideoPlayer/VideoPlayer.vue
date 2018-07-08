<template>
    <div class="video-player" >
        <video class="video" :src="videoUrl" ref="myVideo" id="myVideo" :danmu-list="danmuList" enable-danmu danmu-btn>
            <cover-view class="controls">
                <cover-view class="play" @click="play" v-if="showPlayBtn">
                </cover-view>
                <cover-view class="pause" @click="pause">
                </cover-view>
            </cover-view>
            <transition-group tag="ul" name="slide" class="danmu-container">
                <li v-for="(item, index) in danmuList" :key="index" class="danmu-item" v-if="playing">
                {{item.text}}
                </li>
            </transition-group>
        </video>
        <div class="damnu-input">
            <input type="text" placeholder="发射弹幕" :class="{'is-input': input}" class="inputDanmu" @focus="getFocus" @blur="loseFocus" ref="danmuInput" @confirm="emitDanmu($event)" v-model="value" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
    props: {
        videoUrl: String,
    },
    data() {
        return {
            input: false,
            value: '',
            startPlay: '',
            playing: false,
            showPlayBtn: true,

            // 弹幕
            totalTime: 0,
            defaultConfig: {
                startTime: 0,
                top: 0,
                size: 26,
                color: '#fff',
                text: '测试弹幕',
                speed: '10s',
            },
            danmuList: [],

            videoCtx: undefined,
        }
    },
    methods: {
        emitDanmu(e) {
            const input = e.target.value
            this.videoCtx.sendDanmu({
                text: input,
                color: '#d1d1d1',
            })
            // console.log(input)
        },
        getFocus() {
            this.input = true
        },
        loseFocus() {
            this.input = false
            this.value = ''
        },
        // formatTime(time) {
        //     const temp = time.split(':').reverse()
        //     let seconds = temp[0] ? temp[0] : 0
        //     let minutes = temp[1] ? temp[1]*60 : 0
        //     let hours = temp[2] ? temp[2]*60*60 : 0
        //     const total = Number(seconds) + Number(minutes) + Number(hours)
        //     return total
        // },

        play() {
            this.videoCtx.play()
            this.playing = true
            this.showPlayBtn = false
            // console.log('play')
        },
        pause() {
            this.playing = !this.playing
            this.playing ? this.videoCtx.play() : this.videoCtx.pause()
            // console.log(this.playing)
        }
    },

    beforeMount() {
        // const video = wx.getStorageSync("videoInfo")
        // this.videoUrl = video.videoUrl
        // console.log(this.videoUrl)
        this.danmuList.push(this.defaultConfig)
        // this.totalTime = this.formatTime(video.duration)
        this.videoCtx = wx.createVideoContext('myVideo')
    },
    updated() {
        // console.log(this.videoUrl)
    }
}
</script>
<style lang="stylus" scoped>
    .video-player
        width 100vw
        height auto
        display flex
        flex-direction column
        justify-content flex-start
        vertical-align middle
        align-items center
        .video
            width 100vw

            .play,.pause
                display inline-block
                position absolute

            .play
                height 60rpx
                width 60rpx
                left 50%
                top 50%
                transform translate(-50%, -50%)
            .pause
                height 40rpx
                width 40rpx
                left 30rpx
                bottom 30rpx
        
        .damnu-input
            background-color #333333
            width 100vw
            box-sizing border-box
            display flex
            flex-direction row
            justify-content space-around

            input 
                appearance none
                outline none
                border none
            .inputDanmu
                height 60rpx
                width 80%
                background-color #5B5B5B
                border-radius 40rpx
                margin 10rpx auto
                font-size 26rpx
                padding 0 20rpx
            .emitDanmu
                width 20%
                height 60rpx
            
            .is-input
                background-color #fff
                cursor text

        .danmu-container
            position absolute
            width 100vw
            height 100%
            // background-color #000
            // opacity 0.8
            z-index 9
            .danmu-item
                position absolute
                right 0
                top 50rpx
                color #fff
                transform translateX(100%)

</style>
