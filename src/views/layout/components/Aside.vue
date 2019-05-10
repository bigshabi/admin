<template>
    <el-aside style="max-width:200px;width:auto">
        <el-row>
          <el-col style="height:50px;"><div>管理系统</div></el-col>
        </el-row>
        <el-row class="tac">
            <el-col :span="24">

                <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :unique-opened="true" router>

                    <el-submenu v-for="(item, key) in sidebar" :key="key" :index="item.name">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="(g, k) in item.child" :key="k" :index="key + '-' + k" :route="g.url">{{g.name}}</el-menu-item>
                    </el-submenu>

                </el-menu>

            </el-col>
        </el-row>
    </el-aside>
</template>

<script>

export default {
  name: 'Aside',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (index) {
      this.$store.commit('addTagsView', {index: index})
      this.$store.commit('resetBreadcrumb', {index: index})
    },
    collapse () {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.sidebar
    }
  },
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>
<style>
.el-aside::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
  background: #555555;
}
/* .el-aside::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #EDEDED;
} */
</style>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
