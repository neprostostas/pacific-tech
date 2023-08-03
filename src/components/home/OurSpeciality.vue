<template>
  <div class="container speciality">

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
        <div class="block" @mouseover="onHover(1)" :style="{'grid-template-columns': block1, 'padding': padding1 }">
          <img :class="{ active: hoveredBlock === 1 }" src="@/assets/img/home/home-slide1.png" alt="home-slide1" />
          <div class="text-part">
            <h2 class="heading-2 color-primary">Web Development</h2>
            <p class="color-primary">Unleash the true potential of your online presence with our bespoke web development services. Our talented team crafts visually captivating, user-friendly, and fully optimized websites that not only reflect your brand identity but also drive tangible results.</p>
          </div>
        </div>

        <div class="block" @mouseover="onHover(2)" :style="{'grid-template-columns': block2, 'padding': padding2 }">
          <img :class="{ active: hoveredBlock === 2 }" src="@/assets/img/home/home-slide2.png" alt="home-slide2" />
          <div class="text-part">
            <h2 class="heading-2 color-primary">Mobile App Creation</h2>
            <p class="color-primary">In the era of mobile-first experiences, we deliver top-of-the-line mobile app solutions that captivate users and elevate your business to new heights. Our mobile app development expertise spans across diverse platforms, ensuring seamless functionality and exceptional user engagement.</p>
          </div>
        </div>

        <div class="block" @mouseover="onHover(3)" :style="{'grid-template-columns': block3, 'padding': padding3 }">
          <img :class="{ active: hoveredBlock === 3 }" src="@/assets/img/home/home-slide3.png" alt="home-slide3" />
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
    const block1 = ref("auto 1fr");
    const block2 = ref("auto");
    const block3 = ref("auto");
    const padding1 = ref("0 40px 0 0");
    const padding2 = ref("0 40px 0");
    const padding3 = ref("0 0 0 40px");

    const changeLayout = (blockNumber) => {
      if (blockNumber === 1) {
        bottomBlockColumns.value = "2fr 1fr 1fr";
        block1.value = "auto 1fr";
        block2.value = "auto";
        block3.value = "auto";
        padding1.value = "0 40px 0 0";
        padding2.value = "0 40px 0";
        padding3.value = "0 0 0 40px";
      }
      else if (blockNumber === 2) {
        bottomBlockColumns.value = "1fr 2fr 1fr";
        block1.value = "auto";
        block2.value = "auto 1fr";
        block3.value = "auto";
        padding1.value = "0 40px 0 20px";
        padding2.value = "0 40px 0";
        padding3.value = "0 40px 0";
      }
      else if (blockNumber === 3) {
        bottomBlockColumns.value = "1fr 1fr 2fr";
        block1.value = "auto";
        block2.value = "auto";
        block3.value = "auto 1fr";
        padding1.value = "0 40px 0 20px";
        padding2.value = "0 40px 0";
        padding3.value = "0 40px 0";
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
      block1,
      block2,
      block3,
      padding1,
      padding2,
      padding3
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
  width: 335px;
}

.bottom-wrap.desktop .text-part {
  height: 347px;
  display: grid;
  grid-template-rows: 125px 1fr;
  align-items: center;
}

div.bottom-wrap > div > div:nth-child(3) > .text-part {
  margin-right: 0;
}

.bottom-wrap.desktop {
  display: grid;
  grid-template-columns: auto 1fr auto;
}

.bottom-wrap hr {
  background-color: var(--color-separator, rgba(35, 35, 35, 0.60));
  width: 1px;
  height: calc(100% - 40px);
  margin: 20px 0;
}

.bottom-wrap hr:first-of-type {
  margin-right: 20px;
}

.bottom-wrap hr:last-of-type {
  margin-left: 20px;
}

.bottom-block {
  padding: 20px 0;
  border-top: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  border-bottom: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;

  transition: .4s all ease-in-out;
}

.block {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 40px;
  border-right: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
  transition: .4s all ease-in-out;
}

.bottom-wrap.desktop .block img {
  max-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  display: none;
  opacity: 0;
}

.bottom-wrap.desktop .block img.active {
  display: unset;
  opacity: 1;
  transition: .4s all ease-in-out;
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
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-content: space-between;
  padding: 0 0 100px;
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
}

.bottom-wrap.mobile .block {
  grid-template-columns: auto;
  gap: 25px;
  padding: 20px 0;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: var(--color-separator, rgba(35, 35, 35, 0.60)) 1px solid;
}

.bottom-wrap.mobile .block:first-of-type {
  padding-top: 0;
}

.bottom-wrap.mobile .block h2 {
  padding-top: 0;
  padding-bottom: 25px;
}

.bottom-wrap.mobile .block p {
  max-width: unset;
}

.bottom-wrap.mobile .text-part {
  margin-right: 0;
  height: unset;
  overflow: auto;
}

.bottom-wrap.mobile .block:nth-child(3) {
  border-bottom: none;
}

.bottom-wrap.mobile .block img {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 1825px) {

  .bottom-wrap.desktop .block :is(h2, p) {
    width: 300px;
  }

  .bottom-wrap.desktop .text-part {
    height: 100%;
  }

  .bottom-wrap.desktop .block:nth-child(3) h2 {
    font-size: 25px;
  }

}

@media screen and (max-width: 1680px) {

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

@media screen and (max-width: 1635px) {

  .bottom-wrap.desktop .block :is(h2, p) {
    width: 250px;
  }

}

@media screen and (max-width: 1600px) {

  .bottom-wrap.desktop .block :is(h2, p) {
    width: 200px;
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