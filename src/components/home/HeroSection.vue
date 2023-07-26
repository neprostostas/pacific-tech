<template>

  <div class="video-block">

    <video class="video" playsinline autoplay loop muted src="@/assets/video/hero-video.webm" type="video/webm"></video>
    <div class="video-content">
      <h3>Websites. E-commerce. Apps. Identica. Design Support.</h3>
      <button class="margin-auto">HIRE US</button>
      <hr>
    </div>

  </div>

</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'HeroSection',
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

.video-block {
  margin-top: 80px;

  position: relative;
  z-index: 2;
}

.video {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.video-content {
  max-width: 455px;
  width: 100%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.video-content h3 {
  color: var(--color-white, #E8E8E8);
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 55px;
}

.video-content hr {
  margin: 0 auto;
  margin-top: 60px;
  width: 1px;
  height: 120px;
  background: var(--color-white, #E8E8E8);
}

.margin-auto {
  display: block;
  margin: 0 auto;
}

</style>