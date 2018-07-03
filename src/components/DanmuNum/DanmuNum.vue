<template>
    <div class="danmu-num">
        <div class="icon danmu-icon"></div>
        <div class="num">{{getDanmuNum}}</div>
    </div>
</template>

<script>
export default {
    name: 'danmuNum',
    props: {
        danmuNum: Number,
    },
    computed: {
        getDanmuNum() {
            if (this.danmuNum > 10000) {
                return (this.danmuNum/10000).toFixed(1)+'万'
            } else {
               return this.danmuNum
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .danmu-num
        display flex
        flex-direction row
        margin-right 10rpx
        .danmu-icon
            background url('../../../static/images/danmu.png')
            background-repeat no-repeat
            background-size contain
            width 32rpx
            height 32rpx
            margin-right 10rpx

</style>
