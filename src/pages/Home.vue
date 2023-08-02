<template>

  <HeroSection />
  <OurSpecialityBlock />
  <OurAdvantagesBlock />
  <OurServicesBlock />
  <OurProjectsBlock />



</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection";
import OurSpecialityBlock from "@/components/home/OurSpeciality";
import OurAdvantagesBlock from "@/components/home/OurAdvantages";
import OurServicesBlock from "@/components/home/OurServices";
import OurProjectsBlock from "@/components/home/OurProjects";

export default defineComponent({
  name: 'Home',
  components: {
    OurAdvantagesBlock,
    HeroSection,
    OurSpecialityBlock,
    OurServicesBlock,
    OurProjectsBlock
  },
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

</style>