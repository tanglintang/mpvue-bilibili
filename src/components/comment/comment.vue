<template>
    <div class="comment">
        <div class="title-num">评论({{total}})</div>
        <div class="comment-block" v-for="(item, index) in comments" :key="index" >
            <div class="left">
                <div class="avatar">
                    <img :src="item.cAvatar" alt="">
                </div>
            </div>
            <div class="right">
                <div class="hd">
                    <span class="name">{{item.cName}}</span>
                    <img :src="'../../../static/images/lv' + item.level + '.png'" alt="" class="level">
                </div>
                <div class="floor">
                    <span class=""># {{index+1}}</span>
                    <span class="date">{{item.cTime}}</span>
                </div>
                <div class="content">
                    {{item.comment}}
                </div>
                <div class="options">
                    <div class="zan" @click="handleZan(item, index)">
                        <img :src="item.like?zan_red:zan_gray" alt="">
                        <span :style="{color: item.like?'red':''}">{{item.zan}}</span>
                    </div>
                    <div class="cai" @click="handleCai(item, index)">
                        <img :src="item.dislike?cai_red:cai_gray" alt="">
                        <span :style="{color: item.dislike?'red':''}">{{item.cai}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comments: Array,
        total: Number,
    },
    data() {
        return {
            zan: false,
            cai: false,
            zan_gray: '../../../static/images/zan10.png',
            zan_red: '../../../static/images/zan11.png',
            cai_gray: '../../../static/images/cai10.png',
            cai_red: '../../../static/images/cai11.png',
        }
    },
    mounted() {
    },
    methods: {
        handleZan(target, index) {
            this.zan = !this.zan
            this.$emit('handleZan', target, index, this.zan)
        },
        handleCai(target, index) {
            this.cai = !this.cai
            this.$emit('handleCai', target, index, this.cai)
        },
        getFloor(index) {
            return index
        }
    },
}
</script>

<style lang="stylus" scoped>
    .comment
        width 100%
        height 500rpx
        .title-num
            font-size 28rpx
            margin 30rpx 0 0 30rpx
        .comment-block
            display flex
            flex-direction row
            vertical-align top
            justify-content space-between
            padding 30rpx
            border-bottom 2rpx solid #F4F4F4
            .left
                .avatar 
                    margin-right 30rpx
                    margin-top 6rpx
                    img 
                        width 60rpx
                        height 60rpx
                        border-radius 50%
                        background-color skyblue
            .right
                display flex
                flex-direction column
                justify-content space-between
                .hd 
                    font-size 26rpx
                    color #808080
                    display flex
                    align-items center
                    vertical-align middle
                    img 
                        display inline-block
                        width 50rpx
                        height 50rpx
                        margin-left 30rpx
                        padding-top 6rpx
                .floor
                    font-size 24rpx
                    color #BFBFBF
                    margin 16rpx 0
                    .date
                        margin-left 20rpx
                .content
                    font-size 26rpx
                    color #3D3D3D
                    margin-bottom 16rpx
                    letter-spacing 2rpx
                .options 
                    display flex
                    flex-direction row
                    justify-content flex-start
                    vertical-align middle
                    align-items center
                    margin-right 20rpx
                    font-size 24rpx
                    color #808080
                    .zan, .cai
                        margin-right 40rpx
                        display flex
                        align-items center

                    img 
                        width 40rpx
                        height 40rpx
</style>

