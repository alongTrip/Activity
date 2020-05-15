<template>
  <div class="Myprize">
    <div><img src="../assets/image/Myprize/JDfive.png" alt=""></div>
    <div>
      <h3>京东商场购物券5元</h3>
      <div class="exchange">
        <div class="changeButton">立即兑换奖品</div>
      </div>
      <div class="replenish">
        <p>您也可以在“长城炼金术app-积分商城-积分明细”中查看您的奖品</p>
        <span>长城证券客服热线 95514</span>
      </div>
    </div>
  </div>
</template>
<script>
import { ChangePageTitle } from '@/utils/utils.js'
export default {
  name: 'Myprize',
  mounted() {
    ChangePageTitle('欢乐砸金蛋')
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: 'Medium';
  src: url('../assets/font/PingFang Medium.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'myFont';
  src: url('../assets/font/PingFang Heavy.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('../assets/font/PingFang Light.ttf');
  font-weight: normal;
  font-style: normal;
}

.Myprize {
  width: 100%;
  height: 100%;
  /*background-color: #A31929;*/

  div:first-child {
    width: 750px;
    height: 34.5%;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div:last-child {
    width: 750px;
    height: 65.5%;
    background-color: #A31929;

    h3 {
      width: 100%;
      height: 169px;
      line-height: 169px;
      text-align: left;
      font-size: 37px;
      font-family: Medium, sans-serif;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      padding-left: 91px;
    }

    .exchange {
      width: 100%;
      height: 520px;
      /*background-color: #ccc;*/
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .changeButton {
        width: 654px;
        height: 105px;
        background: linear-gradient(180deg, rgba(254, 230, 196, 1) 0%, rgba(251, 205, 155, 1) 100%);
        border-radius: 53px;
        font-size: 45px;
        font-family: myFont, sans-serif;
        font-weight: 500;
        color: rgba(212, 19, 41, 1);
        cursor: pointer;
      }
    }

    .replenish {
      margin-top: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      font-family: Light, sans-serif;
      font-weight: 300;

      p {
        color: rgba(255, 255, 255, 1);
      }

      span {
        display: block;
        color: rgba(249, 154, 165, 1);
      }
    }
  }
}

</style>
