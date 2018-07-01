<template>
  <div class="main">
    <div class="main-header">
      <title-bar></title-bar>
      <div class="" :class="{'fixed': fixed}">
        <tab-list :tabList="tabList"></tab-list>
        <div class="title">
        <div class="left condition">{{condition}}</div>
        <div class="right">
          <div class="Leaderboard">
            <i class="icon icon-lead"></i>排行榜
          </div>
          <div class="tag">
            <i class="icon icon-tag"></i>标签
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="container">
      <swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="circular" >
          <div class="swiper-s" v-for="(img, index) in imgUrls" :key="index">
            <swiper-item class="swiper-item">
              <image :src="img" class="slide-image"/>
            </swiper-item>
          </div>
      </swiper>
      <video-group :videos="videos">
        <!-- <video-card :videos="videos" /> -->
      </video-group>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request'
import {catchVideos} from '@/api/video.js'
import {catchTabList} from '@/api/tabList.js'
import {catchRes} from '@/api/catchRes.js'

import TitleBar from '@/views/TitleBar/TitleBar'
import TabList from '@/components/TabList/TabList'

import VideoGroup from '@/views/VideoGroup/VideoGroup'
import VideoCard from '@/views/VideoCard/VideoCard'

export default {
  data() {
    return {
      videos: [],
      tabList: [],
      imgUrls: [],
      condition: '综合',
      indicatorDots: false,
      autoplay: true,
      interval: 1000,
      circular: true,
    }
  },
  components: {
    TitleBar,
    TabList,
    VideoGroup,
    VideoCard
  },
  methods: {

  },
  onShow() {
    catchRes('tabList').then((res) => {
      this.tabList = res.tabList
    })

    catchRes('videos').then((res) => {
      Object.assign(this.videos, res.videos)
    })

    catchRes('swiperImg').then((res) => {
      Object.assign(this.imgUrls, res.swiperImg)
    })
  },
  mounted() {
    // console.log(this.videos)
  }
}
</script>

<style lang="stylus" scoped>
  .main 
    .fixed
      position fixed
      z-index 99
      top 0
    .title
      width 100vw
      height 100rpx
      display flex
      flex-direction row
      justify-content space-between
      flex-wrap nowrap
      vertical-align middle
      align-items center
      font-size 26rpx
      background-color #F4F4F4
      box-sizing border-box
      padding 0 20rpx
      .right
        display flex
        flex-direction row
        flex-wrap nowrap
        .Leaderboard, .tag
          display flex
          flex-direction row
          flex-wrap nowrap
          vertical-align middle
          align-items center
          justify-content space-between
          margin-left 30rpx
          .icon
            width 44rpx
            height 44rpx
            margin-right 8rpx
          .icon-lead
            background url('../../../static/images/lead.png')
            background-repeat no-repeat
            background-size contain
          .icon-tag
            background url('../../../static/images/tag.png')
            background-repeat no-repeat
            background-size contain
  .container 
    width 100vw
    height 1000px
    background-color #F4F4F4
    box-sizing border-box
    padding 0 20rpx
    .swiper-box
      width 100%
      .swiper-s
        border-radius 12rpx

      .swiper-item,.slide-image
        width 100%
        height 120px
        border-radius 12rpx

      .wx-swiper-dots
        appearance none
      .swiper-item
        margin-bottom 0
        padding-bottom 0

</style>

