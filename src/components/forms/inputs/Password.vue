<template>
  <fieldset class="name-form-field">
    <label :for="id">
      {{ label }}
      <span v-if="required"></span>
      <span v-if="tooltip">Tooltip</span>
    </label>
    <!-- TODO toggle option -->
    <input
      type="password"
      :id="id"
      class="name-form-inputText"
      :placeholder="placeholder"
      v-model="model" />
  </fieldset>
</template>

<script>

export default {
  name: 'password-input',
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
    model: {
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
      value: '',
    };
  },
  created() {

  },
};
</script>

<style scoped lang="scss">

</style>
