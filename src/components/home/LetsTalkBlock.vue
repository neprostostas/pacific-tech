<template>
  <div class="container lets_talk">

    <router-link class="lets_talk-link" to="/lets-talk">
      <div class="top-block">
        <div class="left-part">
          <h2 class="big-heading color-primary">LET’S TALK</h2>
        </div>
        <div class="right-part">
          <img class="arrow-link" src="@/assets/img/icons/arrow.svg" alt="arrow">
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