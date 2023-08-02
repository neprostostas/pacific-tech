<template>
  <div class="main-layout">
    <HrLines />
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
import HrLines from "@/components/base/HrLines";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'MainLayout',
  components: {
    CustomHeader,
    CustomFooter,
    HrLines,
  },
  setup() {

    return {

    }
  }

});
</script>

<style scoped>

</style>
