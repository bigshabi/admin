<template>
    <section class="app-main">
        def{{param.id}}
    </section>
</template>

<script>

export default {
  name: 'def',
  props: ['param'],
  mounted: function () {
    console.info('def')
  }
}
</script>
