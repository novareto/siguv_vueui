<template>
<v-layout>
  <v-flex offset-sm2 xs8>
    <v-card>
        <v-card-title primary-title>
          <h3 class="headline mb-0">Login</h3>
        </v-card-title>
      <v-card-text>
 <form>

    <v-text-field
      label="Benutzername"
      v-model="credentials.login"
      required
    ></v-text-field>

    <v-text-field
      label="Passwort"
      v-model="credentials.password"
      type="password"
      required
    ></v-text-field>

    <v-btn @click="login()">Login</v-btn>

 </form>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      credentials: { login: "", password: "" }
    };
  },
  methods: {
    login: function() {
      var redirect = this.$auth.redirect();
      this.$auth.login({
        data: this.credentials,
        rememberMe: true,
        success() {
          console.log("success " + this.context);
        },
        error(res) {
          console.log("error " + this.context);
          this.error = res.data;
        }
      });
    }
  }
};
</script>
