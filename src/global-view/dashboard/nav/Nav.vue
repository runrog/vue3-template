<template>
  <div class="insideRevive-dashboard-nav">
    <div class="row row-center">
      <img
        class="insideRevive-dashboard-navLogo"
        src="./logo-white.svg"
        alt="Revive Dashboard Logo" />
    </div>
    <div class="row">
      <div class="insideRevive-dashboard-links">
        <router-link
          :class="{
            'insideRevive-dashboard-active': $router.currentRoute.value.path === '/home',
          }"
          class="insideRevive-dashboard-link insideRevive-icon-home"
          to="/home">
          Home
        </router-link>
        <router-link
          :class="{
            'insideRevive-dashboard-active': $router.currentRoute.value.path === '/my-profile',
          }"
          class="insideRevive-dashboard-link insideRevive-icon-profile"
          to="/my-profile">
          My Profile
        </router-link>
        <router-link
          :class="{
            'insideRevive-dashboard-active': $router.currentRoute.value.path === '/my-teams',
          }"
          class="insideRevive-dashboard-link insideRevive-icon-team"
          to="/my-teams">
          My Teams
        </router-link>
        <router-link
          :class="{
            'insideRevive-dashboard-active': $router.currentRoute.value.path === '/courses',
          }"
          class="insideRevive-dashboard-link insideRevive-icon-book"
          to="/courses">
          Courses
        </router-link>
      </div>
    </div>
    <div class="row insideRevive-nav-footer">
      <div class="insideRevive-dashboard-links">
        <a
          href="#"
          @click.prevent="logout"
          class="insideRevive-dashboard-link insideRevive-icon-logout">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard-nav',
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        this.$router.push({ path: '/login' });
      } catch (e) {
        this.$log.error(e.message || e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.insideRevive-dashboard-nav {
  background-color: $black;
  color: $white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  position: relative;
  left: -250px;

  @media screen and (min-width: $tablet-min) {
    left: 0;
  }
}

.insideRevive-dashboard-navLogo {
  width: 85px;
}

.insideRevive-dashboard-links {
  padding-top: 50px;
}

.insideRevive-dashboard-link {
  color: $white;
  display: block;
  margin-bottom: 15px;
  padding: 10px 35px;
  text-decoration: none;
  transition-duration: .2s;

  &:hover {
    color: $blue-light;
  }

  &:before {
    display: inline-block;
    font-family: 'revive';
    margin-right: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.insideRevive-dashboard-active {
  color: $blue-light;
}

.insideRevive-nav-footer {
  flex-grow: 1;
  justify-content: flex-end;
}

.insideRevive-icon-home {

  &:before {
    content: '\e807';
  }
}

.insideRevive-icon-profile {

  &:before {
    content: '\e802';
  }
}

.insideRevive-icon-team {

  &:before {
    content: '\e803';
  }
}

.insideRevive-icon-book {

  &:before {
    content: '\e800';
  }
}

.insideRevive-icon-logout {
  opacity: .6;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: '\e805';
  }
}
</style>
