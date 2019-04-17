<template>
    <el-aside width="200px">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
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
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.sidebar
    }
  }
}
</script>
