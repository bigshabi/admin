<template>
  <div class="app-wrapper">
    <!-- <el-container style="height:100%">
      <el-header style="height:50px">
        <div class="navbar">
          navbar
        </div>
        <div class="tags-view-container"></div>
      </el-header>
      <el-container> -->
        <!--aside-->
        <!-- <Aside />

        <el-container>
          <TagsView />
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container> -->

    <el-container style="height:100%">
      <Aside ref="aside" />
      <el-container>
        <el-header height="50px">
          <div class="navbar">
            <i class="el-icon-setting"></i>
            navbar
          </div>
          <div class="tags-view-container"></div>
        </el-header>
        <TagsView />
        <el-main size="small" style="background: #f1f1f1;">
          <!-- <TagsView /> -->
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>

  </div>
</template>

<script>
import { Breadcrumb } from './components'
import Aside from './components/Aside'
import TagsView from './components/TagsView'

export default {
  name: 'Lay',
  components: {
    Breadcrumb,
    Aside,
    TagsView
  },
  data () {
    return {
      lay: 'store'
    }
  },
  mounted () {
    console.info(88)
  },
  methods: {
    collapse: function () {
      this.$refs['aside'].collapse()
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
