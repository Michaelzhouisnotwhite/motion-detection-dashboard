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
      <el-card class="box-card">
        <div style="display: flex; flex-wrap: wrap">
          <div class="text item">温度：<br />45C</div>
          <div class="text item">cpu: <br />45%</div>
          <div class="text item">gpu: <br />100%</div>
          <div class="text item">mem：<br />70%</div>
        </div>
      </el-card>
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
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 48%;
}
</style>