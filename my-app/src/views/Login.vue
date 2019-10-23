<template>
  <v-app id="login">
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
                    name="username"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    color="indigo"
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-inner-icon="mdi-key-variant"
                    type="password"
                    color="indigo"
                    outlined
                  ></v-text-field>
                </v-form>
              </v-card-text>
                <v-card-text class="text-center">
                  <v-btn depressed color="indigo" class="white--text" id="btn" router-link to="/admin">
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
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
<style scoped>
#btn{
  text-transform: none;
}
</style>