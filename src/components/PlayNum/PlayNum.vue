<template>
    <div class="play-num">
        <div class="icon play-icon"></div>
        <div class="num">{{getPlayNum}}</div>
    </div>
</template>

<script>
export default {
    name: 'playNum',
    props: {
        playNum: Number,
    },
    computed: {
        getPlayNum() {
            if (this.playNum > 10000) {
                return (this.playNum/10000).toFixed(1)+'万'
            } else {
               return this.playNum
            }
        }
    },
    mounted() {
        // console.log(this.playNum)
    }
}
</script>
<style lang="stylus" scoped>
    .play-num
        display flex
        flex-direction row
        margin-right 10rpx
        .play-icon
            background url('../../../static/images/play.png')
            background-repeat no-repeat
            background-size contain
            width 32rpx
            height 32rpx
            margin-right 10rpx

</style>
