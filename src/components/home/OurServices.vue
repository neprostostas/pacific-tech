<template>
  <div class="container-padding services">

    <div class="top-block">
      <div class="left-part">
        <h2 class="heading-1">OUR SERVICES</h2>
        <h2 class="heading-2 color-secondary">WHAT DO WE OFFER</h2>
      </div>
      <div class="right-part">
        <FAQComponent :faq="FAQ_data"/>
      </div>
    </div>


  </div>
</template>

<script>
import { defineComponent } from "vue";
import FAQComponent from "@/components/home/FAQ";

export default defineComponent({
  name: "OurServices",
  components: {
    FAQComponent
  },
  setup() {

    const FAQ_data = [
      {
        title: "Websites",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes."
      },
      {
        title: "E-commerce",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes."
      },
      {
        title: "Apps",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes."
      },
      {
        title: "Identica",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes."
      },
    ]

    return {
      FAQ_data
    };
  },
});
</script>

<style scoped>

.top-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 30px;
}

.services {
  margin-bottom: 200px;
}

@media screen and (max-width: 1180px) {

  .services {
    margin-bottom: 85px;
  }

}

@media screen and (max-width: 920px) {

}

</style>