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
    },
    methods: {

    }
}
</script>
<style lang="stylus" scoped>
    .video-container 
        margin -20rpx 0

</style>

