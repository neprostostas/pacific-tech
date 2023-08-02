<template>
  <div class="container-padding projects">
    <div class="projects-wrapper">

      <div class="top-block">
        <h2 class="heading-1">OUR PROJECTS</h2>
        <h2 class="heading-2 color-secondary pl-225">WHAT WE MADE</h2>
      </div>

      <Gallery :projects="projects" />

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Gallery from "@/components/home/Gallery";

export default defineComponent({
  name: "OurProjects",
  components: {
    Gallery
  },
  setup() {

    const projects = [
      {
        alt: "project-1",
        title: "De Vill",
        desc: "Website",
        href: "https://www.behance.net/gallery/106755413/De-Vill-Premium-real-estate"
      },
      {
        alt: "project-2",
        title: "Super Student",
        desc: "Mobile App",
        href: "https://www.behance.net/gallery/129747467/Super-Student-Mobile-App-UXUI"
      },
      {
        alt: "project-3",
        title: "BaloonBus",
        desc: "Identica",
        href: "https://www.behance.net/gallery/175360523/BalloonBus-Brandbook"
      },
      {
        alt: "project-4",
        title: "KarLen",
        desc: "Identica",
        href: "https://www.behance.net/gallery/109494931/LOGO-BRANDBOOK-FOR-KARLEN"
      },
      {
        alt: "project-5",
        title: "Findach",
        desc: "Website",
        href: "https://www.behance.net/gallery/139559209/FINDACH"
      },
      {
        alt: "project-6",
        title: "Bearka",
        desc: "Identica",
        href: "#"
      },
      {
        alt: "project-7",
        title: "ValiDay",
        desc: "Mobile App",
        href: "https://www.behance.net/gallery/144970931/My-Day-mobile-app-for-organizing-holidays"
      },
      {
        alt: "project-8",
        title: "Maka",
        desc: "Identica",
        href: "https://www.behance.net/gallery/116103175/Logo-for-the-bakery-Maka"
      },
      {
        alt: "project-9",
        title: "Glow",
        desc: "Website",
        href: "https://www.behance.net/gallery/106820445/Glow-Atelier-of-wedding-dresses"
      },
    ]

    // Automatically add an "id" field for each project in the array
    projects.forEach((project, index) => {
      project.id = index + 1;
    });

    return {
      projects
    };
  },
});
</script>

<style scoped>

.top-block {
  padding-bottom: 100px;
}

.projects-wrapper {
  padding: 0 20px;
}

.projects {
  margin-bottom: 200px;
}

@media screen and (max-width: 1180px) {

  .projects-wrapper {
    padding: 0;
  }

  .projects {
    margin-bottom: 85px;
  }

  .top-block {
    padding-bottom: 45px;
  }

}

</style>