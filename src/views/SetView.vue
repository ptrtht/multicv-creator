<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ProfileEdit from "../components/CvEdit/ProfileEdit.vue";
import {
  CvOptionsDoc,
  createEmptyCvOptions,
} from "@/types/db/Options/CvOptions.type";
import SimpleSpinner from "@/components/SimpleSpinner.vue";
import config from "@/util/config";
import { db } from "@/util/firebase";

export default defineComponent({
  data() {
    return {
      CvOptions: {} as CvOptionsDoc,
      loading: true,
      saving: false,
      user: this.$User(),
    };
  },
  async created() {
    this.loading = true;
    const conf = config.get();
    const dbVersion = conf.db.version;
    const CvPath = conf.db.CvPath;
    const CvOptionsDoc = await db
      .doc(`${dbVersion}/${this.user?.uid}/${CvPath}/CvOptions`)
      .get();

    const CvDocData = CvOptionsDoc.data();

    if (!CvDocData) {
      this.CvOptions = createEmptyCvOptions();
    } else {
      this.CvOptions = CvDocData;
    }

    this.loading = false;
  },
  methods: {
    async save() {
      this.saving = true;
      const conf = config.get();
      const dbVersion = conf.db.version;
      const CvPath = conf.db.CvPath;
      await db
        .doc(`${dbVersion}/${this.user?.uid}/${CvPath}/CvOptions`)
        .set(this.CvOptions);
      this.saving = false;
    },
  },
  components: { ProfileEdit, SimpleSpinner },
});
</script>
<template>
  <div v-if="!user">
    Please <router-link to="/login">sign in</router-link> first
  </div>
  <div v-else-if="loading">
    <SimpleSpinner />
  </div>
    <div v-else class="accordion" id="accordionExample">
      <!-- Profile -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Profile
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ProfileEdit v-model="CvOptions.profile" />
          </div>
        </div>
      </div>
      <!--  -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  <div class="row">
    <footer>
      <div class="center align-middle fixed-bottom p-3" style="color: grey">
        Please click before leaving this tab! -->
        <button class="btn btn-primary" type="submit" @click="save">
          <div
            v-if="saving"
            class="spinner-border spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else> Save </span>
        </button>
      </div>
    </footer>
  </div>
</template>

<style >
  .accordion{
    max-height: 80vh !important;
    overflow-y: scroll;
  }

  footer {
    height: 10vh !important;
  }
</style>