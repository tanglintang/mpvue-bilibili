<template>
  <div class="video-container">
      <video-player />
      <div class="body">
        <div class="tabList">
          <tab-list :tabList="tabList"></tab-list>
        </div>
        <introduce :upInfo="upInfo" />
      </div>
  </div>
</template>

<script>
import VideoPlayer from '@/views/VideoPlayer/VideoPlayer'
import Introduce from '@/components/Introduce/Introduce'
import TabList from '@/components/TabList/TabList'

import {catchRes} from '@/api/catchRes.js'
import request from '@/utils/request'

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
      upList: []
    }
  },
  components: {VideoPlayer, Introduce, TabList, },

  methods: {

  },
  onLoad(options) {
    this.uid = options.uid
  },
  onShow() {
    request.get('/upInfo').then((res) => {
      console.log(res)
        // res.upInfo.forEach((item, index) => {
        //   if (item.uid == this.uid) {
        //     Object.assign(this.upInfo, item)
        //   }
        // })
    })
    
  },
  mounted() {
    // console.log(this.upInfo)
  }
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

