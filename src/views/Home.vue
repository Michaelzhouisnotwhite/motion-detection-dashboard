<template>
  <div style="width: 80%; margin: 0 auto">
    <!-- <video-player
      autoplay
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    > -->
    <!-- @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)" -->
    <!-- </video-player> -->
    <!-- <video :src="playerOptions.sources[0].src" type="video/mp4"/> -->
    <!-- <video
      controls
      autoplay
      max-width="700"
      width="100%"
      height="400"
      class="video-box"
      v-if="player.isCamOn"
    >
      <source :src="player.src" type="video/mp4" />
    </video> -->
    <div class="video-background">
      <img :src="player.src" alt="" class="video-box" v-if="player.isCamOn" />
    </div>
    <abnormal-result :isCamOn="player.isCamOn"></abnormal-result>
    <cam-setting @CamOnChange="CamOnChange"></cam-setting>
    <my-control></my-control>
  </div>
</template>

<script>
import Control from "./Control.vue";
import CamSetting from "@/components/Settings/CamSetting.vue";
import AbnormalResult from "@/components/AbnormalResult.vue";
export default {
  name: "MyHome",
  components: {
    MyControl: Control,
    CamSetting,
    AbnormalResult,
  },
  data() {
    return {
      player: {
        src: "http://127.0.0.1:8187/display",
        // src: "https://www.runoob.com/try/demo_source/mov_bbb.mp4",
        isCamOn: false,
      },
    };
  },
  methods: {
    CamOnChange(val) {
      this.player.isCamOn = val;
      }
    },
  
};
</script>

<style lang="less" scoped>
.video-box {
  background: black;
  text-align: center;
  margin: 0 auto;
  max-height: 500px;
  max-width: 70%;
}
.video-background {
  background: black;
  text-align: center;
}
</style>