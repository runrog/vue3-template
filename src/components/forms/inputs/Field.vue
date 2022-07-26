<template>
  <fieldset class="insideRevive-form-field">
    <label class="insideRevive-form-label" :for="id">
      {{ label }}
      <span v-if="required"></span>
      <span v-if="tooltip">Tooltip</span>
    </label>
    <!-- <input
      type="text"
      :id="id"
      @input="onInput($event)"
      class="insideRevive-form-inputText"
      :placeholder="placeholder"
      v-model="inputValue" /> -->
      <slot />
  </fieldset>
</template>

<script>

export default {
  name: 'form-field',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      default: 'Text Input',
    },
    // placeholder: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    // value: {
    //   type: String,
    //   required: true,
    // },
    tooltip: {
      type: String,
      required: false,
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
  // methods: {
  //   onInput($event) {
  //     this.$emit('on-input', $event.target.value);
  //   },
  // },
};
</script>

<style lang="scss">
.insideRevive-form-field {
  border: 0;
  margin: 0;
  padding: 0;
}

.insideRevive-form-inputText {
  background-color: rgba($black, .05);
  border: 2px solid transparent;
  font-family: 'proxima-bold';
  font-size: 18px;
  padding: 8px 10px;
  width: 100%;

  &:focus {
    border-color: $black;
    outline: none;
  }

  &:focus-visible {
    border-color: $black;
    outline: none;
  }
}

.insideRevive-form-label {
  display: block;
  margin-bottom: 5px;
}
</style>
