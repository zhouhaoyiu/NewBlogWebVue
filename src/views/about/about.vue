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
      <div class="selfEvaluation"><b>自我评价</b></div>
      <div class="eduExp"><b>教育经历</b></div>
      <div class="internshipExp"><b>实习经历</b></div>
      <div class="myProject"><b>我的项目</b></div>
      <div class="progress">
        <div class="tech" v-show="progress == 1">
          <span
            style="position: absolute; right: 5%; top: 2%; font-size: 1.2rem"
            @click="progress = '0'"
          >
            x
          </span>
          <div v-for="i in tech" v-bind:key="i.techName" class="techItem">
            <span>{{ i.techName }}</span>
            <el-progress :percentage="i.techPro" :format="format"></el-progress>
          </div>
          <div>
            <span>ES6 CSS3 HTML5......</span>
          </div>
        </div>
        <div class="tech" v-show="progress == 2">
          <el-tag class="tags" v-for="i in hobby" v-bind:key="i">{{
            i
          }}</el-tag>
        </div>
        <button
          class="techBtn"
          :class="{ closet: progress == 0 }"
          @click="progress = '1'"
        >
          专业<br v-show="progress != 0" />技能
        </button>
        <button
          class="hobbyBtn"
          :class="{ closep: progress == 0 }"
          @click="progress = '2'"
        >
          业余<br v-show="progress != 0" />爱好
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progress: '1',
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

      hobby: ['足球比赛', '飞行模拟', '看电影', '日语'],

      tech: [{
        techName: 'Vue',
        techPro: 55
      },
      {
        techName: 'React',
        techPro: 10
      },
      {
        techName: 'SpringBoot',
        techPro: 30
      },
      {
        techName: 'Electron',
        techPro: 30
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
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
      background: #ecdae8c9;
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
      border-radius: 1rem;
      padding: 0.5rem;
      width: 40%;
      height: max-content;
      .techItem {
        width: 100%;
      }
      .tags {
        margin: 0 0.5rem;
      }
    }
    .techBtn,
    .hobbyBtn {
      position: absolute;
      border-radius: 50%;
      padding: 0.2rem 0.4rem;
      left: 53%;
      border: 1px solid rgb(235, 235, 235);
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
      background: #ecdae8c9;
    }
    .techBtn {
      top: 5%;
    }
    .hobbyBtn {
      top: 11%;
    }
    .closet {
      top: 10%;
      left: 70%;
      padding: 1rem 0;
    }
    .closep {
      top: 10%;
      left: 80%;
      padding: 1rem 0;
    }
    .myProject,
    .internshipExp,
    .eduExp,
    .selfEvaluation {
      font-size: 1.5rem;
    }
  }
}
</style>
