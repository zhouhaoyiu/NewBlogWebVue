<template>
  <div>登录页
  <el-button @click="login()">登录</el-button>

  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/')
    }
  },
  mounted () {
    sessionStorage.setItem('token', 'zhy')
  }
}
</script>

<style>

</style>
