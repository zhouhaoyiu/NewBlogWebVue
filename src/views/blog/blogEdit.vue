<template>
  <div class="pageContent">
    <div v-for="i in formdata" v-bind:key="i.id">
      <button @click="exit()">退出编辑</button>

      <el-input v-model="i.title" placeholder="请输入博客标题"></el-input>
      <el-input v-model="i.description" placeholder="请输入博客描述"></el-input>
      <mavon-editor v-model="i.content" />
      <button @click="submit()">提交更改</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      role: null,
      formdata: [],
      date: '',
      id: null
    }
  },
  methods: {
    exit () {
      this.$router.push('blogItem')
    },
    async submit () {
      let now = new Date()
      this.date = `${now.getFullYear()}-0${(now.getMonth() + 1)}-${now.getDate()}`
      let res = await this.$axios({
        method: 'post',
        url: 'http://localhost:8099/blog/editBlog',
        params: {
          id: this.$store.state.blogId,
          title: this.editForm.title,
          description: this.editForm.description,
          content: this.editForm.content,
          created: this.date
        }
      })
      if (res.data.code === '1000') {
        this.$router.push('blogItem')
      }
    },
    async handleMounted () {
      let res = await this.$axios({
        method: 'get',
        url: 'http://localhost:8099/blog/getBlog',
        params: {
          blogId: this.blogId
        }
      })
      for (let i in res.data.blog) {
        this.formdata.push(res.data.blog[i])
      }
      console.log(this.formdata)
    }
  },
  mounted () {
    this.role = this.$store.state.userRole
    this.blogId = this.$store.state.blogId
    this.handleMounted()
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
