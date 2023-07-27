<template>

  <HeroSection />

  <div class="page-outer">
    <div class="page-inner container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur dolorem illo minima officia quod tenetur. A amet aut consequatur cupiditate fugiat, fugit illum repudiandae. A ab accusantium, at cupiditate dolore dolorem esse, impedit magnam non nostrum optio porro quas quibusdam quidem recusandae repellat temporibus totam, ut vitae voluptatem. A, aliquid architecto at beatae facilis fugit harum in ipsam libero molestiae nobis officia officiis praesentium provident reiciendis vitae voluptas. Aperiam atque aut consequuntur corporis, cumque delectus dicta dolore, dolorem eaque et exercitationem harum in itaque labore laboriosam molestiae nam nemo neque nostrum praesentium quia quo tempora ullam vitae voluptate. Fuga?
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import HeroSection from "@/components/home/HeroSection.vue";

export default defineComponent({
  name: 'Home',
  components: {
    HeroSection
  },
  setup() {


    return {

    }
  }
});
</script>

<style scoped>

.page-inner {
  padding: 20px 20px;
}

</style>