<template>

    <footer>
      <div class="footer-outer">
        <div class="footer-inner container">

          <nav class="navbar-desktop-footer">
            <router-link to="/">
              <img class="logo-desktop-footer" src="@/assets/img/logo-footer.png" alt="logo-footer">
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
  padding: 75px 20px;
}

.navbar-desktop-footer {
  width: 100%;
  max-width: 1235px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
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

</style>