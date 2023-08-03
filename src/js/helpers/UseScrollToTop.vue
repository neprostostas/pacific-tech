<script>
import { onBeforeMount } from "vue";

export default function useScrollToTop() {
  onBeforeMount(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth"
    });
  });
}

</script>