<template>
  <div class="container-padding services">

    <div class="top-block">
      <div class="left-part">
        <h2 class="heading-1">OUR SERVICES</h2>
        <h2 class="heading-2 color-secondary pl-225">WHAT DO WE OFFER</h2>
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
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes.",
        sub_faq: [
          {
            sub_title: "Brifing",
            sub_description: "You fill out the brief.\n" +
                "\n" +
                "We call, make adjustments and clarifications.\n" +
                "\n" +
                "After the call, we fill out the brief and send it to you by mail to make an agreement.",
            time: 2
          },
          {
            sub_title: "UX/Analitics",
            sub_description: "We call, make adjustments and clarifications.",
            time: 5
          },
          {
            sub_title: "Design Concept",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Design all Pages",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Adapting to mobile devices",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Developing",
            sub_description: "We call, make adjustments and clarifications.",
            time: 15
          },
        ],
      },
      {
        title: "E-commerce",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes.",
        sub_faq: [
          {
            sub_title: "Brifing",
            sub_description: "You fill out the brief.\n" +
                "\n" +
                "We call, make adjustments and clarifications.\n" +
                "\n" +
                "After the call, we fill out the brief and send it to you by mail to make an agreement.",
            time: 2
          },
          {
            sub_title: "UX/Analitics",
            sub_description: "We call, make adjustments and clarifications.",
            time: 5
          },
          {
            sub_title: "Design Concept",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Design all Pages",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
        ],
      },
      {
        title: "Apps",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes.",
        sub_faq: [
          {
            sub_title: "UX/Analitics",
            sub_description: "We call, make adjustments and clarifications.",
            time: 5
          },
          {
            sub_title: "Design Concept",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Developing",
            sub_description: "We call, make adjustments and clarifications.",
            time: 15
          },
        ],
      },
      {
        title: "Identica",
        description: "After receiving the payment, we proceed to design all the pages. Upon completion, we agree on a video call and present the design. After the call, we fix the result by a letter to the mail, ask to agree on the stage or make changes.",
        sub_faq: [
          {
            sub_title: "Brifing",
            sub_description: "You fill out the brief.\n" +
                "\n" +
                "We call, make adjustments and clarifications.\n" +
                "\n" +
                "After the call, we fill out the brief and send it to you by mail to make an agreement.",
            time: 2
          },
          {
            sub_title: "Design Concept",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Design all Pages",
            sub_description: "We call, make adjustments and clarifications.",
            time: 10
          },
          {
            sub_title: "Developing",
            sub_description: "We call, make adjustments and clarifications.",
            time: 15
          },
        ],
      },
    ]

    // Calculate the total time for each object in the FAQ_data array
    FAQ_data.forEach(item => {
      let totalTime = 0;
      if (item.sub_faq) {
        totalTime = item.sub_faq.reduce((total, subItem) => total + subItem.time, 0);
      }
      item.totalTime = totalTime;
    });

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
  padding: 0 20px 0;
}

.services {
  margin-bottom: 200px;
}

@media screen and (max-width: 1335px) {

  .pl-225 {
    padding-left: 160px;
  }

}

@media screen and (max-width: 1205px) {

  .pl-225 {
    padding-left: 130px;
  }

}

@media screen and (max-width: 1180px) {

  .services {
    margin-bottom: 85px;
  }

  .top-block {
    padding: 0;
  }

}

@media screen and (max-width: 1105px) {

  .pl-225 {
    padding-left: 90px;
  }

}

@media screen and (max-width: 1025px) {

  .pl-225 {
    padding-left: 35px;
  }

}

@media screen and (max-width: 920px) {

  .pl-225 {
    padding-left: 150px;
  }

  .top-block {
    grid-template-columns: auto;
    align-items: unset;
  }

}

@media screen and (max-width: 495px) {

  .pl-225 {
    padding-left: 90px;
  }

}

@media screen and (max-width: 435px) {

  .pl-225 {
    padding-left: 30px;
  }

}

</style>