<template>
    <section class="app-main">
        <!-- <el-tabs type="border-card">
            <el-tab-pane label="首页">首页</el-tab-pane>
            <el-tab-pane label="表格">
                <Breadcrumb />
            </el-tab-pane>
            <el-tab-pane label="表单">
                <Breadcrumb />
            </el-tab-pane>
            <el-tab-pane label="设置">
                <Breadcrumb />
            </el-tab-pane>
        </el-tabs> -->

        <!-- <el-tabs @tab-click="clickTab" style="paddimg:5px" type="card" v-model="tagsViewIndex" :closable="tagsView.length==1?false:true" @tab-remove="removeTab"> -->
            <!-- <el-tab-pane v-for="(item) in tagsView" :key="item.name" :label="item.title" :name="item.index" :url="item.url"> -->
                <!-- <Breadcrumb /> -->
            <!-- </el-tab-pane> -->
        <!-- </el-tabs> -->
        的点点滴滴

    </section>
</template>

<script>

export default {
  name: 'abc'
//   data () {
//     return {
//       editableTabsValue2: this.$store.state.tagsViewIndex,
//       editableTabs2: this.$store.state.tagsView
//     }
//   },
//   methods: {
//     removeTab (targetName) {
//       this.$store.commit('removeTagsView', {index: targetName})
//       this.$store.commit('resetBreadcrumb')
//     },
//     clickTab: function (event) {
//       this.$store.commit('resetBreadcrumb', {index: event.name})
//       this.$store.commit('setTagsViewUrl', {index: event.name})
//       this.$router.push({path: this.$store.state.tagsViewUrl})
//     }
//   },
//   computed: {
//     tagsView () {
//       return this.$store.state.tagsView
//     },
//     tagsViewIndex: {
//       get () {
//         return this.$store.state.tagsViewIndex
//       },
//       set (val) {
//         this.$store.state.tagsViewIndex = val
//       }
//     }
//   }
}
</script>

<style>
.el-tabs__header {
    margin-bottom: auto
}
.el-tabs__content {
    padding: 8px
}
</style>
