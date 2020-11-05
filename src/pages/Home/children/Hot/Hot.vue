<template>
  <!-- 热门模块 -->
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="homecasual.length > 0">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in homecasual"
          :key="index"
        >
          <img :src="item.imgurl" alt="" width="100%" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 热门导航 -->
    <HotNav />
    <!-- 广告图 -->
    <div class="advertising">
      <img src="../../imgs/hot_ad/home_ad.gif" alt="" />
    </div>
    <!-- 商品列表 -->
    <HotShopList />
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HotNav from "./HotNav";
import HotShopList from "./hotShopList";
import { mapState } from "vuex";
export default {
  name: "Hot",
  data() {
    return {};
  },
  components: {
    HotNav,
    HotShopList,
  },
  computed: {
    // 拿到state中的轮播图数据
    ...mapState(["homecasual"]),
  },
  // 深度监听
  watch: {
    //监听homecasual,如果homecasual状态发生了改变，执行轮播图，不支持缓重，直接会触发相应的操作
    homecasual() {
      this.$nextTick(() => {
        // 创建swiper实例
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  mounted() {
    // 请求轮播图图片
    this.$store.dispatch("reqHomeCasual");
    // 轮播图
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
.advertising {
  background-color: #fff;
  margin: 10px 0;
  padding: 5px;
  img {
    width: 100%;
  }
}
</style>