<template>
  <!-- 热门导航 -->
  <div class="hotnav">
    <div class="hot-nav-content">
      <div class="nav-content">
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon01.png" alt="" />
          <span>限时秒杀</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon02.png" alt="" />
          <span>充值半价</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon03.png" alt="" /> <span>品牌馆</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon04.png" alt="" />
          <span>天天领现金</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon05.png" alt="" />
          <span>9块9特卖</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon06.gif" alt="" />
          <span>助力享免单</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon07.png" alt="" />
          <span>天天半价购</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon08.png" alt="" />
          <span>1分抽大奖</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon09.png" alt="" />
          <span>美食城</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon10.png" alt="" />
          <span>1分抽大奖</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon11.png" alt="" />
          <span>助力享免单</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon12.png" alt="" />
          <span>电器城</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon13.png" alt="" />
          <span>充值中心</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon14.png" alt="" /> <span>海淘</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon15.png" alt="" />
          <span>帮帮免费团</span>
        </div>
        <div class="nav_item">
          <img src="../../imgs/nav/nav_icon16.png" alt="" />
          <span>健康生活</span>
        </div>
      </div>
    </div>
    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //1.屏幕的宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      //2.滚动内容的宽度
      scrollContentW: 720,
      //3.滚动条背景长度
      bgBar: 100,
      //4.滚动条长度
      barWidth: 0,
      //5.设置滑动时的起点
      startX: 0,
      //6.记录最后的结束点
      endFlag: 0,
      //7.移动的距离
      BarMoveWidth: 0,
    };
  },
  mounted() {
    this.getBottomW();
    this.bindEvent();
  },
  computed: {
    //计算当前滚动的占总滚动条背景多少
    innerBarStyle() {
      return {
        width: `${this.barWidth}px`,
        left:`${this.BarMoveWidth}px`
      };
    },
  },

  methods: {
    //计算滚动条占多少
    getBottomW() {
      const { bgBar, screenW, scrollContentW } = this;
      this.barWidth = bgBar * (screenW / scrollContentW);
    },
    // 移动端事件监听
    bindEvent() {
      //手指触摸开始，滑动时，结束时触发
      this.$el.addEventListener("touchstart", this.touchstart, false);
      this.$el.addEventListener("touchmove", this.touchmove, false);
      this.$el.addEventListener("touchend", this.touchend, false);
    },
    //触摸开始
    touchstart(event) {
      // 设置滑动时的起点
      this.startX = event.touches[0].pageX;
    },
    //滑动时
    touchmove(event) {
      let moveW = event.touches[0].pageX;
    //获取移动的距离
      let moveWidth = moveW - this.startX;
    //计算滚动条走的距离
    this.BarMoveWidth = -((this.bgBar / this.scrollContentW) * moveWidth - this.endFlag)
    //边界值处理
    if(this.BarMoveWidth <= 0 ){
        this.BarMoveWidth = 0
    }else if(this.BarMoveWidth >= (this.bgBar - this.barWidth)){
          this.BarMoveWidth = (this.bgBar - this.barWidth) 
    }
    },
    //结束时
    touchend() {
        //将计算滚动条走的距离赋值到标记的结束上面
        this.endFlag = this.BarMoveWidth
    },
  },
};
</script>

<style lang="less" scoped>
.hotnav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #fff;
  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;
    .nav-content {
      width: 720px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;
      .nav_item {
        display: inline-block;
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 40%;
          margin-bottom: 8px;
        }
        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  // 将自带的滚动条隐藏掉
  .hot-nav-content::-webkit-scrollbar {
    display: none;
  }
  .hot-nav-bottom {
    width: 100px;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 8px;
    .hot-nav-bottom-inner {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: orangered;
      width: 1;
    }
  }
}
</style>