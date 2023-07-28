<template>

  <HeroSection />
  <OurSpecialityBlock />


</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection";
import OurSpecialityBlock from "@/components/home/OurSpeciality";

export default defineComponent({
  name: 'Home',
  components: {
    HeroSection,
    OurSpecialityBlock
  },
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

</style>