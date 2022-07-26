<template>
  <router-view />
</template>

<script>

export default {
  name: 'Inside-Revive',
  created() {
    this.$log.info('Env variabls: ', process.env);
  },
};
</script>
