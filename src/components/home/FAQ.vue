<template>
  <div class="faq-wrapper">
    <div class="accordion-item" v-for="(faqItem, index) in faq" :key="index">
      <div class="accordion-title" @click="toggleAccordion(index)">
        <h2 class="heading-2 color-primary">{{ faqItem.title }}</h2>
        <svg class="accordion-toggle_button" :class="{ 'rotate': isOpen === index }" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
          <rect x="8.16016" width="0.68" height="25" fill="#232323" />
          <rect x="17" y="8.16016" width="0.68" height="25" transform="rotate(90 17 8.16016)" fill="#232323"/>
        </svg>
      </div>

      <div class="accordion-value" :class="{ active: isOpen === index }">
        <p class="color-primary">{{ faqItem.description }}</p>
      </div>

      <template v-if="faqItem.sub_faq && isOpen === index">
        <div
            class="sub-accordion_item"
            v-for="(sub_faq, subIndex) in faqItem.sub_faq"
            :key="generateSubAccordionID(index, subIndex)"
        >
          <div class="sub-accordion_title" @click="toggleSubAccordion(index, subIndex)">
            <p class="medium color-primary">{{ sub_faq.sub_title }}</p>

            <div class="right-part">
              <div class="top-line">
                <p class="color-opacity">{{ sub_faq.time }} days</p>
                <svg class="sub-accordion-toggle_button" :class="{ 'rotate': isSubOpen(index, subIndex) }" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <rect x="8.16016" width="0.68" height="17" fill="#232323"/>
                  <rect x="17" y="8.16016" width="0.68" height="17" transform="rotate(90 17 8.16016)" fill="#232323"/>
                </svg>
              </div>

              <div
                  class="sub-accordion-value"
                  :class="{ active: isSubOpen(index, subIndex) }"
              >
                <p class="color-opacity pre-wrap">
                  {{ sub_faq.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="sub-accordion_summary">
            <p class="medium color-primary"></p>
            <div class="top-line">
              <p class="medium color-primary">{{ getTotalTimeForSubAccordion(faqItem.sub_faq) }} days</p>
            </div>
        </div>

      </template>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "FAQ",
  props: {
    faq: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // Create a ref to track the index of the currently open FAQ item
    const isOpen = ref(-1);

    // Function to toggle the accordion item based on its index
    const toggleAccordion = (index) => {
      if (isOpen.value === index) {
        // If the clicked item is already open, close it
        isOpen.value = -1;
      } else {
        // Otherwise, open the clicked item and close the previously opened item (if any)
        isOpen.value = index;
        openSubAccordions.value = [];
      }
    };

    // Create a ref to track the indices of the currently open sub-accordion items
    const openSubAccordions = ref([]);

    // Function to generate a unique identifier for each sub-accordion
    const generateSubAccordionID = (accordionIndex, subAccordionIndex) => {
      return `sub_accordion_${accordionIndex}_${subAccordionIndex}`;
    };

    // Function to check if a specific sub-accordion is open
    const isSubOpen = (accordionIndex, subAccordionIndex) => {
      const subAccordionID = generateSubAccordionID(accordionIndex, subAccordionIndex);
      return openSubAccordions.value.includes(subAccordionID);
    };

    // Function to toggle the sub-accordion item based on its index
    const toggleSubAccordion = (accordionIndex, subAccordionIndex) => {
      const subAccordionID = generateSubAccordionID(accordionIndex, subAccordionIndex);
      const indexOfSubAccordion = openSubAccordions.value.indexOf(subAccordionID);
      if (indexOfSubAccordion !== -1) {
        // If the clicked sub-accordion is already open, close it
        openSubAccordions.value.splice(indexOfSubAccordion, 1);
      } else {
        // Otherwise, open the clicked sub-accordion
        openSubAccordions.value.push(subAccordionID);
      }
    };

    // Calculate the total time for a given sub_faq array
    const getTotalTimeForSubAccordion = (sub_faq) => {
      return sub_faq.reduce((total, subItem) => total + subItem.time, 0);
    };

    return {
      isOpen,
      toggleAccordion,
      openSubAccordions,
      toggleSubAccordion,
      generateSubAccordionID,
      isSubOpen,
      getTotalTimeForSubAccordion,
    };
  },
});
</script>

<style scoped>

.sub-accordion_title, .sub-accordion_summary {
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 5px;
}

.top-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.color-opacity {
  color: var(--color-primary, #232323);
  opacity: 0.7;
}

.accordion-item, .sub-accordion_item {
  border-top: 1px solid var(--color-separator, rgba(35, 35, 35, 0.60));
  transition: all 0.3s ease-out;
}

.accordion-item {
  padding: 50px 0;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.accordion-value.active + .sub-accordion_item {
  margin-top: 20px;
}

.sub-accordion_item {
  padding: 20px 0;
}

.sub-accordion_summary {
  padding-top: 20px;
  border-top: 1px solid var(--color-separator, rgba(35, 35, 35, 0.60));
}

.accordion-item:last-of-type {
  border-bottom: 1px solid var(--color-separator, rgba(35, 35, 35, 0.60));
}

.accordion-title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-toggle_button {
  transition: transform 0.3s;
}

.accordion-toggle_button.rotate {
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.accordion-value {
  padding-top: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.accordion-value.active {
  padding-top: 60px;
  height: unset;
  width: unset;
  overflow: auto;
  opacity: 1;
}

.sub-accordion-toggle_button {
  transition: transform 0.3s;
}

.sub-accordion-toggle_button.rotate {
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.sub-accordion-value {
  padding-top: 0;
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.sub-accordion-value.active {
  padding-top: 40px;
  height: unset;
  width: unset;
  overflow: auto;
  opacity: 1;
}

</style>