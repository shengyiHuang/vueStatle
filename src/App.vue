<template>
  <div id="app">
    <router-view />
    <van-tabbar active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/add" icon="add-o">添加</van-tabbar-item>
      <van-tabbar-item replace to="/details" icon="gold-coin-o">详情</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
