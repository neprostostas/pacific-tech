<template>
    <div class="gallery desktop">
      <template v-for="(proj, index) in projects" :key="index">
        <a :href="proj.href" class="project-link">
          <img :class="'preview ' + proj.alt" :src="require(`@/assets/img/projects/${proj.alt}.png`)" :alt="proj.alt">
          <div class="overlay-shadow"></div>
          <div class="text-block">
            <h3 class="color-white">{{proj.title}}</h3>
            <p class="text3 color-grey">{{proj.desc}}</p>
          </div>
        </a>
      </template>
    </div>

    <div class="gallery mobile" ref="galleryMobileRef">
      <template v-for="(proj, index) in displayedProjects" :key="index">
        <a :href="proj.href" class="project-link">
          <img :class="'preview ' + proj.alt" :src="require(`@/assets/img/projects/${proj.alt}.png`)" :alt="proj.alt">
          <div class="overlay-shadow"></div>
          <div class="text-block">
            <h3 class="color-white">{{proj.title}}</h3>
            <p class="text3 color-grey">{{proj.desc}}</p>
          </div>
        </a>
      </template>
      <template v-for="(proj, index) in displayedProjects" :key="index">
        <a :href="proj.href" class="project-link">
          <img :class="'preview ' + proj.alt" :src="require(`@/assets/img/projects/${proj.alt}.png`)" :alt="proj.alt">
          <div class="overlay-shadow"></div>
          <div class="text-block">
            <h3 class="color-white">{{proj.title}}</h3>
            <p class="text3 color-grey">{{proj.desc}}</p>
          </div>
        </a>
      </template>
      <button class="view-more" v-if="!showAll" @click="showAllProjects">VIEW MORE</button>
    </div>

</template>

<script>
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
  name: "Gallery",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  setup(props) {

    const showAll = ref(false);
    const galleryMobileRef = ref(null);

    const displayedProjects = computed(() => {
      if (showAll.value) {
        return props.projects;
      } else {
        return props.projects.slice(0, 6);
      }
    });

    const showAllProjects = () => {
      showAll.value = true;
      scrollToBottom();
    };

    const scrollToBottom = () => {
      if (galleryMobileRef.value) {
        setTimeout(() => {
          const galleryMobileElement = galleryMobileRef.value;
          const { bottom } = galleryMobileElement.getBoundingClientRect();
          const scrollPosition = window.scrollY + bottom + 105;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }, 100);
      }
    };

    return {
      showAll,
      displayedProjects,
      showAllProjects,
      galleryMobileRef
    };
  },
});
</script>

<style scoped>

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

.gallery.mobile {
  display: none;
}

.project-link {
  cursor: pointer;
  position: relative;
}

.project-link .text-block h3,
.project-link .text-block p {
  transition: .3s all ease-in-out;
}

.project-link:hover .text-block h3 {
  font-size: 60px;
  transition: .3s all ease-in-out;
}

.project-link:hover .text-block p {
  font-size: 30px;
  transition: .3s all ease-in-out;
}

.project-link:hover .overlay-shadow {
  transition: .3s all ease-in-out;
  opacity: 0.6;
}

.overlay-shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.4;
  background: var(--color-primary, #232323);
  transition: .3s all ease-in-out;
}

.preview {
  width: 100%;
  height: 100%;
  max-width: 830px;
  max-height: 700px;
  object-fit: contain;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
}

.text-block {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

@media screen and (max-width: 920px) {

  .gallery.mobile {
    display: grid;
    grid-template-columns: auto;
  }

  .gallery.desktop {
    display: none;
  }

}

@media screen and (max-width: 600px) {
  .project-link:hover .text-block h3 {
    font-size: 35px;
  }

  .project-link:hover .text-block p {
    font-size: 25px;
  }
}

</style>