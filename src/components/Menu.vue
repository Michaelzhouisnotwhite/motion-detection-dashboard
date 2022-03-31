<template>
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    text-color="#fff"
    active-text-color="#ffd04b"
    background-color="#454d7e"
    router
  >
    <div
      @click="toggleCollapse"
      class="toggle-button"
      @mouseover="isTextShow = true"
      @mouseleave="isTextShow = false"
    >
      <!-- <i class="text" v-if="isTextShow">
          {{ isCollapse ? "展开" : "收起" }}
        </i> -->
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"> </i>
    </div>
    <el-menu-item index="home">
      <i class="el-icon-data-line"></i>
      <span slot="title">监控信息</span>
    </el-menu-item>
    <!-- <el-menu-item index="control">
      <i class="el-icon-menu"></i>
      <span slot="title">摄像头控制</span>
    </el-menu-item> -->
    <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item> -->
    <el-menu-item index="settings">
      <i class="el-icon-setting"></i>
      <span slot="title">设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    // isCollapse: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      isCollapse: true,
      isTextShow: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.toggle-button {
  line-height: 60px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  background-color: #454d7e;
  font-weight: normal;

  border-color: #454d7e;
  // border-width: 2px;
  // border-style: solid;
  // border-top: none;
  // border-left: none;
  .text {
    text-decoration: none;
    font-style: normal;
    opacity: 0.5;
  }
}
.toggle-button:hover {
  background-color: #2c3447;
}
.el-menu {
  border-right: solid;
  height: 100%;
  border-color: #40485f;
}
// .mainHeight {
//   height: 100%;
//   width: auto;
// }
</style>