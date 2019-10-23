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
                            name="firstname"
                            type="text"
                            color="indigo"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Lastname"
                            name="lastname"
                            type="text"
                            color="indigo"
                            outlined
                        ></v-text-field>
                         <v-select
                            :items="items"
                            label="Role"
                            outlined
                            ></v-select>
                        <v-text-field
                            label="Username"
                            name="username"
                            type="text"
                            color="indigo"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="indigo"
                            outlined
                        ></v-text-field>
                        <v-card-text class="text-right">
                            <v-btn depressed color="indigo" class="white--text" id="btn">
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
    }),
}
</script>