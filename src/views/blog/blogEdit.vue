<template>
  <div>
  <button @click="exit()"></button>
  <mavon-editor v-model="editForm.content" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      editForm: [{
        content: ''
      }]
    }
  },
  methods: {
    exit () {
      this.$router.push('blogItem')
    }
  }

}
</script>

<style lang='less'>
</style>
