<template>
  <div class="app-container">

    <el-tabs type="border-card" v-model="tableTabsValue" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in tableTabs" :key="index" :label="item.title" :name="item.name">
            <component :ref="item.child" :is="item.child" :param="item.param" @watch-tabs-remove="removeTab" @watch-tabs-add="addTab"></component>
        </el-tab-pane>
    </el-tabs>

  </div>

</template>

<script>
import lists from './lists'
import add from './add'

export default {
  name: 'Index',
  components: {
    lists,
    add
  },
  methods: {
    addTab (e) {
      let tmp = ''
      this.tableTabs.forEach((v) => {
        if (v.title === e.title) {
          tmp = v
        }
      })
      if (tmp !== '') {
        this.tableTabsValue = tmp.name
        this.$refs[tmp.child][0].test(e.param.id)
      } else {
        let newTabName = ++this.tabIndex + ''
        this.tableTabs.push({
          title: e.title,
          name: newTabName,
          child: e.child,
          param: e.param
        })
        this.tableTabsValue = newTabName
      }
    },
    removeTab (targetName) {
      let tabs = this.tableTabs
      let activeName = this.tableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.title === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      // this.tableTabsValue = activeName
      this.tableTabsValue = '1'
      // this.tableTabs = tabs.filter(tab => tab.name !== targetName)
      this.tableTabs = tabs.filter(tab => tab.title !== targetName)
    }
  },
  data () {
    return {
      tableTabsValue: '1',
      tabIndex: 1,
      tableTabs: [{
        title: '用户',
        name: '1',
        child: 'lists'
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
