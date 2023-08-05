<template>

  <form class="lets_talk-form">

    <div class="line contacts-part">

      <h2 class="heading-1 color-primary">YOUR CONTACTS</h2>

      <div class="right-part contacts">
        <div class="field name-field">
          <label for="name"></label>
          <input placeholder="Name*" type="text" id="name" v-model="name" minlength="2" required/>
        </div>

        <div class="field company-field">
          <label for="company"></label>
          <input placeholder="Company" type="text" id="company" v-model="company" minlength="2"/>
        </div>

        <div class="field phone-field">
          <label for="phone"></label>
          <input placeholder="Phone number" type="tel" id="phone" v-model="phone" minlength="10" maxlength="20" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        </div>

        <div class="field email-field">
          <label for="email"></label>
          <input placeholder="E-mail*" type="email" id="email" v-model="email" size="50" required/>
        </div>
      </div>

    </div>
    <div class="hr-gradient"></div>

    <div class="line services-part">

      <h2 class="heading-1 color-primary">SERVICES</h2>

      <div class="right-part services">
        <button v-for="(tap, index) in taps" :key="index" :class="['tap', `tap${index+1}`, { 'clicked': tap.clicked }]" @click.prevent="tap.clicked = !tap.clicked">{{tap.text}}</button>
      </div>

    </div>
    <div class="hr-gradient"></div>

    <div class="line budget-part">

      <h2 class="heading-1 color-primary">BUDGET</h2>

      <div class="right-part budget">
        <div v-for="(choice, index) in budgetChoices" :key="index" :class="`field budgetChoice budgetChoice${index + 1}-field`" @click.prevent="selectBudget(index)">
          <input
              type="radio"
              :id="`budgetChoice budgetChoice${index + 1}`"
              v-model="selectedBudget"
              :value="index"
              :name="'budgetChoice'"
              @click.stop
          >
          <label class="budgetChoiceLabel" :for="`budgetChoice${index + 1}`">{{ choice.label }}</label>
        </div>
      </div>

    </div>
    <div class="hr-gradient"></div>

    <div class="line task-part">

      <h2 class="heading-1 color-primary max-w420">TELL US ABOUT YOUR TASK</h2>
      <div class="right-part task">

        <div class="task task-field">
          <label for="task"></label>
          <input placeholder="Task" type="text" id="task" v-model="task"/>
        </div>

        <div class="file-wrap">
          <div class="file-upload">
            <div class="overlay-reset" @click="removeFileFromInput" :class="{ active: fileName !== '' }"></div>
            <label>
              <input type="file" name="file" @change="updateFileName">
              <span>
              <svg class="input-image" :class="{ active: fileName !== '' }" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <rect x="12" width="1" height="25" fill="#232323"/>
                <rect x="25" y="12" width="1" height="25" transform="rotate(90 25 12)" fill="#232323"/>
              </svg>
              Attach file
            </span>
            </label>
          </div>
          <!-- Output file name -->
          <input type="text" id="filename" class="filename" :class="{ active: fileName !== '' }" :value="fileName" disabled>
        </div>

        <a href="#" class="brief-link">Example of a brief</a>

        <label class="checkbox-control">
          <input type="checkbox" class="checkbox-agree" name="checkbox" @change="checkboxAgree = !checkboxAgree" />
          <span>By clicking the “Hire us” button, you agree to the Privacy Policy.</span>
        </label>

        <button class="hire-us" type="submit" @click.prevent="submitForm">
          HIRE US
        </button>

      </div>

    </div>

  </form>

</template>

<script>
import { defineComponent, ref, computed } from "vue"
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Form',
  setup() {

    const router = useRouter();

    const taps = ref([
      {text: "Corporate website", clicked: false},
      {text: "Apps", clicked: false},
      {text: "Landing page", clicked: false},
      {text: "Online store", clicked: false},
      {text: "Identica", clicked: false},
      {text: "System / Service", clicked: false},
      {text: "Design support", clicked: false}
    ])

    const budgetChoices = ref([
      {label: '< $ 6 900'},
      {label: 'about $ 14 000'},
      {label: '$ 14 - 42 000'},
      {label: '$ 55 - 65 000'},
      {label: '> $ 65 000'},
      {label: 'Do not know'},
    ])

    const selectedBudget = ref(null);

    // Refs for form inputs
    const name = ref('');
    const company = ref('');
    const phone = ref('');
    const email = ref('');
    const task = ref('');
    const checkboxAgree = ref(false);

    const fileName = ref('');
    const selectedFile = ref(null);

    function updateFileName(event) {
      const fileInput = event.target;
      console.log(fileInput.files);
      if (fileInput.files.length > 0) {
        selectedFile.value = fileInput.files[0];
        fileName.value = fileInput.files[0].name;
      } else {
        selectedFile.value = null;
        fileName.value = '';
      }
      fileInput.value = null;
    }

    function removeFileFromInput() {
      fileName.value = '';
      selectedFile.value = null;
    }

    // Form Validation
    const isFormValid = computed(() => {
      const isNameValid = name.value.trim().length >= 2;
      const isEmailValid = isValidEmail(email.value);
      const isClickedTapValid = taps.value.some(tap => tap.clicked);
      const isSelectedBudgetValid = selectedBudget.value !== null;
      const isCheckboxAgree = checkboxAgree.value === true;

      return isNameValid && isEmailValid && isClickedTapValid && isSelectedBudgetValid && isCheckboxAgree;
    });

    function isValidEmail(value) {
      const emailRegex = /^(?=.{1,256}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/;
      return emailRegex.test(value);
    }

    function selectBudget(index) {
      selectedBudget.value = index;
    }

    function submitForm() {

      if (isFormValid.value) {
        // Create an object from collected data
        const formData = {
          name: name.value,
          company: company.value,
          phone: phone.value,
          email: email.value,
          selectedBudget: budgetChoices.value[selectedBudget.value]?.label,
          clickedTaps: taps.value.filter((tap) => tap.clicked).map((tap) => tap.text),
          task: task.value,
          selectedFile: selectedFile.value,
        };

        console.log(formData);
        router.push({ name: "LetsTalkThankYou" })

      } else {
        console.log("Validation error");
      }

    }

    return {
      name,
      company,
      phone,
      email,
      task,
      taps,
      budgetChoices,
      selectedBudget,
      fileName,
      selectedFile,
      checkboxAgree,
      removeFileFromInput,
      updateFileName,
      selectBudget,
      submitForm
    }
  }
});
</script>

