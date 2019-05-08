<template>
  <div class="app-container">

    <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
    </el-button>

    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item) in editableTabs" :key="item.name" :label="item.title" :name="item.name" >
            <component :ref="item.content" v-bind:is="item.content" :param="item.param" @watchChild="parentReceive"></component>
        </el-tab-pane>
    </el-tabs>

  </div>

</template>

<script>
import abc from './abc'
import def from './def'

export default {
  name: 'Tmp',
  components: {
    abc,
    def,
    home: {
      template: '<div>gggggggg</div>'
    }
  },
  methods: {
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      console.info(newTabName)
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'abc',
        param: {
          id: '2-3',
          name: '2-3'
        }
      })
      this.editableTabsValue = newTabName
      console.info()
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    parentReceive (message) {
      console.info(message)
    }
  },
  data () {
    return {
      currentTabComponent: 'home',
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'home'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'home'
      }],
      tabIndex: 2
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
