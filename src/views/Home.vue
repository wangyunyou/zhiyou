<template>
  <div class="home">
    <HelloWorld msg="智友小站后台管理系统欢迎您" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
