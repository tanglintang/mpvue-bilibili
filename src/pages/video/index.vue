<template>
  <div class="video-container">
      <video-player :videoUrl="videoUrl" />
      <div class="body">
        <div class="tabList">
          <tab-list :tabList="tabList" @changeTab="changeTab"></tab-list>
        </div>
        <introduce :upInfo="upInfo" v-if="tabId==1" />
        <t-comment :total="total" :comments="comments" v-if="tabId==2" @handleZan="handleZan" @handleCai="handleCai"></t-comment>
      </div>
  </div>
</template>

<script>
import VideoPlayer from '@/views/VideoPlayer/VideoPlayer'
import Introduce from '@/components/Introduce/Introduce'
import TabList from '@/components/TabList/TabList'
import TComment from '@/components/comment/comment'

import { getUpInfo, getComments } from '@/api/getData'

export default {
  data() {
    return {
      tabList: [
        {
          id: 1,
          title: '简介',
          active: true
        },
        {
          id: 2,
          title: '评论'
        }
      ],
      uid: undefined,
      upInfo: {},
      upList: [],
      tabId: 1,
      aid: undefined,
      comments: [],
      total: 0,
    }
  },
  components: {VideoPlayer, Introduce, TabList, TComment},

  methods: {
    changeTab(id) {
      this.tabId = id
    },
    handleZan(target, index, zan) {
      target.like = zan
      if (zan) {
        target.zan++
      } else {
        target.zan--
      }
      this.comments[index] = target
    },
    handleCai(target, index, cai) {
      target.dislike = cai
      if (cai) {
        target.cai++
      } else {
        target.cai--
      }
      this.comments[index] = target
    }
  },
  onLoad(options) {
    this.uid = options.uid
    this.aid = options.aid
  },
  async mounted() {
    this.changeTab(1)
    this.tabList.forEach(item => {
      item.active = false
    })
    this.tabList[0].active = true
    this.upInfo = await getUpInfo(this.uid)

    const video = wx.getStorageSync("videoInfo")
    this.videoUrl = video.videoUrl

    this.comments = await getComments(this.aid)

    this.total = this.comments.length
  },

}
</script>

<style lang="stylus" scoped>
  .body
    box-sizing border-box
    width 100vw
    height 500rpx
    .tabList
      width 100vw
      box-shadow 0 2rpx 4rpx 4rpx #FAFAFA
        
</style>

