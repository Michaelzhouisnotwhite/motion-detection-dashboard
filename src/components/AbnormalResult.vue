<template>
  <div style="display: flex; justify-content: space-between">
    <div
      style="
        flex: 0 0 65%;
        background: #ffffff;
        padding: 20px;
        box-sizing: border-box;
      "
    >
      <h2>摄像头信息</h2>
      <!-- <el-card class="box-card"> -->
      <div style="display: flex; flex-wrap: wrap">
        <div class="text item">温度：<br />45C</div>
        <div class="text item">cpu: <br />45%</div>
        <div class="text item">gpu: <br />100%</div>
        <div class="text item">mem：<br />70%</div>
      </div>
      <!-- </el-card> -->
    </div>
    <div
      style="
        flex: 0 0 30%;
        background: #ffffff;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      "
    >
      <el-image style="width: 100%" :src="url" fit="scale-down"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seed:0.1,
      url: "https://127.0.0.1:8187/catched",
    };
  },
  methods: {
    pollData(){
      this.polling = setInterval(()=>{
        // get your datat here
        this.$forceUpdate()
      }, 1000)
    }
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 48%;
}
</style>