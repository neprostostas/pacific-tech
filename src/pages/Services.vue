<template>

  <div class="container">
    <div class="placeholder"></div>
    <h2 class="big-heading">Services</h2>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import useScrollToTop from "@/js/helpers/UseScrollToTop";

export default defineComponent({
  name: 'Services',
  setup() {
    useScrollToTop();

    return {

    }
  }
});
</script>

<style scoped>

</style>