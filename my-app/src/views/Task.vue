<template>
  <div class="projects">
    <BossNav />
    <h2 class="indigo--text ml-12 my-5">Projects</h2>
    <v-row class="ml-12">
        <v-col cols="12" sm="6" md="10">
            <v-card v-for="project in myProjects" :key="project.title">
                <v-card-text>
                    <h2>Design a Website</h2>
                    <p class="py-5"> {{ project.content}}</p>
                    <v-card-text class="text-right">
                        <!-- the button leading to the pop up -->
                        <AssignTask />
                    </v-card-text>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<script>
import AssignTask from '../components/AssignTask'
import BossNav from '../components/BossNav'
export default {
  data () {
    return{
       projects: [
        { title: 'Design a new website', person: 'Damola Thomas', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Mark Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Damola Thomas', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a phone that doesn\'t suck', person: 'Bill Gates', due: '10th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design a new website...again', person: 'Damola Thomas', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  components: {
      AssignTask,
      BossNav,
  },
  computed: {
       myProjects(){
        return this.projects.filter(project => {
          return project.person ==='Mark Li'
        })
    }
  },
};
</script>