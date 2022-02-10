<template>
  <div class="header">
    <div class="self-info">
      <el-avatar size="medium" shape="circle" src="#" @error="errorHandler">
        <img alt="头像" src="@/assets/unLoadedAvatar.png" />
      </el-avatar>
      &nbsp;用户01
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    errorHandler() {
      return true;
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  // margin-right: 12px;
  text-align: right;
  // justify-content: center; /*水平居中*/
  // align-items: center; /*垂直居中*/
  cursor: pointer;
  // box-shadow: 10px 10px 5px #888888;
}
.self-info {
  width: max-content;
  position: absolute;
  right: 12px;
}
.el-avatar {
  vertical-align: middle;
  display: inline-block;
}
</style>