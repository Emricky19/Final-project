<template>
  <div class="staff">
    <StaffNav />
    <v-subheader class="grey--text">Team</v-subheader>
    <!-- every grid system must be inside this container -->
    <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2 ">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-action>
                <v-btn text color="grey">
                  <v-icon small left>mdi-phone</v-icon>
                  <span>{{ person.phone}}</span>
                </v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import StaffNav from '../components/StaffNav'
export default {
  data() {
    return {
      team: [
        { name: 'Johnson Id', role: 'Web developer', avatar: '/avatar-1.png', phone: '09023455665'},
        { name: 'Damola Thomas', role: 'Graphic designer', avatar: '/avatar-2.png', phone: '08134257683'},
        { name: 'Richard Li', role: 'Web developer', avatar: '/avatar-3.png', phone: '09034765873'},
        { name: 'Oladipupo Ryu', role: 'Social media maverick', avatar: '/avatar-4.png', phone: '08075382738'},
        { name: 'Josh yi', role: 'Sales guru', avatar: '/avatar-5.png', phone: '08176584930'},
      ]       
    }     
  },
  components: {
      StaffNav
  }
};
</script>