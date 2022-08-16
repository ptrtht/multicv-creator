<template>
  <a
    class="nav-link"
    :href="socialButton.linkTo"
    target="_blank"
    :title="socialButton.platformName"
    ><i class="fab" :class="socialButton.className"></i
    ><span class="menu-title sr-only">
      {{ socialButton.platformName }} </span
    ></a
  >
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ScoialButton } from "@/types/socialButton.type";

export default defineComponent({
  props: {
    socialButton: Object as PropType<ScoialButton>,
  },
});
</script>
