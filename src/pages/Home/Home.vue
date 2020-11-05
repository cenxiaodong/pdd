<template>
  <!-- 用于首页 -->
  <div class="home">
    <ly-tab
      class="homeTab"
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="homeItem"
    />
    <router-view class="homeContent"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0, //选中时
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" },
      ],
      options: {
        activeColor: "#e9232c", //设置选中的颜色
      },
      //配置二级路由路径
      homeChildrenUrl: [
        "/home/hot",
        "/home/dress",
        "/home/box",
        "/home/mbaby",
        "/home/general",
        "/home/foot",
        "/home/shirt",
        "/home/man",
        "/home/ele",
      ],
    };
  },
  methods: {
    homeItem: function (e, index) {
      let homeUrl = this.homeChildrenUrl[index];
      this.$router.replace(homeUrl);
    },
  },
};
</script>

<style lang="less" scoped>
.homeTab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
 
}
.homeContent {
  margin-top: 45px;
}


// .hone {
//   background-color: aqua;
// }
</style>