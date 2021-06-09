<template>
  <div></div>
</template>

<script>
export default {
  mounted () {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style>

</style>
