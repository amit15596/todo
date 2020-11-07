<template>
  <v-container>
    <v-toolbar flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Photography</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <li>
            <router-link></router-link>
          </li>
          Home
        </v-btn>

        <v-btn text>
          About
        </v-btn>

        <v-btn text>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>
