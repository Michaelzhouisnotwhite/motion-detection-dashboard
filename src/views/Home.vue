<template>
  <div>
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
    <video
      controls
      autoplay
      max-width="700"
      width="100%"
      height="400"
      class="video-box"
      v-if="player.isCamOn"
    >
      <source :src="player.src" type="video/mp4" />
    </video>
    <cam-setting @CamOnChange="CamOnChange"></cam-setting>
    <my-control></my-control>
  </div>
</template>

<script>
import Control from "./Control.vue";
import CamSetting from "@/components/Settings/CamSetting.vue";
export default {
  name: "MyHome",
  components: {
    MyControl: Control,
    CamSetting,
  },
  data() {
    return {
      player: {
        src: "http://127.0.0.1:8000/v/test_video.mp4",
        isCamOn: false,
      },
    };
  },
  methods: {
    CamOnChange(val) {
      this.player.isCamOn = val;
    },
  },
};
</script>

<style lang="less" scoped>
.video-box {
  background: black;
}
</style>