<template>
<div>
  <button>返回</button>
  <button @click="submit()">提交</button>
  <mavon-editor v-model="editForm.content"/>
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
    submit () {
      this.$router.push('blogContent')
    }
  }
}
</script>

<style>

</style>
