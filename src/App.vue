<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>BCP Tipo de cambio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>

    <NavBarGuest v-if="loggedIn" />

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          Junio - {{ new Date().getFullYear() }} —
          <strong>Reto BCP</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavBarGuest from "@/components/NavBarGuest.vue";
import { authComputed } from "@/store/helpers.js";

export default {
  name: "App",

  components: { NavBarGuest },

  data: () => ({
    showPassword: false,
    links: [
      { icon: "mdi-login-variant", text: "Login", route: "/login" },
      { icon: "mdi-view-dashboard", text: "Home", route: "/home" },
    ],
  }),
  computed: {
    ...authComputed,
  },
};
</script>
