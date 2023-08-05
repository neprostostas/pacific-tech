<template>
  <div class="container">
    <div class="lets-talk">
      <div class="top-block">
        <h2 class="big-heading color-primary">LET’S WORK TOGETHER</h2>
        <h2 class="heading-2 color-primary">company@gmail.com</h2>
      </div>
      <div class="hr-gradient"></div>
      <slot/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'LetsTalkLayout',
  setup() {

    return {

    }
  }
});
</script>

<style scoped>

.lets-talk {
  margin: 120px 0 200px;
}

.top-block {
  padding: 100px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 920px) {

  .lets-talk {
    margin: 53px 0 80px;
  }

  .top-block {
    padding: 40px 4.267vw;
    grid-template-columns: auto;
    gap: 5px;
  }

  .top-block h2 {
    max-width: 280px;
    width: 100%;
  }

}

</style>