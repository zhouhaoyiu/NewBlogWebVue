<template>
   <div class="pageContent">
     <button @click="back()">回到主页</button>
    开头
  </div>
</template>

<script>
export default {
  props: {
    blogId: Number
  },
  methods: {
    back () {
      this.$router.push('blogContent')
    }
  },
  mounted: {

  },
  watch: {

  }
}
</script>

<style>
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
