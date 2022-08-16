<template>
  <div class="row">
      <span class="text align-left text-start" id="basic-addon3">{{ hintText }}</span>
    <div class="col-6">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          :placeholder="placeholder1"
          ref="newKey"
          v-model="newKey"
        />
        <span class="input-group-text">:</span>
        <input
          type="text"
          class="form-control"
          :placeholder="placeholder2"
          ref="newValue"
          v-model="newValue"
          @keyup.enter="submitInput"
        />
        <button class="btn btn-outline-primary" @click="submitInput">
          Add
        </button>
      </div>
    </div>

    <div class="col-md-5 offset-md-1">
      <div class="row mt-2">
        <template v-for="value in currentValues" :key="value">
          <div class="col-sm-4">
            <div @click="() => removeInpute(value)" class="pb-1 pointer">{{ Object.keys(value)[0] }}</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary center">
              {{ value[Object.keys(value)[0]] }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    currentValues: { type: Array },
    placeholder1: { type: String },
    placeholder2: { type: String },
    hintText: { type: String },
  },
  data() {
    return {
      newKey: "",
      newValue: "",
    };
  },
  methods: {
    submitInput() {
      const newObj = { [this.newKey]: this.newValue };
      this.$emit("submit", newObj);
      (this.$refs.newKey as Record<string, string>).value = "";
      (this.$refs.newValue as Record<string, string>).value = "";
    },
    removeInpute(v: any) {
      this.$emit("remove", v);
    },
  },
});
</script>
