<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text class="indigo white--text" v-on="on">ADD NEW PROJECT</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h3 class="indigo--text">Add a New Project</h3>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="project_title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="description" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <v-btn text class="indigo white--text mx-0 mt-3 " @click="submit" :loading="loading" v-on:click="addProject()">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data() {
        return{
            project_title: '',
            description: '',
            due: null,
            //  due:new Date().toISOString().substr(0, 10),
            inputRules:[
                v => v.length >=3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog:false,
        }
    },
    methods: {
        addProject(){
            const project_title = this.project_title
            const description = this.description

            this.$store.dispatch('addProject', {
              project_title,
              description
            })
            .then((success) => {
                console.log(success); 
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    
}
</script>