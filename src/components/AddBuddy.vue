<template>
  <form>

    <v-text-field
      label="Titel"
      v-model="user.title"
      required
    ></v-text-field>

    <v-text-field
      label="Name"
      v-model="user.name"
      :error-messages="nameErrors"
      @input="$v.user.name.$touch()"
      @blur="$v.user.name.$touch()"
      required
    ></v-text-field>

    <v-text-field
     label="Alter"
      :error-messages="alterErrors"
      @input="$v.user.alter.$touch()"
      @blur="$v.user.alter.$touch()"
      required
     v-model="user.alter">

    </v-text-field>

    <v-btn @click="handle_save">submit</v-btn>
  </form>
</template>


</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "AddBuddy",
  data: function() {
    return {
      user: {
        title: "",
        name: "",
        alter: ""
      }
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.user.name.$dirty) return errors;
      !this.$v.user.name.minLength &&
        errors.push("Der Name muss mindestens 4 Zeichen haben");
      !this.$v.user.name.required && errors.push("Name ist ein Pflichtfeld.");
      return errors;
    },
    alterErrors() {
      const errors = [];
      if (!this.$v.user.alter.$dirty) return errors;
      !this.$v.user.alter.between &&
        errors.push("Bitte geben Sie ein realistisches alter ein");
      !this.$v.user.name.required && errors.push("Alter ist ein Pflichtfeld.");
      return errors;
    }
  },
  methods: {
    handle_save() {
      if (this.$v.$error == false) {
        var url =
          this.$config.SITE_URL +
          "members/" +
          this.$auth.user().pid +
          "/Adressbook";
        this.$http
          .put(url, {
            title: this.user.title,
            name: this.user.name,
            alter: this.user.alter
          })
          .then(response => {
            this.items = response.data.items;
            this.$router.push({ name: "home" });
          })
          .catch(e => {
            console.log("ERRROR");
            console.log(e);
          });
      }
    }
  },

  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4)
      },
      alter: {
        required,
        between: between(0, 130)
      }
    }
  }
};
</script>
