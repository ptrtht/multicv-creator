<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <button @click="logUser">Log User</button>
</template>
<script>
export default {
  methods: {
    logUser() {
      console.log(this.$User());
    },
  },
};
</script>
