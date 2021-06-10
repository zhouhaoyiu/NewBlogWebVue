<template>
<div class="pageContent">
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
      role: '',
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
      if (res.data.code === '1000') {
        this.$router.push('blogContent')
      }
      console.log(res)
    }
  },
  mounted () {
    this.role = this.$store.state.userRole
  }
}
</script>

<style lang='less'>
.pageContent {
  position: relative;
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  border-radius: 1rem;
  }

</style>
