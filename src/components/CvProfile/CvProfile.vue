<script lang="ts">
import CvSocials from "./CvSocials.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CvSocials,
  },
});
</script>
<template>
  <div class="container text-center text-lg-left">
    <div class="clearfix">
      <div class="site-nav">
        <CvSocials :socials="profile?.socials" />
      </div>
    </div>
  </div>
  <div class="cover shadow-lg bg-white">
    <div class="cover-bg p-3 p-lg-4 text-white">
      <div class="row">
        <div class="col-lg-4 col-md-5">
          <div class="avatar hover-effect shadow-sm p-1">
            <img
              :src="profile?.picUrl || placeholderPic"
              width="175"
              height="175"
            />
          </div>
        </div>
        <div class="col-lg-8 col-md-7 text-center text-md-start">
          <h2 class="h1 mt-2">{{ profile?.name || "{ name }" }}</h2>
          <p>{{ profile?.title || "{ title }" }}</p>
          <a class="btn btn-success shadow-sm mt-1" href="#contact"
            >Download CV</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="pt-5"></div>
  <div class="about-section pt-4 px-3 px-lg-4 mt-1">
    <div class="row">
      <div class="col-md-6">
        <h2 class="h3 mb-3">About Me</h2>
        <p style="text-align: left !important">
          {{ profile?.description || "{ description }" }}
        </p>
      </div>
      <div class="col-md-5 offset-md-1">
        <div class="row mt-2">
          <!--  -->
          <template v-if="profile?.data">
            <div v-for="obj in profile.data" :key="Object.key(obj)">
              <div class="col-sm-4">
                <div class="pb-1">{{ Object.key(obj) }}</div>
              </div>
              <div class="col-sm-8">
                <div class="pb-1 text-secondary">
                  {{ obj }}
                </div>
              </div>
            </div>
          </template>

          <div v-else class="col-sm-4">
            <div class="pb-1">Email</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary">name@domain.com</div>
          </div>

          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>
