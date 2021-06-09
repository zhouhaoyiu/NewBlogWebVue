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
          <span class="name">{{ myName }}</span>
        </div>
        <div class="contectInfo">
          <span>QQ</span>
          <span>微信</span>
          <span>GitHub</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      myName: `周浩宇 | Mystic Zhou`
    }
  }

}
</script>

<style lang="less">
.content {
  width: 28%;
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
    margin-right: 4rem;
    width: 70%;
    height: 95%;
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
    }
  }
}
</style>
