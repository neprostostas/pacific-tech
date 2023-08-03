<template>
  <footer>
    <div class="footer-outer">
      <div class="footer-inner container">
        <NavBarFooter />
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import NavBarFooter from "@/components/base/NavBarFooter";

export default defineComponent({
  name: 'CustomFooter',
  components: {
    NavBarFooter
  },
  setup() {

    return {
    }
  }

});
</script>

<style scoped>

.footer-outer {
  background: var(--color-primary, #232323);
}

.footer-inner {
  padding-top: 80px;
  padding-bottom: 80px;
}

@media screen and (max-width: 920px) {

  .footer-inner {
    padding-top: 40px;
    padding-bottom: 40px;
  }

}

</style>