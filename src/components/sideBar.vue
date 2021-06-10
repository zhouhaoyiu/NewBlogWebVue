/* eslint-disable space-before-function-paren */
<template>
  <div class="content">
    <div class="none"></div>
    <div class="Info">
      <div class="avatorBox">
        <img class="avator" src="../assets/Mystic.jpg" alt="" />
      </div>
      <div class="infoBox">
        <div class="nameInfo">
          <span @click="login()" class="name">{{ myName }}</span>
        </div>
        <div class="contectInfo">
          <div class="info">
            <div class="qq" @click="showqq()">QQ</div>
            <div class="wx" @click="showwx()">微信</div>
            <div class="git">
              <a href='https://github.com/zhouhaoyiu' target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <img style="margin-left: 15%" :src="dialogImg" alt="qqcode" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  methods: {
    showqq () {
      this.dialogTitle = 'QQ二维码'
      this.dialogImg = '../static/QQCode.png'
      this.centerDialogVisible = true
    },
    showwx () {
      this.dialogTitle = '微信二维码'
      this.dialogImg = '../static/WXCode.png'
      this.centerDialogVisible = true
    },

    login () {
      this.$router.push('login')
    }
  },
  data () {
    return {
      dialogTitle: '',
      dialogImg: '',
      centerDialogVisible: false,
      myName: `周浩宇 | Mystic Zhou`
    }
  },
  computed: {
    // dialogCode () {
    //   return `require(${this.dialogImg})`
    // }
  }

}
</script>

<style lang="less">
.content {
  width: 26%;
  height: 100%;
  // background: red;
  display: flex;
  // background: #e1f0ff;
  .none {
    width: 30%;
    // background: #e1f0ff;
    height: 100%;
  }
  .Info {
    margin: auto;
    margin-right: 0.5rem;
    width: 70%;
    height: 98%;
    border-radius: 1rem;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
    background: f5f7f9;
    background: url(../assets/memberBk.png) no-repeat 100% 100%;
    background-size: cover;
    .avatorBox {
      // position: relative;
      width: 100%;
      height: 20%;
      // background: #222222 ;
      display: flex;
      .avator {
        // position: absolute;
        margin-top: auto;
        margin-bottom: 5%;
        margin-left: auto;
        margin-right: auto;
        width: 6rem;
        height: 6rem;
        border-radius: 6rem;
      }
    }
    .infoBox {
      z-index: 10;
      height: 10%;
      // width: 100%;
      // background: #FFFFFF;
      .nameInfo {
        height: 40%;
        width: 100%;
        // background: #FFFFFF;
        display: flex;
        .name {
          color: #999999;
          margin: auto;
        }
      }
      .contectInfo {
        display: flex;
        .info {
          width: 70%;
          display: flex;
          flex-direction: row;
          margin: auto;
          margin-left: 25%;
        }
        .info div {
          width: max-content;
          margin: 4%;
        }
      }
    }
  }
}
</style>
