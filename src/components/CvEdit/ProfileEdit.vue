<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SimpleSpinner from "../../components/SimpleSpinner.vue";
import { PropType } from "vue";
import { ProfileOptions } from "@/types/db/Options/ProfileOptions";
import InputWithCurrentValues from "@/components/InputWithShortCurrentValues.vue";
import { ScoialButton } from "@/types/socialButton.type";
import SocialInput from "../SocialInput.vue";
import PictureInput from "../PictureInput.vue";
import InputWithLongCurrentValues from "../InputWithLongCurrentValues.vue";
import KeyValueInput from "../KeyValueInput.vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<ProfileOptions>,
      required: true,
    },
  },
  methods: {
    updateProfileOptions() {
      this.$emit("update:modelValue", this.modelValue);
    },
    addToProfileOptions(key: keyof typeof this.modelValue, newValue: any) {
      let currentValue = this.modelValue[key];
      if (currentValue != undefined && !currentValue.includes(newValue)) {
        this.modelValue[key] = [...currentValue, newValue];
      }
      this.updateProfileOptions();
    },
    removeFromProfileOptions(
      key: keyof typeof this.modelValue,
      removeValue: any
    ) {
      // This one is for sure against design standarts & best practices :)
      let currentValue = this.modelValue[key];
      if (currentValue != undefined) {
        currentValue = (currentValue as Array<any>).filter((val, _) => {
          const f = val != removeValue;
          return f;
        });
      }

      this.modelValue[key] = currentValue as any;

      this.updateProfileOptions();
    },
    setSocialToProfileOptions(newValue: ScoialButton[]) {
      if (!this.modelValue.socials) {
        alert("Something went wrong, please reload the page!");
        return;
      }
      this.modelValue.socials = newValue;
      this.updateProfileOptions();
    },
    log(v: any) {
      console.info(v);
    },
  },
  components: {
    SimpleSpinner,
    InputWithCurrentValues,
    SocialInput,
    PictureInput,
    InputWithLongCurrentValues,
    KeyValueInput,
  },
});
</script>

<template>
  <div v-if="modelValue === undefined">
    <SimpleSpinner />
  </div>
  <div>
    <InputWithCurrentValues
      hintText="Name"
      placeholder="John Doe"
      :currentValues="modelValue.name"
      @submit="(v) => addToProfileOptions('name', v)"
      @remove="(v) => removeFromProfileOptions('name', v)"
    />
    <hr />
    <InputWithCurrentValues
      hintText="Title"
      placeholder="General Manager, Engineer"
      :currentValues="modelValue.title"
      @submit="(v) => addToProfileOptions('title', v)"
      @remove="(v) => removeFromProfileOptions('title', v)"
    />
    <hr />
    <SocialInput
      @submit="setSocialToProfileOptions"
      :socials="modelValue.socials"
    />
    <hr />
    <PictureInput
      :currentValues="modelValue.picUrl"
      placeholder="Paste Link to image here"
      hintText="PicUrl"
      @submit="(v) => addToProfileOptions('picUrl', v)"
      @remove="(v) => removeFromProfileOptions('picUrl', v)"
    />
  <hr>
    <InputWithLongCurrentValues
      hintText="Profile Description"
      placeholder="I'm an avid tech enthusiast..."
      :currentValues="modelValue.description"
      @submit="(v) => addToProfileOptions('description', v)"
      @remove="(v) => removeFromProfileOptions('description', v)"
    />
  <hr>
    <KeyValueInput
      :currentValues="modelValue.data"
      placeholder1="email address | phone number"
      placeholder2="hello@world.com | 123456"
      hintText="Personal data"
      @submit="(v) => addToProfileOptions('data', v)"
      @remove="(v) => removeFromProfileOptions('data', v)"
       />
  </div>
</template>
