<template>
  <v-app>
    <v-app id="login">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="email"
                      v-model="email"
                      label="Email"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      v-model="password"
                      label="Password"
                      id="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="login" color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </v-app>
</template>


<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isFormSuccess: false
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            console.log("You have been chosen");
            const userLogged = user;
            console.log(userLogged);
          },
          function(err) {
            alert("Err, " + err.message);
          }
        );
      console.log(this.email, this.password);

      if (this.email && this.password) {
        this.isFormSuccess = true;
      }
      console.log(this.isFormSuccess);
    }
  }
};
</script>

<style scoped>
</style>
