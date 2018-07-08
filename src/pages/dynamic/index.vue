<template>
  <div class="dynamic">
    <div class="title-bar">
      <title-bar :title="title"></title-bar>
      <tab-list :tabList="tabList"  @changeTab="changeTab"></tab-list>
    </div>

  </div>
</template>

<script>
import TitleBar from '@/views/TitleBar/TitleBar'
import TabList from '@/components/TabList/TabList'

export default {
  components: {TitleBar, TabList,},
  data() {
    return {
      title: '动态',
      tabList: [{ id: 1, title: '视频' }, { id: 2, title: '综合', "active": true}, {id: 3, title: '热门'}]
    }
  },
  methods: {
    changeTab(id) {
      // console.log(id)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .dynamic
    width 100vw
    height 100vh
</style>

