<template>
  <div>
    <!-- this won't be transformed -->
    {{ test ?? 'other' }}
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    test: String,
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
