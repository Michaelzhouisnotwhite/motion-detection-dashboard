/* eslint-disable no-empty */
<template>
  <div style="background: #ffffff; padding: 20px; margin: 20px 0">
    <h2>基础设置</h2>
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
      size="small"
      label-position="left"
    >
      <el-form-item label="开启摄像头">
        <el-switch v-model="form.isCamOn" @change="camOnChange"></el-switch>
      </el-form-item>
      <el-form-item label="开启检测" v-if="form.isCamOn">
        <el-switch v-model="form.isDetecting"></el-switch>
      </el-form-item>
      <el-form-item label="录制" v-if="form.isCamOn">
        <el-switch v-model="form.isRecording"></el-switch>
      </el-form-item>
      <el-form-item
        label=""
        size="small"
        v-if="form.isRecording && form.isCamOn"
      >
        <!-- <div class="block"> -->
        <span class="demonstration">视频时长(min)</span>
        <el-slider
          v-model="form.video_duration"
          :min="5"
          :max="60"
          :marks="marks"
          show-input
          :show-input-controls="false"
          input-size="mini"
        ></el-slider>
        <!-- </div> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        isCamOn: false,
        isRecording: true,
        isDetecting: false,
        video_duration: 15,
      },
      marks: {
        5: "5 min",
        15: "15 min",
        30: "30 min",
        45: "45 min",
        60: {
          style: {
            width: "50px",
          },
          label: "60 min",
        },
      },
    };
  },
  methods: {
    freshPic() {},
    async recoverSettings() {
      try {
        const { data, status } = await this.$http.get("/recover_settings");
        console.log(data, status);
        this.form.isCamOn = data.isCamOn;
        this.form.isDetecting = data.isDetecting ;
      } catch (err) {
        console.log(err);
      }
    },
    camOnChange() {
      this.$emit("CamOnChange", this.form.isCamOn);
    },
    floatFormatter(val) {
      return val / 100;
    },
    async sendCamSettings(val) {
      try {
        const { data, status } = await this.$http.post("/dis-settings", val);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    // await this.$nextTick();
    this.recoverSettings();
    this.$nextTick(()=>{this.camOnChange()})
  },
  mounted() {},
  updated() {},
  watch: {
    form: {
      handler(newValue, oldValue) {
        // console.log(newValue);
        this.sendCamSettings(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.el-form {
  margin-top: 12px;
  margin-left: 24px;
}

.el-slider {
  width: 500px;

  .el-input-number--mini {
    width: 50px;
  }
}
</style>