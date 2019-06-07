<template>
  <div class="app-container">

    <el-table :data="tableData" border style="width: 100%" size="medium" :default-sort="{}" :header-row-class-name="'table-header-bg'">
        <el-table-column type="selection" width="40" header-align="center" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="80" sortable="custom"> </el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="date" label="时间" width="120" sortable="custom"> </el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <el-button size="mini" @click="show(scope.row)">查看</el-button>
            </template>
        </el-table-column>
    </el-table>

  </div>

</template>

<script>
import request from '@/utils/request.js'

export default {
  name: 'lists',
  mounted: function () {
    request.get('./static/data/table.json', {}, (res) => {
      this.tableData = res
    })
  },
  methods: {
    show (row) {
      console.log(row)
    }
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style>
.search, .operation {
  margin: 8px 8px 0 8px;
  width: -webkit-fill-available;
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
