<template>
    <section class="app-main">
        abc{{param.id}}
    </section>
</template>

<script>

export default {
  name: 'abc',
  props: ['param'],
  mounted: function () {
    console.info('abc')
  },
  methods: {
    test: function () {
      console.info('abc-test')
    }
  }
}
</script>
