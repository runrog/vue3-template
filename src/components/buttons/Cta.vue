<template>
  <button
    type="button"
    class="insideRevive-button-cta"
    @click.prevent="onClick"
    :name="name">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'button-cta',
  props: {
    name: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
      default: 'Button Text',
    },
  },
  // data() {
  //   return {
  //     inputValue: '',
  //   };
  // },
  // created() {
  //   this.inputValue = this.value;
  // },
  methods: {
    onClick() {
      this.$emit('on-click');
    },
  },
};
</script>

<style scoped lang="scss">
.insideRevive-button-cta {
  background-color: $black;
  border: 0;
  color: $white;
  padding: 10px 15px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
}
</style>
