<template>
<div class="pageContentM">
 <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
 </el-carousel>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.pageContentM {
  position: relative;
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  border-radius: 1rem;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
