<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">List</router-link> 
          <br>
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </nav>

    <router-view>
    </router-view>
  </div>
  <!-- <v-app>
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
  </v-app> -->
</template>

<script>
// import Header from './components/Header';
// import List from './components/List';
// import Registration from './components/Registration'
export default {
  name: 'App',

  components: {
    // Header,
    // List,
    // Registration
  },

  data: () => ({
    //
  }),

  
};
</script>
