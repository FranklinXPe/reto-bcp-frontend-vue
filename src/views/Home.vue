<template>
  <div class="home">
    <h1>Bienvenido a nuestra App!</h1>
    <div v-if="!loggedIn">
      Para usarlo deberas identificarte en
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers.js";

export default {
  name: "Home",
  computed: {
    ...authComputed,
  },
};
</script>
