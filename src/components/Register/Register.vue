<template>
  <v-app>
    <v-app id="signIn">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="secondary">
                  <v-toolbar-title>Register form</v-toolbar-title>
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
                  <v-btn @click.prevent="signUp" :disabled="isLoading" color="secondary">Register</v-btn>
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
import { mapActions } from "vuex";
import { error } from "util";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["registerWithEmail"]),
    signUp() {
      this.isLoading = true;
      let data = {
        email: this.email,
        password: this.password
      };
      this.registerWithEmail(data)
        .then(user => {
          alert("Account Created :) !");
          this.$router.push({ name: "Home" });
        })
        .catch(error => {
          alert("Oops. " + err.message);
        })
        .then(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
