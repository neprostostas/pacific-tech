<template>
  <div class="container">
    <div class="hr-wrapper" ref="hrWrapper">
      <hr>
      <hr>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'HrLines',
  setup() {

    const hrWrapper = ref(null);
    const route = useRoute();

    watch(route, (to) => {
      if (to.path === '/lets-talk') {
        hrWrapper.value.classList.add('lets-talk');
      } else {
        hrWrapper.value.classList.remove('lets-talk');
      }
    });

    return {
      hrWrapper
    }
  }

});
</script>

<style scoped>

.hr-wrapper {
  pointer-events: none;

  max-width: 1680px;
  width: 100%;
  position: relative;
  z-index: 11;
  left: 50%;
  transform: translate(-50%, 0);
}

.hr-wrapper hr {
  background: linear-gradient(225deg, rgba(35, 35, 35, 0.00) 0%, #232323 100%);
  transform: rotate(180deg);
  height: 90vh;
  width: 1px;
  position: absolute;
  z-index: 12;
  top: -200px;
}

.hr-wrapper.lets-talk hr {
  height: 65vh;
  min-height: 399px;
  max-height: 575px;
}

.hr-wrapper hr:first-child {
  left: 0;
}

.hr-wrapper hr:last-child {
  right: 0;
}

@media screen and (max-width: 1350px) {

  .hr-wrapper.lets-talk hr {
    height: 55vh;
    max-height: 500px;
  }

}

@media screen and (max-width: 920px) {

  .hr-wrapper hr {
    height: 70vh;
  }

  .hr-wrapper.lets-talk hr {
    height: 62vh;
    max-height: 400px;
  }

}

</style>
