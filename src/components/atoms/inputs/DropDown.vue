<template>
  <div>
    <label>{{ prop }}</label>
    <el-cascader
      :options="options"
      :value="selected"
      size="small"
      @change="changeFilter"/>
  </div>
</template>

<script>

export default {

  props: {
    name: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      type: String,
      default: 'value'
    }
  },

  data() {
    return {
      selected: [],
      options: []
    };
  },

  watch: {
    items: {
      handler(list) {
        this.createOptions(list);
        this.selectOption(list);
      },
      immediate: true
    },
    selected: {
      handler(value) {
        this.changeFilter(value);
      },
      immediate: true
    }
  },

  methods: {
    createOptions(list) {
      this.options = list.map((item) => ({
        value: JSON.stringify(item.value),
        label: item.label
      }));
    },

    selectOption(list) {
      this.selected = [JSON.stringify((list.find((item) => (item.selected)).value))];
    },

    changeFilter(e) {
      this.$parent.$emit('change', { [this.name]: { [this.prop]: JSON.parse(e[0]) } });
    }
  }
};
</script>

<style lang="postcss">
</style>
