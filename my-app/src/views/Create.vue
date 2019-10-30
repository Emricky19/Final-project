<template>
    <div id="create">
        <Navbar />
        <v-content>
            <v-container>
                <v-row >
                <v-col
                    cols="12"
                    sm="8"
                    md="8"
                >
                    <v-card class="elevation-12">
                    <v-card-text class="text-center indigo--text">
                        <v-icon large color="indigo">mdi-account-group</v-icon>
                    </v-card-text>
                    <v-card-text>
                        <v-form>
                        <v-text-field
                            label="Firstname"
                            type="text"
                            color="indigo"
                            v-model="firstname"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Lastname"
                            type="text"
                            color="indigo"
                            v-model="lastname"
                            outlined
                        ></v-text-field>
                         <v-select
                            :items="items"
                            label="Role"
                            v-model="role"
                            outlined
                            ></v-select>
                        <v-text-field
                            label="Username"
                            type="text"
                            color="indigo"
                            v-model="username"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            label="Password"
                            type="password"
                            color="indigo"
                            v-model="password"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            id="phone"
                            label="Phone"
                            type="text"
                            color="indigo"
                            v-model="phone"
                            outlined
                        ></v-text-field>
                        <v-card-text class="text-right">
                            <v-btn depressed color="indigo" class="white--text" id="btn" v-on:click="register()">
                                Create User
                                <v-icon right>
                                mdi-plus
                                </v-icon>
                            </v-btn>
                            </v-card-text>
                        </v-form>
                    </v-card-text>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
    components: {
        Navbar,
    },
    data: () => ({
        items: ['Admin', 'Boss', 'Staff'],
        firstname:'',
        lastname: '',
        role:'',
        username: '',
        password: '',
        phone: '',

    }),
    methods: {
        register(){
            const firstname = this.firstname
            const lastname = this.lastname
            const role = this.role
            const username = this.username
            const password = this.password
            const phone = this.phone

            this.$store.dispatch('register', {
                firstname,
                lastname,
                role,
                username,
                password,
                phone
            })
            .then((success) => {
                console.log(success); 
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>