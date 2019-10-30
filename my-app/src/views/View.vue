<template>
  <div class="view">
    <Navbar />
    <!-- The grid system inside a card -->
    <v-container class="my-10">
      <v-card flat class="pa-6 " v-for="user in View" :key="user.firstname">
        <v-layout row wrap>
          <v-flex xs12 md4>
            <div class="caption grey-text">Name</div>
            <div>{{ user.firstname }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Role</div>
            <div>{{ user.role }}</div>
          </v-flex>
          <v-flex xs6 sm4 md4>
            <div class="caption grey-text">Username</div>
            <div>{{ user.username }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Phone</div>
            <div>{{ user.phone }}</div>
          </v-flex>
        </v-layout>
        <!-- to seperate the contents in the card -->
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
  },
  data () {
    return{
      users: [
        {firstname: 'Adesiju', role: 'Staff', Username: "Adesiju@gmail.com", date_created: '2019-06-21'},
        {firstname: 'Olorunleke', role: 'Boss', Username: "leke@gmail.com", date_created: '2019-10-10'},
        {firstname: 'Asiwaju', role: 'Staff', Username: "waju@gmail.com", date_created: '2019-07-22'},
      ]
    }
  },
  methods: {
    // sorting
    sortBy(prop ){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  computed: {
    View(){
      return this.$store.state.users
    }
  },
  created(){
    this.$store.dispatch("viewUsers")
  }
};
</script>
<style scoped>
</style>