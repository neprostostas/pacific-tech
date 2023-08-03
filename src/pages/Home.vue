<template>

  <HeroSection />
  <OurSpecialityBlock />
  <OurAdvantagesBlock />
  <OurServicesBlock />
  <OurProjectsBlock />
<!--  <LetsTalkBlock />-->

</template>

<script>
import { defineComponent } from "vue"
import useScrollToTop from "@/js/helpers/UseScrollToTop";
import HeroSection from "@/components/home/HeroSection";
import OurSpecialityBlock from "@/components/home/OurSpeciality";
import OurAdvantagesBlock from "@/components/home/OurAdvantages";
import OurServicesBlock from "@/components/home/OurServices";
import OurProjectsBlock from "@/components/home/OurProjects";
// import LetsTalkBlock from "@/components/home/LetsTalkBlock";

export default defineComponent({
  name: 'Home',
  components: {
    HeroSection,
    OurSpecialityBlock,
    OurAdvantagesBlock,
    OurServicesBlock,
    OurProjectsBlock,
    // LetsTalkBlock
  },
  setup() {
    useScrollToTop();

    return {

    }
  }
});
</script>

<style scoped>

</style>