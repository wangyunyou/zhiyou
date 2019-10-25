<template>
  <el-container>
    <el-header>
      <div class="top">
        <div class="logo">智友小站后台管理系统</div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">修改密码</el-menu-item>
          <el-menu-item index="2">退出</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#34373b"
              text-color="#fff"
              active-text-color="yellow"
              router
              style="text-align:left"
            >
              <el-menu-item index="1" route="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-menu-item index="2" route="/user">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1" route="/goodsStyle">商品类型</el-menu-item>
                  <el-menu-item index="3-2" route="/goodsSpecifications">商品规格</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="4" route="/order">
                <i class="el-icon-menu"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>货栈管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1" route="/center">货栈维护</el-menu-item>
                  <el-menu-item index="5-2" route="/goodsCenter">销售商品维护</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="6" route="/community">
                <i class="el-icon-menu"></i>
                <span slot="title">小区管理</span>
              </el-menu-item>

              <el-menu-item index="7" route="/equipment">
                <i class="el-icon-menu"></i>
                <span slot="title">设备管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container class="main-container">
        <el-main>
          <router-view />
        </el-main>
        <el-footer>南京金智海智能科技有限公司 ©</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {}
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

html,
body {
  width: 100%;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
  height: 60px;
}

.el-footer {
  text-align: center;
  color: #333;
  background-color: #bcbfc2;
}

.el-aside {
  height: calc(100vh - 60px);
  background-color: #34373b;
  color: #333;
  text-align: center;
}

.top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  box-sizing: border-box;
}

.logo {
  height: 100%;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
}

.aside-list {
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #fff;
  color: #fff;
  line-height: 50px;
}

.aside-list li {
  border-bottom: 1px solid #fff;
  cursor: pointer;
  transition: 0.5s;
}

.aside-list li:hover {
  background: rgb(8, 200, 214);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-menu {
  border-right-width: 0 !important;
}

.main {
  text-align: center;
  margin-top: 100px;
}

.main-container {
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>
