<template>
  <div class="faq-wrapper">
    <div class="accordion-item" v-for="(faqItem, index) in faq" :key="index">
      <div class="accordion-title" @click="toggleAccordion(index)">
        <h2 class="heading-2 color-primary">{{faqItem.title}}</h2>
        <svg class="accordion-toggle_button" :class="{ 'rotate': isOpen === index }" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
          <rect x="8.16016" width="0.68" height="25" fill="#232323"/>
          <rect x="17" y="8.16016" width="0.68" height="25" transform="rotate(90 17 8.16016)" fill="#232323"/>
        </svg>
      </div>
      <div class="accordion-value" :class="{ active: isOpen === index }">
        <p class="color-primary">{{faqItem.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

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
      }
    };

    return {
      isOpen,
      toggleAccordion,
    };
  },
});
</script>

<style scoped>

.accordion-item {
  padding: 50px 0;
  border-top: 1px solid var(--color-separator, rgba(35, 35, 35, 0.60));
  transition: all 0.3s ease-out;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

</style>
