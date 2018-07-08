<template>
    <!-- <scroll-view scroll-x="true" class="tablist row">
        <div class="tab" :class="{'active': item.active}"  v-for="(item, index) in tabList" :key="index" @click="changeTab(index, id, item)">{{item.title}}</div>
    </scroll-view> -->
    <div class="tablist row">
        <div class="tab" :class="{'active': item.active}"  v-for="(item, index) in tabList" :key="index" @click="changeTab(index, item.id, item)">{{item.title}}</div>
    </div>
</template>

<script>
export default {
    name: 'TabList',
    props: {
        tabList: Array,
    },
    data() {
        return {
        }
    },
    mounted() {
        
    },
    methods: {
        changeTab(index, id, item) {
            this.$nextTick(function() {
                this.tabList.forEach(item => {
                    this.$set(item, 'active', false)
                })
                this.$set(item, 'active', true)
            })
            this.$emit('changeTab', id)
        }
    }

}
</script>
<style lang="stylus" scoped>
    .tablist.row
        width 100vw
        box-sizing border-box
        white-space nowrap
        padding: 30rpx 0 0
        background-color #fff
        display flex
        flex-direction row
        justify-content space-around
        box-shadow 0 2rpx 4rpx 4rpx #FAFAFA

        .tab
            text-align center
            display inline-block
            font-size 28rpx
            white-space nowrap
            letter-spacing 2rpx
            height 60rpx
            font-family Times,sans-serif

        .active
            color #F97497
            border-bottom 4rpx solid #F97497
</style>
