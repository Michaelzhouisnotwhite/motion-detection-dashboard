<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import NavMenu from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>
<style lang="less">
</style>
