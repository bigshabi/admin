<template>
    <section class="app-main">
        abc{{param.id}}
    </section>
</template>

<script>

export default {
  name: 'add',
  props: ['param'],
  mounted: function () {
    console.info('add')
  },
  methods: {
    test: function (id) {
      console.info('add')
      this.param.id = id
    }
  }
}
</script>
