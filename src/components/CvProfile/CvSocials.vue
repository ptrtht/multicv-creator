<script>
import CvSocialsItem from "./CvSocialItem.vue";
export default {
  components: {
    CvSocialsItem,
  },
  props: ['socials'],
};
</script>
<template>
  <!-- Social Links Top -->

  <nav role="navigation" style="padding: 0 !important">
    <ul class="nav justify-content-center">
      <CvSocialsItem />
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://twitter.com/templateflip"
          title="Twitter"
          ><i class="fab fa-twitter"></i
          ><span class="menu-title sr-only">Twitter</span></a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.facebook.com/templateflip"
          title="Facebook"
          ><i class="fab fa-facebook"></i
          ><span class="menu-title sr-only">Facebook</span></a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.instagram.com/templateflip"
          title="Instagram"
          ><i class="fab fa-instagram"></i
          ><span class="menu-title sr-only">Instagram</span></a
        >
      </li>
    </ul>
  </nav>
</template>
