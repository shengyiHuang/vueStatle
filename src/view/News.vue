<template>
  <div>
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { news } from "@/utils/const";

export default {
  name: "News",
  props: {
    msg: String
  },
  data() {
    return {
      images: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3971356495,3339395545&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593751241268&di=b14a1ebfa1b15c19a75f254379198c33&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1770957188%2C1469196463%26fm%3D214%26gp%3D0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=327708996,1338600091&fm=26&gp=0.jpg"
      ]
    };
  },
  mounted: function() {
    const parm = {
      uris: ['magnet:?xt=urn:btih:63ca2b9d8573ceaba641cc65b6c52be1b48f5180&dn=[BD影视分享bd-film.cc]为黛西小姐开车.Driving.Miss.Daisy.1989.BD1080P.国英双语.中英双字.mp4&tr=http://h4.trakx.nibba.trade:80/announce&tr=http://anisource.spb.ru:80/announce&tr=http://asnet.pw:2710/announce&tr=http://share.camoe.cn:8080/announce&tr=http://grifon.info:80/announce&tr=http://t.nyaatracker.com:80/announce&tr=http://tr.cili001.com:8070/announce&tr=http://npupt.com:80/announce.php&tr=https://trackerslist.com/best.txt&tr=http://t.overflow.biz:6969/announce&tr=http://t1.pow7.com:80/announce&tr=http://siambit.org:80/announce.php&tr=http://open.acgnxtracker.com:80/announce&tr=http://denis.stalker.h3q.com:80/announce&tr=http://denis.stalker.h3q.com:80/announce.php&tr=http://tr.kxmp.cf:80/announce&tr=http://gshk.happy-host.com/test:80/announce.php&tr=http://93.92.64.5/announce&tr=http://servandroidkino.ru:80/announce&tr=http://open.trackerlist.xyz:80/announce&tr=http://pt.lax.mx:80/announce'], 
      outs: [], 
      options: {
        dir: "/Users/huangshengyi/Downloads",
        split: 64
      }
    }
    this.$store
      .dispatch("news/addUri",  parm)
      .then(res => {
        console.log(res);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe {
  height: 250px;
}
.swipe img {
  width: 100%;
  height: 100%;
}
</style>
