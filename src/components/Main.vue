<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "MyMain",
  watch: {
    $route: {
      handler: function (val) {
        console.log(val.meta.name);
        this.$store.commit("setRouteName", val.meta.name);
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
   
  },
};
</script>

<style>
</style>