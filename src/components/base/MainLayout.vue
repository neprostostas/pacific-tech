<template>
  <div class="main-layout">

    <div class="hr-wrapper container">
      <hr>
      <hr>
    </div>

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

.hr-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.hr-wrapper hr {
  background: linear-gradient(225deg, rgba(35, 35, 35, 0.00) 0%, #232323 100%);
  transform: rotate(180deg);
  height: 120%;
  width: 1px;
  position: absolute;
  z-index: 12;
  top: -200px;
}

.hr-wrapper hr:first-child {
  left: 0;
}

.hr-wrapper hr:last-child {
  right: 0;
}

</style>
