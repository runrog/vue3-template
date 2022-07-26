<template>
  <div class="insideRevive-home-page">
    <div class="row">
      <div>
        Hello {{ user.firstName }}! <span class="insideRevive-handShake">👋</span>
      </div>
    </div>
    <div class="row" v-if="!insideCompleted">
      <alert>
        Attention: Some areas if this app will not be available until you complete
        the Inside Revive course.
      </alert>
    </div>
    <div class="row">
      <div class="insideRevive-home-grid">
        <div class="insideRevive-home-verse insideRevive-home-box">
          Verse
        </div>
        <div class="insideRevive-home-serve insideRevive-home-box">
          Serve
        </div>
        <div class="insideRevive-home-other insideRevive-home-box">
          Other
        </div>
        <!-- <div class="insideRevive-home-gridLeft">
          <div class="insideRevive-home-box">

          </div>
          <div class="insideRevive-home-box">

          </div>
          2 rows
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Alert from 'ç/alert/Alert.vue';

export default {
  name: 'home-page',
  computed: {
    ...mapGetters(['user']),
    insideCompleted() {
      return this.user.courses?.insideRevive?.completed;
    },
  },
  components: {
    alert: Alert,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.insideRevive-home-page {
  height: 100%;
}

.insideRevive-home-grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
}

.insideRevive-home-verse {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
}

.insideRevive-home-other {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
}

.insideRevive-home-serve {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 4;
  grid-column-end: 5;
}

.insideRevive-home-box {
  background-color: $white;
  box-shadow: -2px -2px 20px 0px rgba($blue-light, .08);
  padding: 15px;
}

@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(12deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-12deg); }
  100% { transform: rotate(0deg); }
}

.insideRevive-handShake {
  animation: tilt-shaking 0.4s 4;
  display: inline-block;
  margin-left: 5px;
  width: 25px;
}
</style>
