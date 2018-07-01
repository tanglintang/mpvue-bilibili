<template>
    <div class="video-container">
        <video-card :videos="videos" />
    </div>
</template>
<script>
import VideoCard from '@/views/VideoCard/VideoCard'

export default {
    components: {VideoCard},
    props: {
        videos: Array
    },
    mounted() {
        console.log(this.videos)
    }
}
</script>
<style lang="stylus" scoped>
    .video-container 
        margin -40rpx 0
        // width 100%
        // box-sizing border-box
        // display flex
        // flex-direction row
        // flex-wrap wrap
        // vertical-align middle
        // justify-content space-between
</style>

