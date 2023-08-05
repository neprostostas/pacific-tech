<template>
  <LetsTalkLayout>
    <ThankYou />
  </LetsTalkLayout>
</template>

<script>
import { defineComponent } from "vue"
import useScrollToTop from "@/js/helpers/UseScrollToTop";
import LetsTalkLayout from "@/components/lets_talk/LetsTalkLayout";
import ThankYou from "@/components/lets_talk/ThankYou";

export default defineComponent({
  name: 'LetsTalk',
  components: {
    LetsTalkLayout,
    ThankYou
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