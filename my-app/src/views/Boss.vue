<template>
  <div class="dashboard">
      <BossNav />
    <v-subheader class="grey--text">Dashboard</v-subheader>
    <!-- The grid system inside a card -->
    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
        <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
          <v-icon left small>mdi-file-outline</v-icon>
          <span caption text-lowercase>By project name</span>
        </v-btn>
        </template>
        <span>Sort Projects By Title</span>
      </v-tooltip>
      

      <v-tooltip top>
        <template v-slot:activator="{ on }">
        <v-btn small text color="grey" @click="sortBy('staff')" v-on="on">
          <v-icon left small>mdi-account</v-icon>
          <span caption text-lowercase>By Staff</span>
        </v-btn>
      </template>
      <span>Sort Projects By Person</span>
      </v-tooltip>
      
      <v-tooltip top>
        <template v-slot:activator="{ on }">
        <v-btn small text color="grey" @click="sortBy('status')" v-on="on">
          <v-icon left small>mdi-archive</v-icon>
          <span caption text-lowercase>By Status</span>
        </v-btn>
      </template>
      <span>Sort Projects By Status</span>
      </v-tooltip>
    </v-layout>

      <v-card flat class="pa-3" v-for="project in tasks" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md4>
            <div class="caption grey-text">Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption grey-text">Project</div>
            <div>{{ project.project_title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Person</div>
            <div>{{ project.staff }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey-text">Due by</div>
            <div>{{ project.due_date }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div id="chippy" class="float-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <!-- to seperate the contents in the card -->
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import BossNav from '../components/BossNav'
export default {
  components: {
      BossNav,
  },
  data () {
    return{
      projects: [
        { title: 'Design a new website', person: 'Johnson Id', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Damola Thomas', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Richard Li', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a phone that doesn\'t suck', person: 'Carolina Cara', due: '10th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Photo Editing', person: 'Josh Yi', due: '10th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    tasks(){
      return this.$store.state.tasks
    }
  },
  created(){
    return this.$store.dispatch('ProjectDashboard')
  },
  methods: {
    // sorting
    sortBy(prop ){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },

  },
}
</script>
<style scoped>
.project.completed{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
#chippy .completed{
  background: #3cd1c2;
}
#chippy .ongoing{
  background: #ffaa2c;
}
#chippy .overdue{
  background: #f83e70;
}
</style>