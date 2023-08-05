<template>
  <div class="container lets_talk">

    <router-link class="lets_talk-link" to="/lets-talk">
      <div class="top-block">
        <div class="left-part">
          <h2 class="big-heading color-primary">LET’S TALK</h2>
        </div>
        <div class="right-part">
          <svg class="arrow-link" width="205" height="74" viewBox="0 0 205 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 32H0L0 42H5L5 32ZM203.536 40.5355C205.488 38.5829 205.488 35.4171 203.536 33.4645L171.716 1.64466C169.763 -0.307961 166.597 -0.307961 164.645 1.64466C162.692 3.59728 162.692 6.76311 164.645 8.71573L192.929 37L164.645 65.2843C162.692 67.2369 162.692 70.4027 164.645 72.3553C166.597 74.308 169.763 74.308 171.716 72.3553L203.536 40.5355ZM5 42L200 42V32L5 32L5 42Z" fill="#232323"/>
          </svg>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LetsTalkBlock",
  setup() {


    return {

    };
  },
});
</script>

<style scoped>

a:hover {
  text-decoration: none;
}

a:hover :is(h2, svg path) {
  color: var(--color-secondary, #576C80)!important;
  fill: var(--color-secondary, #576C80);
}

.lets_talk {
  margin-bottom: 85px;
}

.top-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.right-part {
  display: grid;
  justify-content: end;
}

.arrow-link {
  max-width: 195px;
  min-width: 55px;
  width: 10.156vw;
}

@media screen and (max-width: 1180px) {

  .lets_talk {
    margin-bottom: 45px;
  }

}

@media screen and (max-width: 580px) {

  .top-block {
    grid-template-columns: repeat(2, auto);
  }

}

</style>