<template>
  <div>
    <div class="topBar">
      <el-button type="primary">
        添加
        <i class="el-icon-circle-plus-outline"></i>
      </el-button>
      <div class="inputBox">
        <el-input v-model="input" placeholder="请输入内容" style="margin-right:10px"></el-input>
        <el-button type="success">查询</el-button>
        <el-button type="danger">清空</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;height:650px"
      max-height="650"
      header-align="center"
      :cell-style="cellStyle"
      :header-cell-style="cellStyle"
    >
      <el-table-column prop="id" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="img" label="图片" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img" width="100" height="70" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogFormVisible = true">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </div>

    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <div class="uploadImg">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>-->
        </div>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      input: "",
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      currentPage: 1,
      imageUrl: ""
    };
  },

  mounted() {
    this.run();
  },
  methods: {
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          row.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },

    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    cellStyle() {
      return "text-align:center";
    },
    run() {
      let that = this;
      const axios = require("axios");
      axios
        .get(
          "http://rest.apizza.net/mock/480fbdd9fc2eaff20db72dd45597fbc2/test-wyy.json"
        )
        .then(function(e) {
          console.log(e.data.data);
          that.tableData = e.data.data;
        })
        .catch(function(res) {
          // console.log(res);
        });
    }
  }
};
</script>

<style scoped>
.topBar {
  width: 100%;
  height: 65px;
  border-top: 5px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
}

.inputBox {
  display: flex;
}

.el-input,
.el-select {
  width: 90%;
}

.block {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/* 
.uploadImg {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  margin-bottom: 20px;
} */
</style>