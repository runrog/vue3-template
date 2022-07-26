<template>
  <div class="insideRevive-dashboard">
    <dashboard-nav />
    <div class="insideRevive-dashboard-page">
      <top-controls />
      <div class="">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import FormField from 'ç/forms/inputs/Field.vue';
// import LogoLoader from 'ç/loaders/logo/Logo.vue';
// import ButtonCta from 'ç/buttons/Cta.vue';
import FormValidator from '@/mixins/Validator.vue';
import Nav from './nav/Nav.vue';
import TopControls from './top-controls/TopControls.vue';

export default {
  name: 'login-page',
  mixins: [FormValidator],
  components: {
    'dashboard-nav': Nav,
    'top-controls': TopControls,
    // LogoLoader,
    // ButtonCta,
    // 'form-field': FormField,
  },
  data() {
    return {
      loading: false,
      email: 'asdasd',
      code: '',
      password: '',
    };
  },
  created() {},
  methods: {
    // async onLogin() {
    //   try {
    //     this.loading = true;
    //     this.validate(['email', 'password']);
    //     await new Promise((res) => {
    //       setTimeout(() => {
    //         res();
    //       }, 2000);
    //     });
    //   } catch (e) {
    //     this.$log.error(e);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
.insideRevive-dashboard {
  background-color: $white;
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100%;
}

.insideRevive-dashboard-page {
  background-color: $white;
  color: $black;
  padding: 20px;
}
</style>
