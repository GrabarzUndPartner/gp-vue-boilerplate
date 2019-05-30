<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
  created () {
    console.log('HEADLINE');
  }
};
</script>

<style lang="postcss">
</style>
