<template>
  <div class="insideRevive-top-controls">
    <div class="insideRevive-top-header">
      Inside Revive
    </div>
    <div class="insideRevive-top-right">
      <div class="insideRevive-dashboard-searchBox">
        <input type="text" class="insideRevive-dashboard-search" />
      </div>
      <router-link
        v-if="user.admin || user.editor"
        :class="{
          'insideRevive-dashboard-active': $router.currentRoute.value.path === '/admin-dashboard',
        }"
        class="insideRevive-admin-link"
        to="/admin-dashboard">
      </router-link>
      <router-link to="/my-profile" class="insideRevive-profile-link">
        <img
          class="insideRevive-profile-pic"
          v-if="user.profilePic"
          :src="profilePic"
          alt="profile picture" />
        <img
          class="insideRevive-profile-pic"
          v-else
          src="./default-profile.svg"
          alt="profile picture" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'top-controls',
  computed: {
    ...mapGetters(['user']),
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.insideRevive-top-controls {
  border-bottom: 1px solid rgba($black, .1);
  display: grid;
  grid-template-columns: 30% 1fr;
  margin-bottom: 20px;
  padding-bottom: 20px;
  // background-color: $black;
  // color: $white;
  // display: flex;
  // flex-direction: column;
  // padding: 20px 0;
  // position: relative;
  // left: -250px;
  //
  // @media screen and (min-width: $tablet-min) {
  //   left: 0;
  // }
}

.insideRevive-dashboard-searchBox {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 60%;

  &:before {
    display: inline-block;
    content: '\e806';
    font-family: 'revive';
    left: 10px;
    opacity: .3;
    pointer-events: none;
    position: absolute;
  }
}

.insideRevive-dashboard-search {
  background-color: rgba($black, .05);
  border: 1px solid transparent;
  font-size: 18px;
  padding: 3px;
  padding-left: 35px;
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

.insideRevive-profile-pic {
  border-radius: 50%;
  width: 35px;
}

.insideRevive-profile-link {
  display: inline-block;
  margin-left: 15px;
}

.insideRevive-top-header {
  align-items: center;
  display: flex;
  font-family: 'proxima-bold';
  font-size: 28px;
}

.insideRevive-top-right {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.insideRevive-admin-link {
  color: rgba($black, .5);
  display: inline-block;
  font-size: 18px;
  margin-left: 15px;

  &:before {
    display: inline-block;
    content: '\e804';
    font-family: 'revive';
  }
}
</style>
