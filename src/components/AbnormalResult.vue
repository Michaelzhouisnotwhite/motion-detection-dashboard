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
      <el-image
        style="width: 100%"
        class="c-img"
        :src="url"
        fit="scale-down"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seed: 0.1,
      imgUrl: "",
      url: "http://127.0.0.1:8187/catched",
    };
  },
  props: {
    isCamOn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getImg() {
      // 需要刷新的固定图片地址
      this.url = "http://127.0.0.1:8187/catched";
      // 每次刷新添加上随机数
      this.url = this.url + "?" + Math.random();
      // console.log(this.imgUrl);
    },
    pollData() {
      this.polling = setInterval(() => {
        // get your datat here
        // this.$forceUpdate();
        if (this.isCamOn) {
          this.getImg();
        }
      }, 1000);
    },
  },
  created() {
    this.pollData();
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 48%;
}
</style>