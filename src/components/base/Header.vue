<template>
  <header>
    <div class="header-outer">
      <div class="header-inner container">
        <NavBar />
      </div>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";
import NavBar from "@/components/base/NavBar";

export default defineComponent({
  name: 'CustomHeader',
  components: {
    NavBar
  },
  setup() {

    return {

    }
  }

});
</script>

<style scoped>

.header-outer {
  background: var(--gradient-gray, linear-gradient(90deg, #D8D8D8 0%, #ECEDED 56.13%, #EDEDED 100%));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-primary, #232323);
}

.header-inner {
  padding: 39px 20px 22px;
}

@media screen and (max-width: 920px) {

  .header-inner {
    padding: 16px 32px;
  }

}

</style>