<style scoped>

.max-w420 {
  width: 100%;
  max-width: 420px;
}

.line.task-part {
  padding-bottom: 0;
}

.checkbox-control {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 20px;
  justify-content: start;
  margin: 60px 0 100px;
}

.brief-link {
  text-decoration: underline;
  text-underline-offset: 6px;
  color: var(--color-secondary, #576C80);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.brief-link:hover {
  text-decoration: underline;
  color: var(--color-primary, #232323);
}

.overlay-reset {
  display: none;
}

.overlay-reset.active {
  display: block;
  background: transparent;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

.input-image {
  transition: .4s all ease-in-out;
}

.input-image.active {
  transition: .4s all ease-in-out;
  rotate: 45deg;
}

.file-upload input[type="file"] {
  display: none;
}

.file-upload {
  margin: 40px 0 10px;
  position: relative;
  overflow: hidden;
  width: 142px;
  height: 30px;
}

#filename {
  border: unset;
  background: unset;
  padding: 0;
  width: 100%;
  color: var(--color-primary, #232323);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0;
}

#filename.active {
  opacity: 1;
  transition: all 1s ease-in-out;
}

.file-upload label {
  cursor: pointer;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.file-upload span {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px;
  align-items: center;
  justify-content: start;
  color: var(--color-primary, #232323);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.field {
  margin-bottom: 40px;
}

.email-field {
  margin-bottom: 0;
}

.line {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  padding: 200px 0;
}

.right-part.services {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 10px;
}

.right-part.budget {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: start;
  gap: 50px 0;
}

.budgetChoice {
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  align-items: center;
  margin-bottom: 0;
}

.budgetChoiceLabel {
  cursor: pointer;
  color: var(--color-primary, #232323);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.tap {
  padding: 20px 50px;
  background: var(--color-white, #E8E8E8);
  color: var(--color-primary, #232323);
  border: 1px solid var(--color-primary, #232323);
  font-weight: 400;
  text-transform: none;
}

.tap:hover {
  border: 1px solid var(--color-primary, #232323);
  color: var(--color-primary, #232323);
  background: var(--color-white, #E8E8E8);
}

.tap.clicked {
  background: var(--gradient-blue, radial-gradient(135.78% 135.78% at -5.98% 11.82%, #000 0%, #142743 62.53%, #38618A 100%));
  border: 1px solid transparent;
  color: var(--color-white, #E8E8E8);
}

.hire-us {
  width: 100%;
  border: none;
  padding: 30px;
  background: var(--color-primary, #232323);
  color: var(--color-white, #E8E8E8);
}

.hire-us:hover {
  background: var(--gradient-blue, radial-gradient(135.78% 135.78% at -5.98% 11.82%, #000 0%, #142743 62.53%, #38618A 100%));
}

@media screen and (max-width: 1630px) {

  .max-w420 {
    max-width: 320px;
  }

}

@media screen and (max-width: 990px) {

  .budgetChoiceLabel {
    font-size: 22px;
  }

}

@media screen and (max-width: 930px) {

  .budgetChoiceLabel {
    font-size: 21px;
  }

}

@media screen and (max-width: 920px) {

  .hire-us {
    padding: 10px 15px;
  }

  .checkbox-control {
    margin: 40px 0 60px;
  }

  .right-part.budget {
    grid-template-columns: auto;
    gap: 20px;
  }

  .budgetChoiceLabel {
    font-size: 24px;
  }

  .line {
    padding: 85px 0;
    display: grid;
    grid-template-columns: auto;
    gap: 50px;
    align-items: unset;
  }

  .tap {
    padding: 15px 20px;
    width: unset;
    background: var(--color-white, #E8E8E8);
    color: var(--color-primary, #232323);
    border: 1px solid var(--color-primary, #232323);
  }

  .right-part.services {
    gap: 10px 5px;
  }

}

@media screen and (max-width: 375px) {

  .tap {
    padding: 15px 14px;
  }

}

</style>