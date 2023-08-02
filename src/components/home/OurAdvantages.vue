<template>
  <div class="container-padding advantages">

    <div class="top-block">
      <div class="left-part">
        <h2 class="heading-1">ADVANTAGES</h2>
        <h2 class="heading-2 color-secondary pl-225">WHY WE ARE</h2>
      </div>
      <div class="right-part">
        <h3 class="w-840 color-primary">Unlock the Power of Technology with PacificTech Solutions!
          When you partner with us, you're not just hiring a tech service provider; you're gaining a dedicated ally on your journey to success. Join the ranks of satisfied clients who have witnessed the transformative power of our services.</h3>
      </div>
    </div>

    <div class="bottom-wrap">
      <hr>
      <div class="bottom-block">

        <div class="block">
          <img src="@/assets/img/icons/adv-1.svg" alt="adv-1"/>
          <div class="text-part">
            <h3 class="color-primary">Expertise</h3>
            <p class="color-primary">Unleash the true potential of your online presence with our bespoke web development services. Our talented team crafts visually captivating, user-friendly, and fully optimized websites that not only reflect your brand identity but also drive tangible results.</p>
          </div>
        </div>
        <div class="block">
          <img src="@/assets/img/icons/adv-2.svg" alt="adv-2"/>
          <div class="text-part">
            <h3 class="color-primary">Client-Centric Approach</h3>
            <p class="color-primary">At PacificTech Solutions, you are our priority. We take the time to understand your unique needs and tailor our services to meet your specific goals, ensuring a personalized experience at every step.</p>
          </div>
        </div>
        <hr>
        <div class="block">
          <img src="@/assets/img/icons/adv-3.svg" alt="adv-3"/>
          <div class="text-part">
            <h3 class="color-primary">Innovation and Creativity</h3>
            <p class="color-primary">We thrive on pushing boundaries and exploring innovative solutions. Our creativity knows no bounds, allowing us to deliver unique and groundbreaking tech solutions for your business.</p>
          </div>
        </div>
        <div class="block">
          <img src="@/assets/img/icons/adv-4.svg" alt="adv-4"/>
          <div class="text-part">
            <h3 class="color-primary">Results-Driven</h3>
            <p class="color-primary">Your success is our success. We are committed to delivering measurable results, optimizing your online presence, and enhancing your business's overall efficiency.</p>
          </div>
        </div>

      </div>
      <hr>
    </div>

  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurAdvantages",
  setup() {

    return {

    };
  },
});
</script>

<style scoped>
.block h2 {
  padding-top: 20px;
}

.block :is(h2, p) {
  display: grid;
  align-self: start;
  width: 315px;
}

.text-part {
  margin-right: 20px;
  height: 247px;
  display: grid;
  grid-template-rows: 80px 1fr;
  align-items: center;
  overflow: scroll;
}

div.bottom-wrap > div > div:nth-child(5) > .text-part {
  margin-right: 0;
}

.bottom-wrap {
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

.bottom-wrap hr {
  border: none;
  border-right: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  width: 1px;
  height: calc(100% - 40px);
  margin: 20px 0;
}

.bottom-block {
  padding: 20px 0;
  border-top: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  border-bottom: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.block {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 10px;
  border-right: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
}

.block img {
  width: 60px;
  height: 60px;
}

.block:nth-child(5) {
  border: none;
}

.w-840 {
  max-width: 840px;
  width: 100%;
}

.top-block {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  padding: 0 20px 100px;
}

.bottom-block hr {
  display: none;
  border: none;
  border-top: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  height: 1px;
  width: 100%;
  margin: 0;
}

.advantages {
  margin-bottom: 200px;
}

@media screen and (max-width: 1450px) {

  .bottom-block {
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    justify-items: center;
  }

  .bottom-block hr {
    display: unset;
  }

  .bottom-block .block:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .bottom-block .block:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .bottom-block hr {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .bottom-block .block:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .bottom-block .block:nth-child(5) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .block :is(h2, p) {
    width: unset;
  }

  .block:nth-child(2) {
    border-right: none;
  }

  .bottom-wrap {
   grid-template-columns: auto 1fr auto;
  }

}

@media screen and (max-width: 1180px) {

.bottom-wrap {
  padding: 0;
}

.top-block {
  grid-template-columns: auto;
  justify-content: unset;
  padding: 0 0 50px;
  gap: 25px;
}

.advantages {
  margin-bottom: 85px;
}

.w-840 {
  max-width: unset;
}

}

@media screen and (max-width: 920px) {

  .bottom-block {
    grid-template-columns: auto;
    display: grid;
    justify-items: center;
  }

  .bottom-block .block:nth-child(1) {
    grid-column-start: unset;
    grid-column-end: unset;
    grid-row-start: unset;
    grid-row-end: unset;
  }

  .bottom-block .block:nth-child(2) {
    grid-column-start: unset;
    grid-column-end: unset;
    grid-row-start: unset;
    grid-row-end: unset;
  }

  .bottom-block hr {
    display: none;
  }

  .bottom-block .block:nth-child(4) {
    grid-column-start: unset;
    grid-column-end: unset;
    grid-row-start: unset;
    grid-row-end: unset;
  }

  .bottom-block .block:nth-child(5) {
    grid-column-start: unset;
    grid-column-end: unset;
    grid-row-start: unset;
    grid-row-end: unset;
  }

  .block {
    border-bottom: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  }

  .block:is(:nth-child(1), :nth-child(4)) {
    border-right: none;
  }

  .block:last-child {
    border-bottom: none;
  }

  .text-part {
    margin-right: 0;
  }

}

@media screen and (max-width: 500px) {

  .block:nth-child(1) .text-part {
    height: 307px;
  }

}

@media screen and (max-width: 390px) {

  .block:is(:nth-child(2), :nth-child(4)) .text-part {
    height: 307px;
  }

}

</style>