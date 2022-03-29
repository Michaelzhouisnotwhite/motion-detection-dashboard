<template>
  <div style="background: #ffffff; padding: 20px">
    <div>
      <h2>报警设置</h2>
      <el-form
        ref="form"
        :model="form"
        label-width="auto"
        size="small"
        label-position="left"
      >
        <el-form-item label="报警开关">
          <el-switch v-model="form.isAlarm"></el-switch>
        </el-form-item>
        <el-form-item label="" size="small" v-if="form.isAlarm">
          <!-- <div class="block"> -->
          <span class="demonstration">报警阈值(帧)</span>
          <el-slider
            v-model="form.duration"
            :min="5"
            :max="20"
            :marks="marks"
            show-input
            :show-input-controls="false"
            input-size="mini"
          ></el-slider>
          <!-- </div> -->
        </el-form-item>
        <el-form-item label="短信提醒:" v-if="form.isAlarm">
          <el-switch v-model="form.isWarningViaMessage"></el-switch>
        </el-form-item>
        <el-form-item label="电话提醒" v-if="form.isAlarm">
          <el-switch v-model="form.isWarningViaTel"></el-switch>
        </el-form-item>
        <el-form-item label="检测敏感度">
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
  </div>
</template>

<script>
export default {
  name: "MyControl",
  data() {
    return {
      form: {
        isAlarm: true,
        isDetecting: true,
        duration: 15,
        filter: 0.5,
        isWarningViaMessage: true,
        isWarningViaTel: false,
      },
      marks: {
        5: "5 帧",
        10: "10 帧",
        15: "15 帧",
        // 20: "45 min",
        20: {
          style: {
            width: "50px",
          },
          label: "20 帧",
        },
      },
    };
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