<template>
  <div>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>TASK ASSIGNER</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text color="white" v-on="on">
                <span>menu</span>
                <v-icon>mdi-menu-down</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text small color="white" router-link to='/'>
        <span>SIGN OUT</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
            <v-avater size=100>
                <img src="/avatar-1.png" alt="">
                <p class="indigo--text subheading mt-1">
                    Johnson Idowu
                </p>
            </v-avater>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item router-link to="/admin" class="indigo--text">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/create" class="indigo--text">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create User</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/view" v-on:click="viewUsers()" class="indigo--text">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>View Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/admin'},
        { icon: 'mdi-account-plus', text: 'Create User', route: '/create' },
        { icon: 'mdi-account-multiple', text: 'View Users', route: '/view' },
      ],
    }),
    methods: {
      viewUsers: function(){
        this.$store.dispatch("viewUsers")
        .then((success)=> {
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  }
</script>