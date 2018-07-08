<template>
    <div class="up-info">
        <div class="left up">
            <div class="up-avatar">
                <img class="avatar" :src="avatar" />
            </div>
            <div class="up-right">
                <div class="up-name">{{upName}}</div>
                <div class="fans">{{fans}}粉丝</div>
            </div>
        </div>
        <div class="right follow-btn">{{follow?'已关注':'+ 关注'}}</div>
    </div>
</template>
<script>

export default {
    name: 'UpInfo',
    props: {
        upInfo: {},
    },
    data() {
        return {
            upInfo: {},
            upName: '',
            avatar: {},
            fans: 0,
            follow: false,
        }
    },
    beforeUpdate() {
        this.upName = this.upInfo.uname
        this.avatar = this.upInfo.avatar
        this.fans = this.upInfo.fans
    }
}
</script>
<style lang="stylus" scoped>
    .up-info
        box-sizing border-box
        margin 0
        padding 0
        height 70rpx
        margin 30rpx
        display flex
        flex-direction row
        justify-content space-between
        vertical-align middle
        align-items center
        .left
            display flex
            flex-direction row
            vertical-align middle
            align-items center
            .up-right
                display flex
                flex-direction column
                letter-spacing 2rpx
                margin-left 26rpx
                .up-name
                    font-size 26rpx
                    color #F97497
                    display inline-block
                    height 30rpx
                    margin-bottom 10rpx
                .fans
                    display inline-block
                    font-size 24rpx
                    height 30rpx
                    color #A0A0A0

            .up-avatar
                width 70rpx
                height 70rpx
                .avatar  
                    width 100%
                    height 100%
                    display inline-block
                    border-radius 50%

        .follow-btn
            background-color #F97497
            color #fff
            font-size 26rpx
            padding 10rpx 20rpx
            border-radius 10rpx

</style>
