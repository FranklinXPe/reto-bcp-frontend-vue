<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span>Aplicación Tipo de cambio BCP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--inicio: Salir o cerrar sesion -->
      <v-btn text @click="logout">
        <span>Logout</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <!--fin: Salir o cerrar sesion -->
    </v-app-bar>

    <!-- inicializamos el DRAWER -->
    <v-navigation-drawer v-model="drawer" dark app class="primary">
      <!-- el layout anuncia que vas utilizar un flex -->
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/logo-bcp.jpg" alt="banco de crédito del perú" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Invitado</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- finalizamos el DRAWER -->
  </nav>
</template>

<script>
import { authComputed } from "../store/helpers.js";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped></style>
