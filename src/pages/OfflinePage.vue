<template>
  <div class="container">
    <div class="offline-page">
      <div class="top-block">
        <h2 class="big-heading color-primary">404</h2>
        <h2 class="heading-2 color-primary">You are offline!</h2>
        <h3 class="color-primary pt-10">Please check your internet connection and try again.</h3>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'OfflinePage',
  setup() {

    return {

    }
  }
});
</script>

<style scoped>

.offline-page {
  margin: 120px 0 200px;
}

.top-block {
  padding: 100px 40px;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;

  /* hardcode 👇*/
  height: calc(100vh - 741px);
  align-content: center;
}

.pt-10 {
  padding-top: 10px;
  text-align: center;
}

@media screen and (max-width: 920px) {

  /* hardcode 👇*/
  .top-block {
    height: calc(100vh - 344px);
  }

  .offline-page {
    margin: 53px 0 80px;
  }

  .top-block {
    padding: 40px 4.267vw;
  }

  .pt-10 {
    max-width: 200px;
    width: 100%;
  }

}

</style>