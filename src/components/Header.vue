<template>
  <div class="header">
    <!-- <el-breadcrumb class="bread-cum-left" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb> -->
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
  name: "MyHeader",
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
// .bread-cum-left{
//     width: 580px;
//     height: 48px;
//     margin-left: 0;
//     background:#fff;
//     display: flex;

// }
</style>