<template>
  <div class="app-container">

    <el-row style="min-height:50px;background:#fff;margin:6px 0;">
      <el-col class="operation ta-l">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </el-col>
    </el-row>

    <el-row style="min-height:50px;background:#fff;margin:6px 0;">
      <el-col class="search ta-r">
        <el-input placeholder="请输入内容" style="width:200px"></el-input>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-input placeholder="请输入内容" style="width:200px"></el-input>
        <el-input placeholder="请输入内容" style="width:200px"></el-input>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-input placeholder="请输入内容" style="width:200px"></el-input>
      </el-col>
    </el-row>

    <!--table-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row style="min-height:50px;background:#fff;margin:20px auto;">
      <el-col class="pages ta-r">
        <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
        </el-pagination>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Table',
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  }
}
</script>

<style>
.search, .operation {
  margin: 8px 8px 0 8px;
  width: auto;
}
.search div, .search button, .operation button {
  margin-bottom: 8px;
}
.ta-l {
  text-align: left;
}
.ta-r {
  text-align: right;
}
.pages {
  width: -webkit-fill-available;
  margin: 8px 8px 0 8px;
}
</style>
