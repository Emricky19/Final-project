<template>
  <div class="projects">
      <BossNav />
    <v-subheader class="grey--text">Projects</v-subheader>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.project_title">
          <v-expansion-panel-header>{{ project.project_title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{project.date_created}}</div>
              <div>{{project.description}}</div>
            </v-card-text>
            <v-card-text class="text-right">
              <v-btn class="indigo--text" text router-link to="/tasks">more details</v-btn>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
import BossNav from '../components/BossNav'
export default {
  data () {
    return{
    }
  },
  components: {
      BossNav,
  },
  // computed: {
  //      myProjects(){
  //       return this.projects.filter(project => {
  //         return project.person ==='Damola Thomas'
  //       })
  //   }

  // },
  computed: {
    projects(){
      return this.$store.state.projects
    }
  },
  created(){
    return this.$store.dispatch('Projects');
  }

};
</script>