<template>
  <div class="pageContentI">
    <button class="back" v-if="role === 1" @click="back()">回到主页</button>
    <button class="edit" v-if="role === 1" @click="edit()">编辑博客</button>
    <div class="blog" v-for="i in formdata" v-bind:key="i.title">
      <div class="title">{{ i.title }}</div>
      <div class="created">{{ i.created }}</div>
      <!-- {{ i.content }} -->
      <div class="markdown-body" v-html="i.content"></div>
    </div>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css'
export default {
  data () {
    return {
      role: null,
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
    this.role = this.$store.state.userRole
    this.blogId = this.$store.state.blogId
    this.handleMounted()
  }
  // watch: {

  // }
}
</script>

<style lang='less'>
.pageContentI {
  position: relative;
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  border-radius: 1rem;
  .back {
    position: absolute;
    top: 6%;
    left: 5%;
    background: #ebe4ed;
    border-radius: 0.3rem;
    color: #555;
    border: 2px solid #e5d2fc;
    width: 10%;
    height: 4.5%;
  }
  .edit {
    position: absolute;
    top: 6%;
    right: 5%;
    background: #ebe4ed;
    border-radius: 0.3rem;
    color: #555;
    border: 2px solid #e5d2fc;
    width: 10%;
    height: 4.5%;
  }

  .back:hover {
    transition: all 0.3s;
    -webkit-transition: all 0.3s; /* Safari */
    color: #fff;
    border: 2px solid #e2caff;
    background: #e2caff;
  }
  .edit:hover {
    transition: all 0.3s;
    -webkit-transition: all 0.3s; /* Safari */
    color: #fff;
    border: 2px solid #e2caff;
    background: #e2caff;
  }
  .blog {
    position: absolute;
    // background: darkblue;s
    left: 5%;
    top: 10%;
    width: 90%;
    height: 80%;
    overflow: auto;
    .title {
      font-size: 3rem;
      text-align: center;
    }
    .created {
      text-align: center;
      color: rgb(151, 151, 151);
    }
  }
}
</style>
