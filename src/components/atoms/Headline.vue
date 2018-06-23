<template>
  <h1 class="test">{{ content }}
    <span class="blue">blue
      <span class="green">green</span>
    </span>
  </h1>
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

<style lang="postcss" module>
:local(.test) {
  background: red;
  color: yellow;
}
.test1 {
  color: red;
  font-size: responsive;

  .blue {
    color: blue;

    .green {
      color: green;
    }
  }
}

.aha {
  color: green;
}
</style>
