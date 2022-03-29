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
  background-color: #f9f9f9;
  color: #181818;
  line-height: 60px;
  padding: 0;

  border-style: solid;
  border-bottom-color: #181818;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-width: 2px;
}
.container {
  height: 100vh;
}
.main {
  background-color: #f9f9f9;
  // color: #fafafa;
}
</style>