<template>
  <div class="about">
    <div class="container">
      <div class="center">
        <div v-if="user">
          <div>
            <div>Currently signed in as:</div>
            <span> email: </span> <span> {{ user.email }} </span> <br />
            <span> name: </span> <span> {{ user.displayName }} </span>
          </div>
          <button type="button" class="btn btn-primary" @click="logout()">
            {{ getLoading("Sign out") }}
          </button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-primary" @click="login()">
            {{ getLoading("Continue with Google") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { googleProvider } from "../util/firebase";
import * as auth from "firebase/auth";
import { User } from "firebase/auth";

@Options({
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    user(): User | null {
      this.loading;
      return this.$User();
    },
  },
  methods: {
    getLoading(text: string) {
      if (this.loading) return "Loading...";
      return text;
    },
    async login() {
      this.loading = true;
      try {
        await auth.signInWithPopup(auth.getAuth(), googleProvider);
      } catch (e) {
        alert(e);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      await auth.signOut(auth.getAuth());
      this.loading = false;
    },
  },
})
export default class LoginView extends Vue {}
</script>
