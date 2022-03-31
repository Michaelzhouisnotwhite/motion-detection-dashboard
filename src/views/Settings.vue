<template>
  <div>
    <video-table></video-table>
    <!-- <cam-setting></cam-setting> -->
  </div>
</template>

<script>
import VideoTable from "../components/Settings/VideoTable.vue";
import CamSetting from "../components/Settings/CamSetting.vue";
export default {
  name: "MySettings",
  components: {
    VideoTable,
    CamSetting,
  },
};
</script>
<style lang="less" scoped>
</style>