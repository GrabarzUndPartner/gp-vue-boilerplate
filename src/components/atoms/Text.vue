<template>
  <p>
    <slot />
  </p>
</template>

<script>
export default {
  created () {
    console.log('TEXT');
  }
};
</script>

<style lang="postcss">
p {
  font-family: serif;
  font-weight: 400;
}

.visible p {
  font-family: "Raleway", serif;
}
</style>
