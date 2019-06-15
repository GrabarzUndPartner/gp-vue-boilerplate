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
h1 {
  font-family: "Amatic SC", serif;
  font-weight: 700;
}
</style>
