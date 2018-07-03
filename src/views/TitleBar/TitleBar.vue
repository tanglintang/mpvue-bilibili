<template>
    <div class="titleBar-container">
        <div class="titleBar header fixed avatarBox">
            <div class="showSideBar-btn"></div>
            <div class="avatar-btn"></div>
        </div>
        <div class="titleBar center">
            <div class="title" v:if="title">{{title}}</div>
            <div class="searchBox" v:if="!title">
                <i class="icon-search"></i>
                <input type="text" class="search" disabled />
            </div>
        </div>
        <div class="titleBar footer iconList">
            <div class="icon icon-game"></div>
            <div class="icon icon-download"></div>
            <div class="icon icon-msg"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TitleBar',
    props: {
        title: String,

    },
    components: {
    }
}
</script>
<style lang="stylus" scoped>
    .titleBar-container
        width 100%
        overflow hidden
        height 120rpx
        background-color #F97497
        display flex
        flex-direction row
        vertical-align middle
        justify-content space-between
        align-items center
        position relative
        box-sizing border-box
        .titleBar
            font-size 32rpx
            color #fff
            overflow hidden
            &.center .title
                position absolute
                left 0
                top 0
                margin-left 50%
                transform translateX(-50%)
                height 120rpx
                line-height 120rpx
                white-space nowrap
            &.center .searchBox
                background-color #E5678C
                height 60rpx
                border-radius 40rpx
                display flex
                align-items center
                width auto
            &.center input 
                appearance none
                outline none
            &.center .icon-search {
                position absolute
                display inline-block
                background url('../../../static/images/search.png')
                background-repeat no-repeat
                background-size contain
                width 40rpx
                height 40rpx
                margin-left 16rpx
            }
        .header
            display flex
            flex-direction row
            justify-content flex-start
            align-items center
            vertical-align middle
            .showSideBar-btn
                width 42rpx
                height 32rpx
                background url('../../../static/images/menu.png')
                background-size contain
                background-repeat no-repeat
                margin-left -20rpx
                margin-right 20rpx
            .avatar-btn
                background url('https://static.hdslb.com/images/akari.jpg')
                background-repeat no-repeat
                background-size contain
                width 48rpx
                height 48rpx
                border-radius 50%
                margin-right 20rpx

        .footer.iconList
            display flex
            flex-direction row
            justify-content space-around
            flex-wrap nowrap
            vertical-align middle
            align-items center

            .icon
                width 46rpx
                height 46rpx
                display inline-block
                margin 0 26rpx
                background-repeat no-repeat
            .icon-game
                background url('../../../static/images/game.png')
                background-repeat no-repeat
                background-size contain
            .icon-download
                background url('../../../static/images/download.png')
                background-repeat no-repeat
                background-size contain
            .icon-msg
                background url('../../../static/images/msg.png')
                background-repeat no-repeat
                background-size contain
</style>

