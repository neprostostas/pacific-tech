<template>

  <HeroSection />
  <OurSpecialityBlock />
  <AdvantagesBlock />
  <OurServicesBlock />



</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection";
import OurSpecialityBlock from "@/components/home/OurSpeciality";
import AdvantagesBlock from "@/components/home/Advantages";
import OurServicesBlock from "@/components/home/OurServices";

export default defineComponent({
  name: 'Home',
  components: {
    AdvantagesBlock,
    HeroSection,
    OurSpecialityBlock,
    OurServicesBlock
  },
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

</style>