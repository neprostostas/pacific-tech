<template>
  <nav class="navbar-desktop">
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <template v-if="item.type === 'link'">
          <router-link :to="item.link" @click="isMobileMenuOpen = false">
            <p class="button color-primary">{{ item.text }}</p>
          </router-link>
        </template>
        <template v-else-if="item.type === 'logo'">
          <router-link to="/">
            <img class="logo-desktop" src="@/assets/img/logo.svg" alt="logo">
          </router-link>
        </template>
      </li>
    </ul>
  </nav>
  <nav class="navbar-mobile" ref="navBarMobileRef">

    <router-link to="/" class="mobile" @click="isMobileMenuOpen = false">
      <img class="logo-mobile" src="@/assets/img/logo.svg" alt="logo">
    </router-link>

    <svg @click="isMobileMenuOpen = true" v-if="!isMobileMenuOpen" class="nav-trigger closed" xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
      <rect width="16" height="1" fill="#232323"/>
      <rect y="6" width="16" height="1" fill="#232323"/>
      <rect y="12" width="16" height="1" fill="#232323"/>
    </svg>

    <svg @click="isMobileMenuOpen = false" v-if="isMobileMenuOpen" class="nav-trigger opened" style="transform: scale(1.4)" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 29 29" fill="none">
      <rect x="20.9297" y="6.7876" width="0.8" height="20" transform="rotate(45 20.9297 6.7876)" fill="#232323"/>
      <rect x="21.4966" y="20.9297" width="0.8" height="20" transform="rotate(135 21.4966 20.9297)" fill="#232323"/>
    </svg>

    <transition name="slide">
      <ul v-if="isMobileMenuOpen" class="list-mobile">
        <template v-for="(item, index) in navItems" :key="index">
          <template v-if="item.type === 'link'">
            <li>
              <router-link :to="item.link" @click="isMobileMenuOpen = false">
                <p class="button color-primary">{{ item.text }}</p>
              </router-link>
            </li>
          </template>
        </template>
      </ul>
    </transition>

  </nav>
</template>

<script>
import {defineComponent, ref, watch} from "vue";

export default defineComponent({
  name: 'NavBar',
  setup() {

    const navItems = [
      {
        type: "link",
        link: "/speciality",
        text: "SPECIALTY",
      },
      {
        type: "link",
        link: "/advantages",
        text: "ADVANTAGES",
      },
      {
        type: "logo", // This will include the logo for the desktop navbar
      },
      {
        type: "link",
        link: "/services",
        text: "SERVICES",
      },
      {
        type: "link",
        link: "/projects",
        text: "PROJECTS",
      },
    ];

    const navBarMobileRef = ref(null);

    // Define a reactive variable to track the state of the mobile menu
    const isMobileMenuOpen = ref(false);

    // Function to toggle the mobile menu state
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // helper function to run preventDefault
    function preventDefault(e) {
      e.preventDefault();
    }

    // Watch the isMobileMenuOpen variable and add/remove the no-scroll class accordingly
    watch(isMobileMenuOpen, (newValue) => {
      if (newValue) {
        document.documentElement.classList.add('no-scroll');
        navBarMobileRef.value.addEventListener('pointermove', preventDefault);
        navBarMobileRef.value.addEventListener('touchmove', preventDefault);
      } else {
        document.documentElement.classList.remove('no-scroll');
        navBarMobileRef.value.removeEventListener('pointermove', preventDefault);
        navBarMobileRef.value.removeEventListener('touchmove', preventDefault);
      }
    });

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      navBarMobileRef,
      navItems
    }
  }

});
</script>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

:is(.navbar-desktop, .navbar-mobile) a:hover {
  text-decoration: none;
}

:is(.navbar-desktop, .navbar-mobile) a:hover p {
  color: var(--color-separator, #23232399)!important;
}

.nav-trigger {
  cursor: pointer;
}

.navbar-desktop ul {
  max-width: 1088px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1.8fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.logo-desktop {
  width: 100%;
  max-width: 155px;
  height: 60px;
}

.logo-mobile {
  display: none;
  width: 100%;
  max-width: 55px;
  height: 21px;
}

.navbar-mobile {
  display: none;
  grid-template-columns: repeat(2, auto);
  align-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.list-mobile {
  background: var(--gradient-gray, linear-gradient(90deg, #D8D8D8 0%, #ECEDED 56.13%, #EDEDED 100%));

  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 124px);
  display: grid;
  grid-auto-rows: 25px;
  align-items: start;
  justify-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 54px;
  padding: 35px 0 40px;
}

@media screen and (max-width: 1250px) {

  .navbar-desktop ul {
    max-width: 87vw;
  }

  .navbar-desktop ul {
    grid-template-columns: 1fr 1fr 1.3fr 1fr 1fr;
  }

}

@media screen and (max-width: 920px) {

  .logo-mobile {
    display: unset;
  }

  .navbar-mobile {
    display: grid;
  }

  .navbar-desktop {
    display: none;
  }

}

</style>