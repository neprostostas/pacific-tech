<template>

    <header>
      <div class="header-outer">
        <div class="header-inner container">

          <nav class="navbar-desktop">
            <ul>
              <li>
                <router-link to="/speciality">SPECIALTY</router-link>
              </li>
              <li>
                <router-link to="/advantages">ADVANTAGES</router-link>
              </li>
              <li>
                <router-link to="/">
                  <img class="logo-desktop" src="@/assets/img/logo.png" alt="logo">
                </router-link>
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

    </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CustomHeader',
  components: {},
  setup() {

    return {
    }
  }

});
</script>

<style scoped>

.header-outer {
  background: url("../../assets/img/bg.png"), lightgray 0% 0% / 100px 100px repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  border-bottom: 1px solid var(--color-primary, #232323);
}

.header-inner {
  padding: 22px 20px;
  position: relative;
}

.navbar-desktop ul {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 10px;
}

.navbar-desktop ul li a {
  color: var(--color-primary, #232323);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.logo-desktop {
  width: 100%;
  max-width: 155px;
  height: 60px;
  margin: 0 70px;
}

</style>