<template>
  <div class="pageContent">
    <button @click="back()">回到主页</button>
    <button @click="edit()">编辑博客</button>
    <div class="blog" v-for="i in formdata" v-bind:key="i.title">
      {{ i.title }}
      {{ i.created }}
      <!-- {{ i.content }} -->
      <div class="markdown-body" v-html="i.content"></div>
    </div>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css' // 然后添加样式markdown-body
// import Header from '@/components/Header'

export default {
  data () {
    return {
      blogId: null,
      formdata: []
    }
  },
  methods: {
    back () {
      this.$router.push('blogContent')
    },
    edit () {
      this.$router.push('blogEdit')
    },
    async handleMounted () {
      let res = await this.$axios({
        method: 'get',
        url: 'http://localhost:8099/blog/getBlog',
        params: {
          blogId: this.blogId
        }
      })
      console.log(res)
      let MarkdownIt = require('markdown-it')
      for (let i in res.data.blog) {
        this.formdata.push(res.data.blog[i])
      }
      let md = new MarkdownIt()
      let result = md.render(this.formdata[0].content)
      this.formdata[0].content = result
    }

  },
  mounted () {
    this.blogId = this.$store.state.blogId
    this.handleMounted()
  }
  // watch: {

  // }
}
</script>

<style lang='less'>
.pageContent {
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  // background-position: bottom;
  .blog{
    overflow: auto;
  }
}
</style>
