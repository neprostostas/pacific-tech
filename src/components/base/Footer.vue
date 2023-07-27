<template>

    <footer>
      <div class="footer-outer">
        <div class="footer-inner container">

          <nav class="navbar-desktop-footer">
            <router-link to="/">
              <img class="logo-desktop-footer" src="@/assets/img/logo-footer.svg" alt="logo-footer">
            </router-link>
            <ul class="nav-part">
              <li>
                <router-link to="/speciality">SPECIALTY</router-link>
              </li>
              <li>
                <router-link to="/advantages">ADVANTAGES</router-link>
              </li>
              <li>
                <router-link to="/services">SERVICES</router-link>
              </li>
              <li>
                <router-link to="/projects">PROJECTS</router-link>
              </li>
            </ul>
          </nav>

        </div>
      </div>

    </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CustomFooter',
  components: {},
  setup() {

    return {
    }
  }

});
</script>

<style scoped>

.footer-outer {
  background: var(--color-primary, #232323);
}

.footer-inner {
  padding: 75px 90px;
  max-width: 1500px;
}

.navbar-desktop-footer {
  width: 100%;
  max-width: 1235px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 20px;
}

.nav-part {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: start;
  justify-content: start;
  gap: 100px;
}

.nav-part li a {
  color: var(--color-white, #E8E8E8);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.logo-desktop-footer {
  width: 100%;
  max-width: 120px;
  height: 61px;
}

@media screen and (max-width: 1200px) {

  .navbar-desktop-footer {
    justify-content: stretch;
  }

  .nav-part {
    justify-items: unset;
    justify-content: unset;
    grid-template-columns: repeat(2, auto);
    gap: 15px 20px;
  }

}

@media screen and (max-width: 920px) {

  .navbar-desktop-footer {
    justify-content: space-between;
  }

  .footer-inner {
    padding: 40px 32px;
  }

  .nav-part li a {
    font-size: 14px;
  }

  .logo-desktop-footer {
    max-width: 90px;
    height: 45px;
  }

}

</style>