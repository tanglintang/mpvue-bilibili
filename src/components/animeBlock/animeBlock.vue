<template>
    <div class="main">
        <div class="block-head">
            <div class="block-name">
                <img :src="url+blockName+'.png'" alt="">
                <span>{{blockName}}</span>
            </div>
            <div class="more">查看全部 ></div>
        </div>
        <div class="block-bd">
            <div class="anime" v-for="item in animes" :key="item" @click="intoAnime(item.aid)">
                <img :src="item.cover" >
                <span class="title">{{item.name}}</span>
                <span class="totalNum" v-if="item.status=='完结'">全{{item.num}}话</span>
                <span class="updateNum" v-if="item.status=='更新'">更新至第{{item.num}}话</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        animes: Array,
        blockName: String
    },
    data() {
        return {
            url: '../../../static/images/'
        }
    },
    methods: {
        intoAnime(aid) {
            this.$emit('intoAnime', aid)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .main 
        margin 0
        padding 0
        box-sizing border-box
        margin 20rpx -20rpx
        background-color #fff
        .block-head
            display flex
            flex-direction row
            justify-content space-between
            vertical-align middle
            align-items center
            padding 34rpx 26rpx
            letter-spacing 2rpx
            .block-name
                display flex
                align-items center
                vertical-align middle
                font-size 28rpx
                img 
                    display inline-block
                    width 54rpx
                    height 54rpx
                    margin-right 18rpx
                    padding-bottom 10rpx
                span 
                    display inline-block
                    line-height 1.5
            .more
                font-size 24rpx
                color #a0a0a0
        .block-bd
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-between
            padding 0 24rpx
            .anime
                display inline-block
                display flex
                flex-direction column
                background-color #fff
                overflow hidden
                img 
                    display inline-block
                    width 220rpx
                    height 300rpx
                    border-radius 6rpx
                .title
                    font-size 26rpx
                    width 220rpx
                    white-space wrap
                    overflow hidden
                    padding 26rpx 0 20rpx
                .totalNum, .updateNum
                    font-size 24rpx
                    color #a0a0a0
                    padding-bottom 26rpx
</style>

