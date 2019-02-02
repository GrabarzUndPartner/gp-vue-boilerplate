<template>
  <h1 class="test">
    {{ content }}
    <span class="blue">
      blue
      <span class="green">
        green
      </span>
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

<style lang="postcss">
.test {
  color: green;
  background: red;
}

.test1 {
  font-size: responsive;
  color: red;

  &.a {
    color: yellow;
  }

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
