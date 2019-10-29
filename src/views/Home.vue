<template>
  <div class="container">
    <div class="line"></div>
    <div class="title">欢迎使用智友小站后台管理系统</div>
    <div class="line"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {}
};
</script>

<style scope>
.container {
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 300px;
}

.title {
  margin: 0 20px;
}

.line {
  height: 1px;
  background: #999;
  flex: 1;
}
</style>
  