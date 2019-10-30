<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text class="indigo white--text" v-on="on">New Task</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h3 class="indigo--text">Add a New Project</h3>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-text-field label="Staff" v-model="staff" prepend-icon="mdi-account" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <v-autocomplete
                        ref="priority"
                        v-model="priority"
                        :rules="[() => !!priority || 'This field is required']"
                        :items="priorities"
                        label="Priority"
                        prepend-icon="mdi-priority-high"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>
                    <v-autocomplete
                        ref="difficulty"
                        v-model="difficulty"
                        :rules="[() => !!difficulty || 'This field is required']"
                        :items="difficulties"
                        label="Difficulty"
                        prepend-icon="mdi-priority-low"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>
                    <!-- datepicker -->
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="due" label="Due Date" prepend-icon="mdi-table" readonly v-on="on" :rules="inputRules"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        <v-card-text class="text-right">
                            <v-btn text class="indigo white--text mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                        </v-card-text>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data() {
        return{
            title: '',
            content: '',
            due: null,
            //  due:new Date().toISOString().substr(0, 10),
            inputRules:[
                v => v.length >=3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog:false,
            priorities: ['Important', 'Very Important'],
            difficulties: ['Easy', 'Medium', 'Hard'],
        }
    },
    methods: {
    },
    
}
</script>