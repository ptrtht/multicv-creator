<template>
  <h3>Coming soon!</h3>
  <p>
    {{ CvOptions }}
  </p>

  <!-- 
  Select item(s):
  Prop: Selection amount limit, for single select = 1 
  element is listed, click on one to toggle it (maybe draw green box around it if selected, none if not)
   -->

  <div class="row"></div>
</template>
<script lang="ts">
import { db } from "@/util/firebase";
import { defineComponent } from "@vue/runtime-core";
import config from "@/util/config";
import { CvOptionsDoc } from "@/types/db/Options/CvOptions.type";

export default defineComponent({
  data() {
    return {
      CvOptions: {} as CvOptionsDoc,
      Cv: {},
      user: this.$User(),
    };
  },
  async created() {
    const conf = config.get();
    const version = conf.db.version;
    const CvPath = conf.db.CvPath;
    const userPath = `${version}/${this.user?.uid}/${CvPath}`;
    console.log(userPath);

    this.CvOptions = (await db.doc(`${userPath}/CvOptions`).get()).data() || {};
  },
});
</script>
