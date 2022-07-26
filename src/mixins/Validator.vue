<script>
export default {
  name: 'form-validator',
  data() {
    return {};
  },
  methods: {
    validate(fields = []) {
      // TODO vue.$set, errors
      fields.forEach((field) => {
        console.log('val: ', this[field]);
      });
    },
  },
};
</script>
