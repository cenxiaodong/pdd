<template>
  <div id="app">
    <router-view ></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "./components/Tabber/tabbar";
export default {
  name: "App",
  components: {
    Tabbar,
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
