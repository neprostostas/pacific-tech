<template>

  <HeroSection />

  <div class="page-outer">
    <div class="page-inner container">

    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection.vue";

export default defineComponent({
  name: 'Home',
  components: {
    HeroSection
  },
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

.page-inner {
  padding: 20px 20px;
}

</style>