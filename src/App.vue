<template>
  <el-container>
    <el-header>
      <div class="top">
        <div class="logo">金智海后台管理系统</div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item @click="changePwd = true">修改密码</el-menu-item>
          <el-menu-item @click="logOut">退出</el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <el-dialog title="修改密码" :visible.sync="changePwd" width="30%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="请输入原密码">
          <el-input type="password" v-model="form.oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码">
          <el-input type="password" v-model="form.newPwd"></el-input>
        </el-form-item>
        <el-form-item label="请确认新密码">
          <el-input type="password" v-model="form.confirmPwd"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changePwd = false">取 消</el-button>
        <el-button type="primary" @click="changePwd = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#34373b"
              text-color="#fff"
              active-text-color="#FFFF00"
              router
              style="text-align:left"
            >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-menu-item index="/user">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/goodsStyle">商品类型</el-menu-item>
                  <el-menu-item index="/goodsSpecifications"
                    >商品规格</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="/order">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-s-grid"></i>
                  <span>货栈管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/center">货栈维护</el-menu-item>
                  <el-menu-item index="/goodsCenter">销售商品维护</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="/community">
                <i class="el-icon-s-shop"></i>
                <span slot="title">小区管理</span>
              </el-menu-item>

              <el-menu-item index="/equipment">
                <i class="el-icon-s-flag"></i>
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
      changePwd: false,
      form: {
        oldPwd: "",
        newPwd: "",
        confirmPwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    logOut() {
      this.$message({
        message: "您已退出，请重新登录",
        type: "warning"
      });
    }
  }
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
