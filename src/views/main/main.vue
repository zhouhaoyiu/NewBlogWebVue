<template>
  <div class="pageContentM">
    <div class="carouselBox">
      <el-carousel height="30rem">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img
            :src="item.imgPath"
            alt=""
            width="100%"
            height="100%"
            @click="goto(item.imgGoto)"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          id: 1,
          imgPath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F2979799-8bd886c20f29ca2c.png&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626686457&t=f804d33376fb6ca3ae6aeb81e93f32c7',
          imgGoto: 'https://cn.vuejs.org/index.html'
        },
        {
          id: 2,
          imgPath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgcdn.sdk.cn%2Farticle%2FaxWWqwMzZ-hrJHcG-VKj.png&refer=http%3A%2F%2Fimgcdn.sdk.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626686907&t=8e1e67d4c0fdee68980615c19512ab42',
          imgGoto: 'https://react.docschina.org/'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      window.open(path)
    }
  }
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
  display: flex;
}
.carouselBox {
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 13rem;
  // background: cadetblue;
  width: 60rem;
  height: 40rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
