<template>

  <div class="thanks-block">
    <h2 class="heading-1 color-primary">THANK YOU!</h2>
    <h2 class="heading-2 color-primary p-50 fs-24">Your request  has been sent, the information will be sent to your email.</h2>
    <button @click="goHome" class="back-home fs-24">BACK</button>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'ThankYou',
  setup() {

    const router = useRouter();
    const goHome = () => router.push({ name: "Home" });

    return {
      goHome
    }
  }
});
</script>

<style scoped>

.thanks-block {
  text-align: center;
  padding: 100px 0;
}

.p-50 {
  margin: 0 auto;
  padding: 55px 0 50px;
  max-width: 595px;
  width: 100%;
}

.back-home {
  border: none;
  padding: 15px 95px;
  background: var(--color-primary, #232323);
  color: var(--color-white, #E8E8E8);
}

.back-home:hover {
  background: var(--gradient-blue, radial-gradient(135.78% 135.78% at -5.98% 11.82%, #000 0%, #142743 62.53%, #38618A 100%));
}

@media screen and (max-width: 1850px) {

  .p-50 {
    max-width: 520px;
  }

}

@media screen and (max-width: 1780px) {

  .p-50 {
    max-width: 500px;
  }

}

@media screen and (max-width: 920px) {

  .fs-24 {
    font-size: 24px;
  }

  .thanks-block {
    padding: 50px 0 80px;
  }

  .back-home {
    width: 100%;
    padding: 10px 95px;
  }

  .p-50 {
    max-width: 345px;
  }

}

</style>