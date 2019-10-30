<template>
  <div class="admin">
    <Navbar />
    <v-container>
      <h2 class="indigo--text ">Dashboard</h2>
       <v-row>
         <v-col cols="12" sm="4" md="4">
           <v-card>
             <v-card-text class="text-center indigo--text">
               <h1>Last Updated Users</h1>
             </v-card-text>
             <v-list v-for="user in View" :key="user.firstname">
               <v-list-item>
                 <v-list-content>{{ user.firstname }} {{ user.lastname }}</v-list-content>
               </v-list-item>
               <v-divider></v-divider>
             </v-list>
           </v-card>
         </v-col>
         <v-col cols="12" sm="6" md="4">
           <v-card>
             <v-card-text class="indigo--text">
               <h1>OVERVIEW</h1>
             </v-card-text>
             <v-list>
               <v-list-item>
                 <v-list-content><h3 class="grey--text">{{ this.$store.state.count}}</h3></v-list-content>
               </v-list-item>
             </v-list>
           </v-card>
         </v-col>
       </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
  },
  data: () => ({
    users: [
      { firstname: 'Ademola', lastname: 'Richard' },
      { firstname: 'Leke', lastname: 'Olorunade' },
      { firstname: 'David', lastname: 'Owiin' },
      { firstname: 'Damola', lastname: 'Thomas' },
      { firstname: 'Caro', lastname: 'Bosede' }
    ]
  }),
  computed: {
    View(){
      return this.$store.state.users
    }
  },
  created(){
    this.$store.dispatch("viewUsers"),
    this.$store.dispatch("Count")
  }
}
</script>