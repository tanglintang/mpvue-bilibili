<template>
  <div>
    <div class="title">
      <title-bar :title="title"></title-bar>
    </div>
    <div class="container">
      <div class="partition" v-for="item in partitionList"  :key="item">
        <img :src="url+item+'.png'" alt="">
        <span>{{item}}</span>
      </div>
    </div>
  </div>

</template>

<script>
import TitleBar from '@/views/TitleBar/TitleBar'

export default {
  components: {TitleBar},
  data() {
    return {
      title: '分区',
      partitionList: [],
      url:  '../../../static/images/'
    }
  },
  created() {
    this.partitionList = ['直播', '番剧', '动画', '国创', '音乐', '舞蹈', '游戏', '科技', '生活', '鬼畜', '时尚', '广告', '娱乐', '电影', '电视剧',]
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction row
    flex-wrap wrap
    text-align center
    vertical-align middle
    align-items center
    margin-top 20rpx
    .partition
      width 25%
      height 150rpx
      background-color #fff
      display flex
      flex-direction column
      align-items center
      margin 20rpx 0
      img 
        width 100rpx
        height 100rpx
      span
        display inline-block
        font-size 26rpx
        color #878787
        margin-top 10rpx
</style>

