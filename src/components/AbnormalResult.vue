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
        <div class="text item">温度：<br/>45C</div>
        <div class="text item">cpu: <br/>45%</div>
        <div class="text item">gpu: <br/>100%</div>
        <div class="text item">mem：<br/>70%</div>
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
      <el-image
          style="width: 100%"
          class="c-img"
          :src="imgUrl"
          fit="scale-down"
          @dblclick="imgDbClick"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "http://127.0.0.1:8187/caught",
    };
  },
  props: {
    isCamOn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    imgDbClick() {
      this.$http.post("/clear_cache")
          .catch((err) => {
            console.log(err);
          })
          .then((res) => {
            console.log(res);
          });
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 48%;
}

.c-img:hover {
  cursor: hand;
}
</style>