<template>
  <h1 :class="$style.root">{{ content }}</h1>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: 'Headline'
    }
  }
};
</script>

<style module>
.root {
  color: red;
}

.aha {
  color: green;
}
</style>
