<template>
  <div class="container-padding speciality">

    <div class="top-block">
      <div class="left-part">
        <h2 class="heading-1">OUR SPECIALTY</h2>
        <h2 class="heading-2 color-secondary pl-225">WHAT DO WE DO</h2>
      </div>
      <div class="right-part">
        <h3 class="w-840 color-primary">Welcome to PacificTech Solutions - Your Gateway to Cutting-Edge Tech Solutions! At PacificTech Solutions, we are a dynamic team of tech enthusiasts, dedicated to transforming your digital aspirations into reality. With a passion for innovation and a focus on excellence, we specialize in three core areas:</h3>
      </div>
    </div>

    <div class="bottom-wrap desktop">
      <hr>
      <div class="bottom-block" :style="{'grid-template-columns': bottomBlockColumns }">
        <div class="block" @mouseover="onHover(1)" :style="{'gap': gap1 }">
          <transition name="fade">
            <img
                v-if="hoveredBlock === 1"
                src="@/assets/img/home/home-slide1.png"
                alt="home-slide1"
            />
          </transition>
          <div class="text-part">
            <h2 class="heading-2 color-primary">Web Development</h2>
            <p class="color-primary">Unleash the true potential of your online presence with our bespoke web development services. Our talented team crafts visually captivating, user-friendly, and fully optimized websites that not only reflect your brand identity but also drive tangible results.</p>
          </div>
        </div>

        <div class="block" @mouseover="onHover(2)" :style="{'gap': gap2 }">
          <transition name="fade">
            <img
                v-if="hoveredBlock === 2"
                src="@/assets/img/home/home-slide2.png"
                alt="home-slide2"
            />
          </transition>
          <div class="text-part">
            <h2 class="heading-2 color-primary">Mobile App Creation</h2>
            <p class="color-primary">In the era of mobile-first experiences, we deliver top-of-the-line mobile app solutions that captivate users and elevate your business to new heights. Our mobile app development expertise spans across diverse platforms, ensuring seamless functionality and exceptional user engagement.</p>
          </div>
        </div>

        <div class="block" @mouseover="onHover(3)" :style="{'gap': gap3 }">
          <transition name="fade">
            <img
                v-if="hoveredBlock === 3"
                src="@/assets/img/home/home-slide3.png"
                alt="home-slide3"
            />
          </transition>
          <div class="text-part">
            <h2 class="heading-2 color-primary">Tech Support & Database Warehouse</h2>
            <p class="color-primary">Keep your systems running like clockwork with our reliable tech support services. We offer timely assistance and maintenance to ensure that your tech infrastructure stays robust and efficient. Additionally, our secure database warehouse solutions provide a seamless data management experience, empowering you to make data-driven decisions with confidence.</p>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <div class="bottom-wrap mobile">
      <hr>
      <div class="bottom-block">
        <div class="block">
          <img src="@/assets/img/home/home-slide1.png" alt="home-slide1"/>
          <div class="text-part">
            <h2 class="heading-2 color-primary">Web Development</h2>
            <p class="color-primary">Unleash the true potential of your online presence with our bespoke web development services. Our talented team crafts visually captivating, user-friendly, and fully optimized websites that not only reflect your brand identity but also drive tangible results.</p>
          </div>
        </div>

        <div class="block">
          <img src="@/assets/img/home/home-slide2.png" alt="home-slide2"/>
          <div class="text-part">
            <h2 class="heading-2 color-primary">Mobile App Creation</h2>
            <p class="color-primary">In the era of mobile-first experiences, we deliver top-of-the-line mobile app solutions that captivate users and elevate your business to new heights. Our mobile app development expertise spans across diverse platforms, ensuring seamless functionality and exceptional user engagement.</p>
          </div>
        </div>

        <div class="block">
          <img src="@/assets/img/home/home-slide3.png" alt="home-slide3" />
          <div class="text-part">
            <h2 class="heading-2 color-primary">Tech Support & Database Warehouse</h2>
            <p class="color-primary">Keep your systems running like clockwork with our reliable tech support services. We offer timely assistance and maintenance to ensure that your tech infrastructure stays robust and efficient. Additionally, our secure database warehouse solutions provide a seamless data management experience, empowering you to make data-driven decisions with confidence.</p>
          </div>
        </div>
      </div>
      <hr>
    </div>

  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "OurSpeciality",
  setup() {
    const hoveredBlock = ref(1);
    const bottomBlockColumns = ref("2fr 1fr 1fr");
    const gap1 = ref("20px");
    const gap2 = ref("0");
    const gap3 = ref("0");

    const changeLayout = (blockNumber) => {
      if (blockNumber === 1) {
        bottomBlockColumns.value = "2fr 1fr 1fr";
        gap1.value = "20px";
        gap2.value = "0";
        gap3.value = "0";
      }
      else if (blockNumber === 2) {
        bottomBlockColumns.value = "1fr 2fr 1fr";
        gap1.value = "0";
        gap2.value = "20px";
        gap3.value = "0";
      }
      else if (blockNumber === 3) {
        bottomBlockColumns.value = "1fr 1fr 2fr";
        gap1.value = "0";
        gap2.value = "0";
        gap3.value = "20px";
      }
    }

    const onHover = (blockNumber) => {
      hoveredBlock.value = blockNumber;
      changeLayout(blockNumber);
    };

    return {
      hoveredBlock,
      bottomBlockColumns,
      onHover,
      gap1,
      gap2,
      gap3
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
}

.bottom-wrap.desktop .block :is(h2, p) {
  width: 315px;
}

.text-part {
  margin-right: 20px;
  height: 347px;
  display: grid;
  grid-template-rows: 125px 1fr;
  align-items: center;
  overflow: scroll;
}

div.bottom-wrap > div > div:nth-child(3) > .text-part {
  margin-right: 0;
}

.bottom-wrap.desktop {
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
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;

  transition: grid-template-columns ease-in-out .5s;
}

.block {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 40px;
  border-right: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
}

.block img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
}

