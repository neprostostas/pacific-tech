<template>
  <div class="main-layout">
    <HrLines />
    <CustomHeader/>
    <main>
        <router-view v-if="isOnline"/>
        <OfflinePage v-else/>
    </main>
    <CustomFooter/>
  </div>
</template>

<script>
import CustomHeader from '@/components/base/Header'
import CustomFooter from '@/components/base/Footer'
import HrLines from "@/components/base/HrLines";
import OfflinePage from "@/pages/OfflinePage";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: 'MainLayout',
  components: {
    CustomHeader,
    CustomFooter,
    HrLines,
    OfflinePage
  },
  setup() {

    const isOnline = ref(navigator.onLine);

    const updateOnlineStatus = () => {
      isOnline.value = navigator.onLine;
    };

    onMounted(() => {
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });

    onUnmounted(() => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    });

    return {
      isOnline
    }
  }

});
</script>

<style scoped>

</style>
