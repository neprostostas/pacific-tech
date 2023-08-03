<template>
  <div class="container">
    <div class="hr-wrapper">
      <hr>
      <hr>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'HrLines',
  setup() {

    return {

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

.hr-wrapper hr:first-child {
  left: 0;
}

.hr-wrapper hr:last-child {
  right: 0;
}

@media screen and (max-width: 920px) {

  .hr-wrapper hr {
    height: 70vh;
  }

}

</style>
