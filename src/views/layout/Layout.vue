<template>
  <div class="app-wrapper">
    <div class="main-container">
      <navbar/>
      <tags-view/>
      <!-- <app-main/> -->
    </div>
  </div>
</template>

<script>
import { Navbar } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
