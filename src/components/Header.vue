<template>
  <div class="header">
    <div class="self-info">
      <el-avatar size="medium" shape="circle" src="#" @error="errorHandler">
        <img
          alt="头像"
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
      家庭成员01
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