<template>

    <header>
      <div class="header-outer">
        <div class="header-inner">

          Header

          <router-link to="/">Main</router-link>
          <router-link to="/about-us">About Us</router-link>

        </div>
      </div>

    </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CustomHeader',
  components: {},
  setup() {

    return {
    }
  }

});
</script>

<style scoped>

</style>