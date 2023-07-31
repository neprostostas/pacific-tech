<template>

  <HeroSection />
  <OurSpecialityBlock />
  <AdvantagesBlock />


</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection";
import OurSpecialityBlock from "@/components/home/OurSpeciality";
import AdvantagesBlock from "@/components/home/Advantages";

export default defineComponent({
  name: 'Home',
  components: {
    AdvantagesBlock,
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