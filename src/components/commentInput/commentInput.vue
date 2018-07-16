<template>
    <div class="main">
        <!-- <div class="left face-icon">
            <img src="../../../static/images/emoji.png" alt="">
        </div> -->
        <input type="text" placeholder="说点什么吧" v-model="value">
        <div class="right send" @click="sendComment">
            <img src="../../../static/images/send.png" alt="">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        sendComment () {
            if (this.value.trim()) {
                this.$emit('sendComment', this.value)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.main
    background-color #FAFAFA
    height 100rpx
    display flex
    flex-direction row
    align-items center
    vertical-align middle
    font-size 28rpx
    box-sizing border-box
    .left img, .right img
        width 60rpx
        height 60rpx
    input 
        appearance none
        outline none
        border none
        width 80%
        height 60rpx
        background-color #F4F4F4
        border 2rpx solid #EAEAEA
        border-radius 60rpx
        margin 0 auto
        font-size 26rpx
        padding 0 20rpx
</style>

