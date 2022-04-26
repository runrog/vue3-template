<template>
  <fieldset class="name-form-field">
    <label class="name-form-label" :for="id">
      {{ label }}
      <span v-if="required"></span>
      <span v-if="tooltip">Tooltip</span>
    </label>
    <input
      type="text"
      :id="id"
      class="name-form-inputText"
      :placeholder="placeholder"
      v-model="inputValue" />
  </fieldset>
</template>

<script>

export default {
  name: 'text-input',
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
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  created() {
    this.inputValue = this.value;
  },
};
</script>

<style scoped lang="scss">
.name-form-field {
  border: 0;
  margin: 0;
  padding: 0;
}

.name-form-inputText {
  width: 100%;
}

.name-form-label {
  display: block;
  text-align: left;
}
</style>
