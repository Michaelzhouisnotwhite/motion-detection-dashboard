<template>
  <div>
    <h2>基础设置</h2>
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
      size="small"
      label-position="left"
    >
      <el-form-item label="开启检测">
        <el-switch v-model="form.isDetecting"></el-switch>
      </el-form-item>
      <el-form-item label="录制">
        <el-switch v-model="form.isRecording"></el-switch>
      </el-form-item>
      <el-form-item label="" size="small" v-if="form.isRecording">
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
      <el-form-item label="过滤度">
        <el-slider
          v-model="form.filter"
          :min="0"
          :max="1"
          :step="0.01"
          show-input
          :show-input-controls="false"
          input-size="mini"
        ></el-slider>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
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
    floatFormater(val) {
      return val / 100;
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