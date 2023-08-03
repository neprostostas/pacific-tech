<template>

  <nav class="navbar-desktop-footer">
    <router-link to="/">
      <img class="logo-desktop-footer" src="@/assets/img/logo-footer.svg" alt="logo-footer">
    </router-link>
    <ul class="nav-part">
      <li>
        <router-link to="/speciality">
          <p class="button color-white">SPECIALTY</p>
        </router-link>
      </li>
      <li>
        <router-link to="/advantages">
          <p class="button color-white">ADVANTAGES</p>
        </router-link>
      </li>
      <li>
        <router-link to="/services">
          <p class="button color-white">SERVICES</p>
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
          <p class="button color-white">PROJECTS</p>
        </router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NavBarFooter',
  components: {},
  setup() {

    return {
    }
  }

});
</script>

<style scoped>

.navbar-desktop-footer {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 20px;
}

.nav-part {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: min(5.2vw, 100px);
}

.logo-desktop-footer {
  width: 100%;
  max-width: 120px;
  max-height: 61px;
  height: 100%;
}

@media screen and (max-width: 1180px) {
  .navbar-desktop-footer {
    grid-template-columns: 1fr 3fr;
  }
}

@media screen and (max-width: 1000px) {
  .nav-part {
    gap: 10px;
  }
}

@media screen and (max-width: 920px) {

  p.button {
    font-size: 14px;
  }

  .navbar-desktop-footer {
    grid-template-columns: repeat(2, 1fr);
  }

  .nav-part {
    grid-template-columns: repeat(2, 1fr);
    gap: 17px 20px;
  }

  .logo-desktop-footer {
    max-width: 90px;
    max-height: 45px;
  }

}

</style>