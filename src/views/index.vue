<template>
  <div class="main">
    <sideBar></sideBar>
    <div class="mainInfo">
      <keep-alive exclude="blogContent">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

import sideBar from '../components/sideBar.vue'
export default {

  methods: {
    // goItem () {

    // }
  },
  components: {
    sideBar
  },
  mounted () {
  }
}
</script>

<style lang='less'>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  background: #d8ecff;
  .mainInfo {
    z-index: 999;
    width: 74%;
    height: 100%;
    display: flex;
    // background: green;
    // background: url(../assets/sakura.jpg) no-repeat 100% 100%;
    // background-size: cover;
    // background-position: bottom;
  }
}
</style>