.block:nth-child(3) {
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

.speciality {
  margin-top: 200px;
  margin-bottom: 200px;
}

.bottom-wrap.mobile {
  display: none;
  grid-template-columns: auto 1fr auto;
}

.bottom-wrap.mobile .bottom-block {
  grid-template-columns: auto;
  margin-left: 20px;
  margin-right: 20px;
}

.bottom-wrap.mobile .block {
  grid-template-columns: auto;
  gap: 25px;
  padding: 0 0 20px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
}

.bottom-wrap.mobile .block h2 {
  padding-top: 0;
}

.bottom-wrap.mobile .block p {
  max-width: unset;
}

.bottom-wrap.mobile .text-part {
  margin-right: 0;
  height: unset;
  overflow: auto;
  grid-template-rows: 95px 1fr;
}

.bottom-wrap.mobile .block:nth-child(3) {
  border-bottom: none;
}

.bottom-wrap.mobile .block img {
  height: unset;
}

/* Fade-in animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1675px) {

  .bottom-wrap.desktop .block:nth-child(3) h2 {
      font-size: 25px;
  }

}

@media screen and (max-width: 1620px) {

  .bottom-wrap.desktop .block:is(:nth-child(1), :nth-child(2)) h2 {
    max-width: 170px;
    font-size: 30px;
  }

  .bottom-wrap.desktop .block:nth-child(3) h2 {
    max-width: 235px;
  }

  .bottom-wrap.desktop .block p {
    max-width: 270px;
  }

}

@media screen and (max-width: 1530px) {

  .bottom-wrap.desktop .block:nth-child(3) h2 {
    font-size: 28px;
  }

}

@media screen and (max-width: 1180px) {

  .bottom-wrap.desktop {
    display: none;
  }

  .bottom-wrap.mobile {
    display: grid;
  }

  .top-block {
    grid-template-columns: auto;
    justify-content: unset;
    padding: 0 0 50px;
    gap: 25px;
  }

  .speciality {
    margin-top: 85px;
    margin-bottom: 85px;
  }

  .w-840 {
    max-width: unset;
  }

}

@media screen and (max-width: 425px) {

  .bottom-wrap.mobile > div > div:nth-child(3) > .text-part {
    grid-template-rows: 150px 1fr;
  }

}

</style>