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
    <el-table :data="tableData" style="width: 100%;height:650px" max-height="650">
      <el-table-column prop="id" label="序号" width="100"></el-table-column>
      <el-table-column prop="img" label="图片">
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
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </div>

    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-form-item label="姓名" :label-width="formLabelWidth">
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
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          id: 1,
          img:
            "http://img5.imgtn.bdimg.com/it/u=2815812707,466418046&fm=26&gp=0.jpg",
          name: "青桔"
        },
        {
          id: 2,
          img:
            "http://img5.imgtn.bdimg.com/it/u=2524466911,3868506368&fm=26&gp=0.jpg",
          name: "蓝莓"
        },
        {
          id: 3,
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3546881446,2869360182&fm=26&gp=0.jpg",
          name: "山竹"
        },
        {
          id: 4,
          img:
            "http://img3.imgtn.bdimg.com/it/u=3590582356,2618273529&fm=26&gp=0.jpg",
          name: "西红柿"
        },
        {
          id: 5,
          img:
            "http://img5.imgtn.bdimg.com/it/u=2866127480,1170172053&fm=26&gp=0.jpg",
          name: "西瓜"
        },
        {
          id: 6,
          img:
            "http://img0.imgtn.bdimg.com/it/u=3815820151,1009732317&fm=26&gp=0.jpg",
          name: "牛油果"
        }
      ],
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
      currentPage4: 1,
      imageUrl: ""
    };
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
  border: 1px dashed #d9d9d9;
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
</style>