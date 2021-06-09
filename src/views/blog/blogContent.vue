<template>
  <div class="pageContent">
    <div  v-if="userRole === 1" class="editBtn">
      <el-button @click="addBlog()">新增博文</el-button>
      <el-button @click="exit()">退出登录</el-button>
    </div>
    <!-- <button @click="goItem()">查看文章</button> -->
    <div class="blogBox">
      <div class="blogItem" v-for="i in formdata" v-bind:key="i.content">
        <div @click="show(i.id)" class="blogTitle">{{ i.title }}</div>
        <div class="blogCreated">{{ i.created }}</div>
        <div class="blogDesc">{{ i.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: [],
      userRole: null
    }
  },
  methods: {
    addBlog () {
      this.$router.push('blogAdd')
    },
    show (i) {
      // alert(i)
      this.$store.state.blogId = i
      this.$router.push('blogItem')
    },
    exit () {
      this.userRole = 0
      this.$store.state.userRole = 0
    },
    async handleMounted () {
      let res = await this.$axios({
        methods: 'get',
        url: 'http://localhost:8099/blog/getAllBlogs'
      })
      console.log(res.data.blog)
      for (let i in res.data.blog) {
        this.formdata.push(res.data.blog[i])
      }
      console.log(this.formdata)
    }
  },
  mounted () {
    this.userRole = Number(this.$store.state.userRole)
    console.log(this.userRole)
    const token = sessionStorage.getItem('token')
    if (!token) {
      this.$router.push('login')
    } this.handleMounted()
  }
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
  position: relative;
  // background-position: bottom;
  .blogBox {
    width: 86%;
    height: 88%;
    position: absolute;
    left: 7%;
    top: 13%;
    // background: gold;
    .blogItem {
      // position: absolute;
      position: relative;
      margin-bottom: 1%;
      margin-left: 10%;
      width: 80%;
      height: 10%;
      // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
      border-bottom: 0.1rem solid #333;
      padding-bottom: 1.1rem;
      // margin: 2rem 0;
      .blogTitle {
        font-size: 2.7rem;
      }
      .blogCreated {
        position: absolute;
        right: 0;
        top: 20%;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
