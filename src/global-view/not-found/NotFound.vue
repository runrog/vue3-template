<template>
  <div class="insideRevive-404-page">
    <div class="row row-center">
      <img class="insideRevive-404" src="./404.svg" alt="404 image" />
    </div>
    <div class="row row-center">
      <div class="row">
        Oops, that page doesn't exist.
      </div>
      <div class="row">
        <span class="insideRevive-404-lost">Lost?</span>
      </div>
      <div class="row">
        <strong>
          Whoever finds his life will lose it, and whoever loses his life for my
          sake will find it (Matthew 10:39).
        </strong>
      </div>
    </div>
    <div class="row row-center">
      <router-link
        class="insideRevive-dashboard-link"
        to="/my-profile">
        Back to Dashboard
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'not-found-page',
};
</script>

<style scoped lang="scss">
.insideRevive-404-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.insideRevive-404 {
  width: 85%;

  @media screen and (min-width: $tablet-min) {
    width: 200px;
  }
}

.insideRevive-404-lost {
  font-family: 'proxima-bold';
  font-size: 36px;
}

.insideRevive-dashboard-link {
  color: $black;
  text-decoration: none;
  transition-duration: .2s;

  &:before {
    content: '\e808';
    display: inline-block;
    font-family: 'revive';
    margin-right: 5px;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
