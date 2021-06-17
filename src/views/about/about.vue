<template>
  <div class="pageContentAbout">
    <div class="infoBox">
      <div class="myName">
        <b>{{ myName }}</b>
      </div>
      <div class="info1">
        <b>{{ info1 }}</b>
      </div>
      <div class="info2">
        <b>{{ info2 }}</b>
      </div>
      <div class="info3">
        <b>{{ info3 }}</b>
      </div>
      <div>自我评价</div>
      <div class="studySchool">
        教育经历
      </div>
      <div>实习经历</div>
      <div>我的项目</div>
      <div class="progress">
        <div class="tech">
          <div v-for="i in tech" v-bind:key="i.techName" class="techItem">
            <span>{{ i.techName }}</span>
            <el-progress :percentage="i.techPro" :format="format"></el-progress>
          </div>
          <div>
            <span>ES6 CSS3 HTML5......</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myName: '周浩宇',
      gender: '男',
      birth: '2000/06/24',
      address: '北京',
      phone: '18811713109',
      email: 'knight9z@vip.qq.com',
      wechat: 'zhouhaoyu2989',
      type: '在校',
      job: 'web前端',
      salary: '面议',

      tech: [{
        techName: 'Vue',
        techPro: '55'
      },
      {
        techName: 'React',
        techPro: '10'
      },
      {
        techName: 'SpringBoot',
        techPro: '30'
      },
      {
        techName: 'Electron',
        techPro: '30'
      }
      ]
    }
  },
  methods: {
    format: (percentage) => {
      if (percentage === 100) { return '满' }
      if ((percentage >= 75) && (percentage < 100)) {
        return '熟悉'
      }
      if ((percentage >= 50) && (percentage < 75)) {
        return '掌握'
      }
      if ((percentage >= 25) && (percentage < 50)) {
        return '入门'
      }
      if ((percentage >= 0) && (percentage < 25)) {
        return '接触'
      }
    }
  },

  computed: {
    info1 () {
      return `${this.gender}|生日：${this.birth}|${this.address}`
    },
    info2 () {
      return `${this.phone}|${this.email}|微信：${this.wechat}`
    },
    info3 () {
      return `${this.type}|${this.job}|期望薪资：${this.salary}`
    }
  }
}
</script>

<style lang='less'>
.pageContentAbout {
  position: relative;
  margin: auto;
  width: 95%;
  height: 98%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  background: url(../../assets/sakura.jpg) no-repeat;
  background-size: 100% 100%;
  border-radius: 1rem;
  display: flex;
  .infoBox {
    position: relative;
    overflow: auto;
    margin: auto;
    width: 95%;
    height: 95%;
    // background: blue;
    .myName {
      position: absolute;
      width: max-content;
      // background: red;
      font-size: 2.5rem;
      font-weight: 1200;
      left: 5%;
      top: 5%;
    }
    .info1,
    .info2,
    .info3 {
      font-family:KaiTi;
      font-size: 1.4rem;
      position: absolute;
      width: max-content;
    }
    .info1 {
      top: 6%;
      left: 17%;
    }
    .info2 {
      top: 12%;
      left: 5%;
    }
    .info3 {
      top: 18%;
      left: 5%;
    }
    .tech {
      
      position: absolute;
      top: 2%;
      right: 1%;
      border: 1px solid rgb(235, 235, 235);
      background: #ECDAE8;
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
      border-radius: 1rem;
      padding: 0.5rem;
      width: 40%;
      height: max-content;
      .techItem {
        width: 100%;
      }
    }
  }
}
</style>
