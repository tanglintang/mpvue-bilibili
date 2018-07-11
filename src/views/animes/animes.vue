<template>
    <div>
       <anime-block :animes="showAnimes" :blockName="myAnime" @intoAnime="intoAnime"></anime-block>
       <anime-block :animes="animes" :blockName="advice" @intoAnime="intoAnime"></anime-block>
    </div>
</template>

<script>
import animeBlock from '@/components/animeBlock/animeBlock'
export default {
    components:{animeBlock},
    props: {
        animes: []
    },
    data() {
        return { 
            myAnime: '我的追番',
            advice: '番剧推荐',
            myAnimeList: [{aid: 'md6402'}, {aid: 'md3863'}, {aid: 'md2543'}, {aid: 'md6572'}]
        }
    },
    computed: {
        showAnimes() {
            return this.animes.filter(item => {
                return this.myAnimeList.find(ele => ele.aid == item.aid)
            }).slice(0, 3)
        }   
    },
    methods: {
        intoAnime(aid) {
            wx.navigateTo({ url: `../../pages/anime/main?aid=${aid}` })
        }
    }
}
</script>
