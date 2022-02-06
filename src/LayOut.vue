<template>
  <el-container class="container">
    <el-aside width="auto" class="aside">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <app-header></app-header>
      </el-header>
      <el-main class="main">
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
export default {
  name: "LayOut",
  components: {
    NavMenu,
    "app-header": Header,
    "app-main": Main,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #31394c;
  color: #fafafa;
  line-height: 60px;
  padding: 0;
}
.container {
  height: 100vh;
}
.main {
  background-color: #212735;
  color: #fafafa;
}
</style>