<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app, .app-wrapper {
  height: 100%
}
body {
  margin: auto
}
.el-aside {
  background-color: #304156;
}
</style>
