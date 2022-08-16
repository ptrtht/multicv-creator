<template>
  <div v-if="!user">
    Please sign in Under <router-link to="/login"> Profile </router-link> to
    continue
  </div>
  <div v-else class="center">
    <CvMain />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CvMain from "../components/CvMain.vue";

@Options({
  components: {
    CvMain,
  },
  computed: {
    user() {
      return this.$User();
    },
  },
})
export default class HomeView extends Vue {}
</script>
