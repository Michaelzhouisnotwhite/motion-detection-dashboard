<template>
  <el-container class="container">
    <el-header class="header"> header </el-header>
    <el-container>
      <el-aside class="aside">
        <!-- 侧边栏导航  -->
        aside
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "MyHome",
};
</script>
<style scoped>
.container {
  height: 100vh;
  font-size: 15px;
}
.header {
  background: #212121;
  color: #fff;
}
.aside {
  background: #3a3a3a;
  color: #fff;
  /* height: 100%; */
}
.main {
  /* height: 100%; */
  color: #212121;
}
</style>