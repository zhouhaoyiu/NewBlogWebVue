<template>
<div class="main">
  <sideBar></sideBar>
  <router-view></router-view>
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
  }
}
</script>

<style lang='less'>
.main{
  width: 100%;
  height: 100%;
  background: green;
}
</style>
