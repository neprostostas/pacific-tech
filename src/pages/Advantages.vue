<template>

  <div class="container">
    <div class="placeholder"></div>
    <h2 class="big-heading">Advantages</h2>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import useScrollToTop from "@/js/helpers/UseScrollToTop";

export default defineComponent({
  name: 'Advantages',
  setup() {
    useScrollToTop();


    return {

    }
  }
});
</script>

<style scoped>

</style>