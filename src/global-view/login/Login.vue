<template>
  <div class="insideRevive-login-page">
    <div class="insideRevive-login-box">
      <div v-if="!loading">
        <div class="row row-center">
          <img
            src="./login-logo-black.svg"
            class="insideRevive-login-logo"
            alt="Revive Logo" />
        </div>
        <div class="row">
          <form-field :id="'login-email'" :label="'Email'">
            <input
              type="email"
              id="login-email"
              v-model="email"
              class="insideRevive-form-inputText" />
          </form-field>
        </div>
        <div class="row">
          <form-field :id="'login-password'" :label="'Password'">
            <input
              type="password"
              id="login-password"
              v-model="password"
              class="insideRevive-form-inputText" />
          </form-field>
        </div>
        <div class="row">
          <button-cta :text="'LOGIN'" @on-click="onLogin" />
        </div>
      </div>
      <div v-else>
        <div class="row row-center">
          <logo-loader :width="'150px'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from 'ç/forms/inputs/Field.vue';
import LogoLoader from 'ç/loaders/logo/Logo.vue';
import ButtonCta from 'ç/buttons/Cta.vue';
import FormValidator from '@/mixins/Validator.vue';

export default {
  name: 'login-page',
  mixins: [FormValidator],
  components: {
    LogoLoader,
    ButtonCta,
    'form-field': FormField,
  },
  data() {
    return {
      loading: false,
      email: 'asdasd',
      code: '',
      password: '',
    };
  },
  methods: {
    async onLogin() {
      try {
        this.loading = true;
        this.validate(['email', 'password']);
        await new Promise((res) => {
          setTimeout(() => {
            res();
          }, 2000);
        });
        this.$router.push('/dashboard');
      } catch (e) {
        this.$log.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.insideRevive-login-page {
  background-color: $black;
  background-image: url('./login-bg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.insideRevive-login-logo {
  width: 100px;
}

.insideRevive-login-box {
  background-color: $white;
  padding: 25px;
  width: 90%;

  @media screen and (min-width: $tablet-min) {
    width: 500px;
  }
}

</style>
