<template>
  <div style="width: 80%; margin: 0 auto">
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
        isCamOn: false,
      },
    };
  },
  methods: {
    CamOnChange(val) {
      this.player.isCamOn = val;
    },
     async recoverSettings() {
      try {
        const { data, status } = await this.$http.get("/recover_settings");
        console.log(data, status);
        this.player.isCamOn = data.isCamOn;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created () {
    this.recoverSettings();
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