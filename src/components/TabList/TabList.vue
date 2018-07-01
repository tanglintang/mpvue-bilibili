<template>
    <scroll-view scroll-x="true" class="tablist row">
        <div class="tab" :class="{'active': item.active}"  v-for="(item, index) in tabList" :key="index" @click="changeTab(index, id, item)">{{item.title}}</div>
    </scroll-view>
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
        }
    }

}
</script>
<style lang="stylus" scoped>
    .tablist.row
        overflow-x scroll
        overflow-y hidden 
        width 100vw
        white-space nowrap
        padding: 20rpx 20rpx 0
        background-color #fff
        &::-webkit-scrollbar 
            display none
        .tab
            display inline-block
            font-size 28rpx
            margin-right 60rpx
            white-space nowrap
            letter-spacing 2rpx
            height 60rpx
            font-family Times,sans-serif

        .active
            color #F97497
            border-bottom 4rpx solid #F97497
        
</style>
