<template>
    <nav>
        <v-app-bar clipped-left flat class="indigo">
            <v-app-bar-nav-icon class="white--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                Task Assigner
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Drop down menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text color="white" v-on="on">
                        <span>menu</span>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text small color="white" router-link to="/">
                <span>SIGN OUT</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer clipped v-model="drawer" app overlay class="white">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avater size=100>
                        <img src="/avatar-1.png" alt="">
                        <p class="indigo--text subheading mt-1">
                            Damola Thomas
                        </p>
                    </v-avater>
                </v-flex>
                <!-- Pop up to add new project -->
                <v-flex class="mt -4 mb-3">
                    <Popup @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="indigo--text">
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'
export default {
    components: {
        Popup
    },
    data () {
        return{
            drawer: true,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/boss'},
                { icon: 'mdi-folder', text: 'My Projects', route: '/bossprojects' },
                { icon: 'mdi-account', text: 'Staff', route: '/view/staff' },
            ],
            snackbar: true
        }
    }
}
</script>