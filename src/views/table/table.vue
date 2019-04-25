<template>
  <div class="app-container">

    <el-row style="min-height:50px;background:#fff;margin:6px 0;">
        <el-col class="operation ta-l">
        <el-button type="primary" @click="add" icon="el-icon-circle-plus-outline" size="small">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>
        <el-button type="danger" icon="el-icon-delete" size="small">全部删除</el-button>
        </el-col>
    </el-row>

    <el-row style="min-height:50px;background:#fff;margin:6px 0;">
        <el-col class="search ta-r">
        <el-select v-model="selectValue" size="small" clearable placeholder="请选择">
            <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" size="small" style="width:200px"></el-input>
        <el-button type="success" icon="el-icon-search" size="small">搜索</el-button>
        <el-button type="danger" icon="el-icon-delete" size="small">清空</el-button>
        </el-col>
    </el-row>

    <!--table-->
    <el-table :data="tableData" border style="width: 100%" size="medium" @sort-change="sortChange" :default-sort="{}" :header-row-class-name="'table-header-bg'">
        <el-table-column type="selection" width="40" header-align="center" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="80" sortable="custom"> </el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="date" label="时间" width="200" sortable="custom"> </el-table-column>
        <el-table-column label="状态" width="80">
            <template slot-scope="scope">
                <el-tag size="medium" v-if="scope.row.state===1">{{state[scope.row.state]}}</el-tag>
                <el-tag size="medium" type="success" v-if="scope.row.state===2">{{state[scope.row.state]}}</el-tag>
                <el-tag size="medium" type="danger" v-if="scope.row.state===3">{{state[scope.row.state]}}</el-tag>
                <el-tag size="medium" type="warning" v-if="scope.row.state===4">{{state[scope.row.state]}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="禁言" width="80">
            <template slot-scope="scope">
                <el-switch active-color="#13ce66" :value="scope.row.banned===1?true:false" inactive-color="#ff4949"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-row style="min-height:50px;background:#fff;margin:20px auto;">
        <el-col class="pages ta-r">
        <el-pagination background layout="total, prev, pager, next" :total="1000">
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
    },
    sortChange: function (e) {
      console.info(e)
    },
    add: function () {
      this.$emit('watch-child', {
        title: '新增',
        child: 'add',
        param: {
          id: this.number++
        }
      })
    }
  },
  data () {
    return {
      number: 0,
      currentTabComponent: 'abc',
      dialog: false,
      selectData: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      state: {
        1: '未开始',
        2: '已开始',
        3: '已结束',
        4: '已过期'
      },
      selectValue: '',
      tableData: [{
        id: 1,
        mobile: '13000000000',
        date: '2016-05-02',
        name: '王小虎',
        state: 1,
        banned: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        mobile: '13000000000',
        date: '2016-05-04',
        name: '王小虎',
        state: 2,
        banned: 1,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        mobile: '13000000000',
        date: '2016-05-01',
        name: '王小虎',
        state: 3,
        banned: 2,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: 4,
        mobile: '13000000000',
        date: '2016-05-03',
        name: '王小虎',
        state: 4,
        banned: 2,
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
