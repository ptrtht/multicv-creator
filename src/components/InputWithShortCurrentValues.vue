// Have input on the left with hint above it // and current values are on the
right

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
    </div>
    <div class="col-6">
      <template v-for="(value, index) in currentValues" :key="value">
        <span v-if="index != 0"> &#9900; </span>
        <span @click="removeInpute(value)" class="pointer">{{ value }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  props: {
    hintText: {
      type: String,
      required: true,
    },
    currentValues: {
      type: Array,
      required: true,
    },
    placeholder: String,
  },
  methods: {
    submitInput(event) {
      this.$emit("submit", event.target.value);
      this.$refs.input.value = "";
    },
    removeInpute(v) {
      this.$emit("remove", v);
    },
  },
});
</script>
