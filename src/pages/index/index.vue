<template>
  <div class="main">
    <div class="main-header">
      <title-bar></title-bar>
      <div class="" :class="{'fixed': fixed}">
        <tab-list :tabList="tabList" @changeTab="changeTab"></tab-list>
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
      <swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="circular" v-if="tabId=='2'">
          <div class="swiper-s" v-for="(img, index) in imgUrls" :key="index">
            <swiper-item class="swiper-item">
              <image :src="img" class="slide-image"/>
            </swiper-item>
          </div>
      </swiper>
      <div class="video-group">
        <video-card :videos="videos" v-if="tabId=='2'"/>
        <animes :animes="animes" v-if="tabId=='3'"></animes>
      </div>
    </div>
  </div>
</template>

<script>
import { getVideos, getSwiperImg, getAanimes } from '@/api/getData'

import TitleBar from '@/views/TitleBar/TitleBar'
import TabList from '@/components/TabList/TabList'

import VideoCard from '@/views/VideoCard/VideoCard'

import animes from '@/views/animes/animes'

export default {
  data() {
    return {
      videos: [],
      imgUrls: [],
      condition: '综合',
      indicatorDots: false,
      autoplay: true,
      interval: 1000,
      circular: true,
      tabId: '2',
      animes: [],
      tabList: [
          {
            "id": 1,
            "title": "直播"
          },
          {
            "id": 2,
            "title": "推荐",
            "active": true
          },
          {
            "id": 3,
            "title": "追番"
          },
          {
            "id": 4,
            "title": "干杯！世界杯"
          },
          {
            "id": 5,
            "title": "英雄联盟"
          }
      ]
    }
  },
  components: {
    TitleBar,
    TabList,
    VideoCard,
    animes
  },
  methods: {
    changeTab(id) {
      this.tabId = id
    }
  },

  async mounted() {
    this.tabId = '1'
    this.videos = await getVideos()
    this.imgUrls = await getSwiperImg()
    this.animes = await getAnimes()
    console.log(this.animes)
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
      height 260rpx
      border-radius 12rpx
      overflow hidden
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

