<template>
  <LetsTalkLayout>
    <Form />
  </LetsTalkLayout>
</template>

<script>
import { defineComponent } from "vue"
import useScrollToTop from "@/js/helpers/UseScrollToTop";
import LetsTalkLayout from "@/components/lets_talk/LetsTalkLayout";
import Form from "@/components/lets_talk/Form";

export default defineComponent({
  name: 'LetsTalk',
  components: {
    LetsTalkLayout,
    Form
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