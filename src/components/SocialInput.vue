<template>
  <div class="row">
    <div class="col-7">
      <div class="row">
        <select
          v-model="newSocialIndex"
          class="form-select col"
          aria-label="socials-select"
        >
          <template v-for="(option, index) in options" :key="option.name">
            <option :value="index">{{ option.name }}</option>
          </template>
        </select>
        <input
          type="text"
          class="col"
          placeholder="Paste link here"
          v-model="linkTo"
        />
        <span class="col text-start">
          <button
            type="button"
            class="btn btn-outline-primary float-left"
            @click="emitSocial"
          >
            Add
          </button>
        </span>
      </div>
    </div>

    <div class="col-4">
      <div class="row">
        <template v-for="(social, index) in socials" :key="index">
          <div class="col-4">
            <CvSocialItem :socialButton="social" />
            <span class="center pointer" @click="() => removeSocial(index)"
              >remove</span
            >
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ScoialButton } from "@/types/socialButton.type";
import { PropType } from "vue";
import CvSocialItem from "./CvProfile/CvSocialItem.vue";
import config from "@/util/config";
import { isUrl } from "@/util/isUrl";

export default defineComponent({
  components: { CvSocialItem },
  props: {
    socials: {
      type: Array as PropType<ScoialButton[]>,
      required: true,
    },
  },
  data() {
    return {
      newSocialIndex: 0,
      options: [] as ScoialButton[],
      linkTo: "",
    };
  },
  beforeMount() {
    this.options = config.get().socialOptions;
  },

  methods: {
    emitSocial() {
      let selected = this.options[this.newSocialIndex];
      selected.linkTo = this.linkTo;

      const uniqueClassName =
        this.socials.filter((val) => val.className === selected.className)
          .length !== 0;

      if (!isUrl(selected.linkTo)) {
        alert("Enter a valid URL!");
      } else if (uniqueClassName) {
        alert("You can only have one link per platform!");
      } else if (selected.linkTo) {
        this.$emit("submit", [selected, ...this.socials]);
      }
      this.linkTo = "";
      this.newSocialIndex = 0;
    },
    removeSocial(index: number) {
      const soc = this.socials;
      soc.splice(index, 1);
      this.$emit("submit", soc);
    },
  },
});
</script>
