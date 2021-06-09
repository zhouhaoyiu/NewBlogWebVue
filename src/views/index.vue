<template>
  <div class="main">
    <sideBar></sideBar>
    <div class="mainInfo">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import sideBar from '../components/sideBar.vue'
export default {
  // beforeCreate () {
  //   const token = sessionStorage.getItem('token')
  //   if (!token) {
  //     this.$router.push({ name: 'login' })
  //   }
  // }
  components: {
    sideBar
  },
  mounted () {
    this.$router.push('blogContent')
  }
}
</script>

<style lang='less'>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  background: #F5F7F9;
  .mainInfo {
    z-index: 999;
    width: 72%;
    height: 100%;
    display: flex;
    // background: green;
    // background: url(../assets/sakura.jpg) no-repeat 100% 100%;
    // background-size: cover;
    // background-position: bottom;
  }
}
</style>
