<template>
  <div class="main-layout">
    <CustomHeader/>
    <main>
      <router-view />
    </main>
    <CustomFooter/>
  </div>
</template>

<script>
import CustomHeader from '@/components/base/Header'
import CustomFooter from '@/components/base/Footer'
import { defineComponent } from "vue";

export default defineComponent({
  name: 'MainLayout',
  components: {
    CustomHeader,
    CustomFooter,
  },
  setup() {

    return {

    }
  }

});
</script>


<style scoped>

</style>
