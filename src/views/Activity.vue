<template>
  <div class="activityBox">
    <Popup :isShow="isShow" @isShowAction="getIsShowAction" />
    <div class="activity">
      <div class="active_Header" :class="[isActive ? 'goldenEgg' : 'openEgg']">
        <div class="myPrize" @touchstart="myPrizeAction"></div>
        <div class="hammer" @touchstart="hammerAction"></div>
        <div class="convert" @touchstart="convertAction">立即兑换</div>
        <div class="trumpet"><img src="../assets/image/Activity/trumpet.png" alt="喇叭" />
          <div id="gongaodiv">
            <div id="scroll_div" class="scroll_div">
              <div id="scroll_begin">
                恭喜138****9564 获得8888积分
              </div>
              <div id="scroll_end"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="prizes"><img src="../assets/image/Activity/prizes.png" alt="奖金池" /></div>
      <div class="lightspot"><img src="../assets/image/Activity/lightspot.png" alt="长城炼金术亮点" /></div>
      <div class="experience">
        <div class="experienceBox" @touchstart="experienceAction">立即体验</div>
      </div>
      <div class="footBox">
        <h3><i>活动规则</i></h3>
        <ul>
          <li v-for="(item,index) in ruleArr" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Popup from '@/components/Popup.vue'
import { ChangePageTitle } from '@/utils/utils.js'
const ruleArr = [
  '1.活动时间：',
  '2.活动期间每人有一次免费砸金蛋的机会。',
  '3.抽中积分的客户请下载并登录长城炼金术app查看积分详情；抽中卡券的客户请下载并登录长城炼金术，前往我的奖品查看卡号卡密。',
  '4.针对恶意刷取奖励等现象，一经核实将取消奖励发放及追回奖励。',
  '5.活动最终解释权归长城证券所有。'
]
export default {
  name: 'Activity',
  data() {
    return {
      isActive: true,
      isShow: false,
      ruleArr
    }
  },
  components: { Popup },
  mounted() {
    this.$nextTick(() => {
      this.ScrollImgLeft()
    })
    ChangePageTitle('欢乐砸金蛋')
  },
  methods: {
    ScrollImgLeft() {
      var speed = 100
      var scrollBegin = document.getElementById('scroll_begin')
      var scrollEnd = document.getElementById('scroll_end')
      var scrollDiv = document.getElementById('scroll_div')
      scrollEnd.innerHTML = scrollBegin.innerHTML

      function Marquee() {
        if (scrollEnd.offsetWidth - scrollDiv.scrollLeft <= 0) {
          scrollDiv.scrollLeft -= scrollBegin.offsetWidth
        } else {
          scrollDiv.scrollLeft++
        }
      }
      var MyMar = setInterval(Marquee, speed)
      scrollDiv.οnmοuseοver = function() { clearInterval(MyMar) }
      scrollDiv.οnmοuseοut = function() { MyMar = setInterval(Marquee, speed) }
    },
    myPrizeAction() {
      const prizeHref = this.$router.resolve({ path: '/myPrize', query: {} })
      window.open(prizeHref.href, '_self')
    },
    hammerAction() {
      if (this.isActive) {
        this.isActive = false
        this.stopBodyScroll(true)
        this.$nextTick(() => {
          this.isShow = true
        })
      }
    },
    convertAction() {
      console.log('convertAction执行了')
    },
    experienceAction() {
      console.log('experienceAction执行了')
    },
    stopBodyScroll(isFixed) {
      var activity = document.querySelector('.activity')
      let top = 0
      if (isFixed) {
        top = window.scrollY
        activity.style.position = 'fixed'
        // activity.style.top = -top + 'px'
      } else {
        activity.style.position = ''
        activity.style.top = ''
      }
      window.scrollTo(0, top) // 回到原先的top
    },
    getIsShowAction(paramas) {
      this.isShow = paramas
      this.stopBodyScroll(this.isShow)
    }
  }
}

</script>
<style scoped lang="scss">
@font-face {
  font-family: 'myFont';
  src: url('../assets/font/PingFang Heavy.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Font';
  src: url('../assets/font/PingFang Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('../assets/font/PingFang Light.ttf');
  font-weight: normal;
  font-style: normal;
}

.activityBox {

  .activity {
    width: 100%;
    height: 3084px;
    background: #A31929;
    position: relative;

    .goldenEgg {
      background: url('../assets/image/Activity/goldenEgg.png');
    }

    .openEgg {
      background: url('../assets/image/Activity/openEgg.png');
    }

    .active_Header {
      width: 100%;
      height: 1234px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;

      .myPrize {

        width: 82px;
        height: 77px;
        position: absolute;
        top: 0;
        left: 604px;
        background: url('../assets/image/Activity/myPrize.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }

      .hammer {
        width: 200px;
        height: 187px;
        position: absolute;
        top: 366px;
        left: 436px;
        background: url('../assets/image/Activity/hammer.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }

      .convert {
        width: 640px;
        height: 105px;
        position: absolute;
        bottom: 160px;
        left: 50%;
        transform: translate(-50%, 0);
        background: linear-gradient(180deg, rgba(254, 230, 196, 1) 0%, rgba(251, 205, 155, 1) 100%);
        border-radius: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: myFont, sans-serif;
        font-size: 45px;
        font-weight: 500;
        color: rgba(212, 19, 41, 1);
        cursor: pointer;
      }

      .trumpet {
        width: 480px;
        height: 50px;
        border: 2px solid rgba(252, 211, 165, 1);
        border-radius: 25px;
        position: absolute;
        bottom: 65px;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        align-items: center;
        padding-left: 58px;

        img {
          width: 35px;
          height: 35px;
          display: block;
        }

        #gongaodiv {
          width: 360px;
          height: 23px;
          overflow: hidden;
          margin-left: 28px;
          font-size: 24px;
          font-family: Font, sans-serif;
          font-weight: 400;
          color: rgba(253, 223, 185, 1);

          .scroll_div {
            width: 100%;
            height: 23px;
            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;

            #scroll_begin,
            #scroll_end {
              display: inline
            }
          }

        }
      }
    }

    .prizes {
      width: 100%;
      height: 515px;
      position: relative;
      margin-bottom: 10px;

      img {
        width: 697px;
        height: 100%;
        display: block;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    .lightspot {
      width: 100%;
      height: 480px;
      display: flex;
      justify-content: center;

      img {
        width: 697px;
        height: 100%;
        display: block;
      }
    }

    .experience {
      width: 100%;
      height: 105px;
      display: flex;
      justify-content: center;
      margin: 60px 0 70px 0;

      .experienceBox {
        width: 654px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: myFont, sans-serif;
        font-size: 45px;
        font-weight: 500;
        color: rgba(212, 19, 41, 1);
        background: linear-gradient(180deg, rgba(254, 230, 196, 1) 0%, rgba(251, 205, 155, 1) 100%);
        border-radius: 53px;
        cursor: pointer;
      }
    }

    .footBox {
      padding-left: 40px;

      h3 {
        height: 100px;
        line-height: 100px;
        font-size: 38px;
        font-weight: bold;
        font-style: italic;
        color: rgba(254, 211, 173, 1);
      }

      ul li {
        color: rgba(254, 211, 173, 1);
        line-height: 45px;
        font-family: Light, sans-serif;
        font-size: 25px;
        letter-spacing: 2px;
      }
    }
  }
}

</style>
