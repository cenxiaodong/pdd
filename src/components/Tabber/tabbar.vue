<template>
  <div class="tabbar">
    <div class="tabSpan" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="" />
      <span :class="{on:$route.path.includes('/home')}">首页</span>
    </div>
    <div class="tabSpan" @click="switchTo('/recommend')">
      <img :src="$route.path.includes('/recommend') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="" alt="" />
      <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
    </div>
    <div class="tabSpan" @click="switchTo('/search')">
      <img :src="$route.path.includes('/search') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="" alt="" />
      <span :class="{on:$route.path.includes('/search')}">搜索</span>
    </div>
    <div class="tabSpan" @click="switchTo('/chat')">
      <img :src="$route.path.includes('/chat') ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="" alt="" />
      <span :class="{on:$route.path.includes('/chat')}">聊天</span>
    </div>
    <div class="tabSpan" @click="switchTo('/me')">
      <img :src="$route.path.includes('/me') ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="" alt="" />
      <span :class="{on:$route.path.includes('/me')}">个人中心</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarImgArr:[
        {normal:require('../../../static/img/icon_home.png'),selected:require('../../../static/img/icon_home_selected.png')},
        {normal:require('../../../static/img/icon_intro.png'),selected:require('../../../static/img/icon_intro_selected.png')},
        {normal:require('../../../static/img/icon_search.png'),selected:require('../../../static/img/icon_search_selected.png')},
        {normal:require('../../../static/img/icon_chat.png'),selected:require('../../../static/img/icon_chat_selected.png')},
        {normal:require('../../../static/img/icon_mine.png'),selected:require('../../../static/img/icon_mine_selected.png')},
      ]
    };
  },
  methods: {
    //跳转页面
    switchTo: function (path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: #fff;
  .tabSpan {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 35%;
      margin-bottom: 4px;
    }
    span {
      font-size: 14px;
    }
    .on {
      color: red;
    }
  }
}
</style>