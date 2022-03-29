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
          v-model="form.duration"
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
        isDetecting: true,
        duration: 15,
        filter: 0.5,
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
    camOnChange() {
      this.$emit("CamOnChange", this.form.isCamOn);
    },
    floatFormater(val) {
      return val / 100;
    },
  },
  mounted() {},
  updated() {},
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