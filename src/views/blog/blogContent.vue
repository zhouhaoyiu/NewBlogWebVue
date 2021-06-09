<template>
  <div class="pageContent">
    <button @click="goItem()">查看文章</button>
  </div>
</template>

<script>
export default {
  methods: {
    goItem () {
      this.$router.push('blogItem')
    }
  },
  mounted () {
    const token = sessionStorage.getItem('token')
    if (!token) {
      this.$router.push('login')
    }
  }
}
</script>

<style lang='less'>
.pageContent {
  margin:  auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat ;
  background-size: 100% 100%;
  // background-position: bottom;
}
</style>
