<template>
    <div class="hello">
      <d-player ref="player" @play="play" :logo="logo" :lang="lang" :video="video" :contextmenu="contextmenu"></d-player>
    </div>
</template>

<script>
import VueDPlayer from './VueDPlayerHls';
import logoImg from '@/assets/logo.png';
export default {
 name: 'HelloWorld',
 data () {
  return {
   video: {
     quality: [{
        name: '240P',
        url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
     },{
        name: '360P',
        url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
     },{
        name: '720P',
        url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
     }],
     pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
     defaultQuality: 1,
     thumbnails: logoImg,
     type: 'hls'
    },
    lang: 'zh-cn',
    logo: logoImg,
    autoplay: false,
    player: null,
    contextmenu: [
      {
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      },{
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      },{
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      }
    ]
  }
 },
 components: {
  'd-player': VueDPlayer
 },
 methods: {
  play() {
    // console.log('开始播放...')
   }
 },
 mounted() {
  // this.player = this.$refs.player.dp;
  // console.log(this.player);
  // var hls = new Hls();
  // hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
  // hls.attachMedia(this.player);
 }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
    width: 750px;
    margin: 0 auto 50px;
}
@media only screen and (max-width: 640px){
  .hello{
      width: 100%;
  }
}
</style>
