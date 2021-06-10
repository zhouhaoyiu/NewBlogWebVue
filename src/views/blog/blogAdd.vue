<template>
<div>
  <button @click="back()">返回</button>
  <el-input v-model="editForm.title" placeholder="请输入博客标题"></el-input>
  <el-input v-model="editForm.description" placeholder="请输入博客描述"></el-input>
  <mavon-editor v-model="editForm.content"/>
  <button @click="submit()">提交</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      editForm: [{
        title: '',
        description: '',
        content: ''
      }],
      date: null
    }
  },
  methods: {
    back () {
      this.$router.push('blogContent')
    },
    async submit () {
      let now = new Date()
      this.date = `${now.getFullYear()}-0${(now.getMonth() + 1)}-${now.getDate()}`
      let res = await this.$axios({
        method: 'post',
        url: 'http://localhost:8099/blog/addBlog',
        params: {
          title: this.editForm.title,
          description: this.editForm.description,
          content: this.editForm.content,
          created: this.date
        }
      })
      console.log(res)
      // this.$router.push('blogContent')
    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
