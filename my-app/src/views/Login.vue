<template>
  <v-app id="login">
     <v-snackbar
     top
      v-model="snackbar"
      :timeout="timeout"
      color="error"
    >
      {{ text }}
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-card-text class="text-center indigo--text">
                <v-icon large color="indigo">mdi-account-group</v-icon>
              </v-card-text>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    prepend-inner-icon="mdi-account"
                    type="email"
                    color="indigo"
                    outlined
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    prepend-inner-icon="mdi-key-variant"
                    :type="show1 ? 'text' : 'password'"
                    color="indigo"
                    outlined
                    v-model="password"
                    @click:append="show1 = !show1"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  ></v-text-field>
                </v-form>
              </v-card-text>
                <v-card-text class="text-center">
                  <v-btn depressed color="indigo" class="white--text" id="btn" v-on:click="login()">
                    LOGIN
                    <v-icon right>
                      mdi-login
                    </v-icon>
                  </v-btn>
                </v-card-text>
                <v-card-text>
                  <v-btn block text id="btn">Forgot Password?</v-btn>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      username: '',
      password: '',
      snackbar: false,
      text: "Enter valid username or password",
      timeout: 9000,
      show1: false,
    }),
    methods: {
      login: function(){
        const username = this.username;
        const password = this.password;

        this.$store.dispatch("login",{
          username,
          password
        })
        .then((success) => {
          console.log(success);
          if(success.data[0].role == "Admin"){
            this.$router.push("/admin");
          }
          else if(success.data[0].role == "Boss"){
            this.$router.push("/boss");
          }
          else{
            this.$router.push("/staff");
          }
        })
        .catch(error => {
          console.log(error);
          this.snackbar=true;
        });
      }
    }
  }
</script>
<style scoped>
#btn{
  text-transform: none;
}
</style>