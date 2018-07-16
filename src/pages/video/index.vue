<template>
  <div class="video-container">
      <div class="player">
        <video-player :videoUrl="videoUrl" />
      </div>
      <div class="tabList">
        <tab-list :tabList="tabList" @changeTab="changeTab"></tab-list>
      </div>
      <div class="body">
        <introduce :upInfo="upInfo" v-if="tabId==1" />
        <t-comment :total="total" :comments="comments" v-if="tabId==2" @handleZan="handleZan" @handleCai="handleCai"></t-comment>
      </div>
      <div class="comment_input" v-if="tabId==2">
          <comment-input @sendComment="sendComment"></comment-input>
      </div>
  </div>
</template>

<script>
import VideoPlayer from '@/views/VideoPlayer/VideoPlayer'
import Introduce from '@/components/Introduce/Introduce'
import TabList from '@/components/TabList/TabList'
import TComment from '@/components/comment/comment'
import commentInput from '@/components/commentInput/commentInput'

import { getUpInfo, getComments } from '@/api/getData'
import util from '@/utils/index.js'

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
  components: {VideoPlayer, Introduce, TabList, TComment, commentInput},

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
    },
    sendComment(value) {
      const date = util.formatTime(new Date()).split(' ')[0]
      const temp = {
        aid: this.aid,
        cName: 'tang',
        comment: value,
        cTime: date,
        cAvatar: 'https://i0.hdslb.com/bfs/face/4c7dd84f2d2cda4a91266e7015eab88cadd37c44.jpg@100Q.webp@128w_128h_100Q_1c.webp',
        zan: 0,
        cai: 0,
        level: 6
      }
      this.comments = [temp, ...this.comments]
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
.video-container
  height 100vh
  width 100vw
  box-sizing border-box
  overflow hidden
  position relative
  .tabList
    width 100vw
    box-shadow 0 2rpx 4rpx 4rpx #FAFAFA
  .body
    overflow-y auto
    height 500rpx
  .comment_input
    width 100vw
    position absolute
    bottom 0
    left 0
    right 0
</style>

