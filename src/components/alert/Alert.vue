<template>
  <div class="insideRevive-alert" :class="'insideRevive-alert-' + type">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'revive-alert',
  computed: {
    // ...mapGetters(['user']),
    // insideCompleted() {
    //   return this.user.courses?.insideRevive?.completed;
    // },
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'warning',
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.insideRevive-alert {
  color: $white;
  padding: 10px;
}

.insideRevive-alert-warning {
  background-color: $warning;
}
</style>
