<template>
  <div class="row">
    <div class="col-5">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">{{ hintText }}</span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          :placeholder="placeholder"
          aria-describedby="basic-addon3"
          @keyup.enter="submitInput"
          ref="input"
        />
      </div>
        <p class="p-0 lh-1 fw-lighter fs-6" style="font-size: 75% !important">Right click on picture -> "copy image address"</p>
    </div>
    <div class="col-6">
      <template v-for="(value, index) in currentValues" :key="value">
        <span v-if="index != 0"> &#9900; </span>
        <img
          @click="() => removeInput(value)"
          class="pointer"
          :src="value"
          width="175"
          height="175"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    currentValues: { type: Array },
    placeholder: { type: String },
    hintText: { type: String },
  },
  methods: {
    submitInput(event: any) {
        console.log(event.target.value)
      this.$emit("submit", event.target.value);
      (this.$refs.input as Record<string, string>).value = "";
    },
    removeInput(v: string) {
      this.$emit("remove", v);
    },
  },
});
</script>
