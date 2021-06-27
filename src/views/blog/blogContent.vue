<template>
  <div class="pageContentC">
    <div v-if="userRole === 1" class="editBtn">
      <button @click="addBlog()">新增博文</button>
      <button @click="exit()">退出登录</button>
    </div>
    <!-- <button @click="goItem()">查看文章</button> -->
    <div class="blogBox">
      <div class="blogItem" v-for="i in currentData" v-bind:key="i.id">
        <div @click="show(i.id)" class="blogTitle">{{ i.title }}</div>
        <div class="blogCreated">{{ i.created }}</div>
        <div class="blogDesc">{{ i.description }}</div>
      </div>
    </div>
    <div class="pagin">
      <el-pagination
        :hide-on-single-page="page<=1"
        @current-change="pageChange"
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogContent',
  data () {
    return {
      page: 1,
      pageSize: 6,
      formdata: [],
      userRole: null
    }
  },
  methods: {
    pageChange (val) {
      this.page = val
    },
    addBlog () {
      this.$router.push('/blogAdd')
    },
    show (id) {
      // alert(i)
      this.$router.push(`/blogItem/${id}`)
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
  computed: {
    total () {
      return this.formdata.length
    },
    currentData () {
      let list = this.formdata.slice() || []
      let size = this.pageSize
      let page = this.page - 1
      return list.splice(page * size, size)
    }
  },
  mounted () {
    this.userRole = Number(this.$store.state.userRole)
    console.log(this.userRole)
    const token = sessionStorage.getItem('token')
    if (!token) {
      this.$store.state.userRole = 0
    } this.handleMounted()
  }
}
</script>

<style lang='less'>
.pageContentC {
  border-radius: 1rem;
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  position: relative;
  // background-position: bottom;
  .pagin {
    position: absolute;
    bottom: 10%;
    left: 40%;
  }
  .blogBox {
    width: 86%;
    height: 80%;
    position: absolute;
    left: 7%;
    top: 13%;
    .blogItem {
      // position: absolute;
      position: relative;
      margin-bottom: 2%;
      margin-left: 10%;
      width: 80%;
      height: 8%;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      border-radius: 1rem;
      padding: 0.5rem;
      // margin: 2rem 0;
      .blogTitle {
        font-size: 1.9rem;
      }
      .blogCreated {
        position: absolute;
        right: 2%;
        top: 20%;
        font-size: 1.3rem;
      }
    }
  }
  .editBtn {
    position: absolute;
    width: 40%;
    height: 10%;
    top: 6%;
    left: 15%;
    button {
      background: #e9e5ee;
      border-radius: 0.5rem;
      color: #555;
      border: 2px solid #e2caff;
      width: 30%;
      height: 40%;
    }
    button:hover {
      transition: all 0.3s;
      -webkit-transition: all 0.3s; /* Safari */
      color: #fff;
      border: 2px solid #e2caff;
      background: #e2caff;
    }
  }
}
</style>
