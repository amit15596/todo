<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
    <Header/>
    
    </v-app-bar>

    <v-main>
      <Registration />
      <List/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import List from './components/List';
import Registration from './components/Registration'
export default {
  name: 'App',

  components: {
    Header,
    List,
    Registration
  },

  data: () => ({
    //
  }),
};
</script>
