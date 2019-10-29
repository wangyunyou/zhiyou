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
      <el-table-column prop="weight" label="重量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
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
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-checkbox label="理货员" name="type"></el-checkbox>
          <el-checkbox label="配送员" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item label="工作场所" :label-width="formLabelWidth">
          <el-select v-model="form.workPlace" placeholder="请选择活动区域">
            <el-option label="理货中心A" value="shanghai"></el-option>
            <el-option label="理货中心B" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户状态" :label-width="formLabelWidth">
          <el-select v-model="form.state" placeholder="请选择用户状态">
            <el-option label="正常" value="shanghai"></el-option>
            <el-option label="离职" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="登录密码" :label-width="formLabelWidth">
          <el-input v-model="form.pwd" autocomplete="off" show-password></el-input>
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
          weight: "100",
          unit: "g（克）"
        },
        {
          id: 2,
          weight: "200",
          unit: "g（克）"
        },
        {
          id: 3,
          weight: "300",
          unit: "g（克）"
        },
        {
          id: 4,
          weight: "500",
          unit: "g（克）"
        },
        {
          id: 5,
          weight: "1000",
          unit: "g（克）"
        },
        {
          id: 6,
          weight: "2000",
          unit: "g（克）"
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
      currentPage4: 1
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
</style>