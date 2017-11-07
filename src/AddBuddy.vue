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
      v-bind:class="{'is-danger': $v.user.name.$error, 'is-success': $v.user.name.$dirty && !$v.user.name.$invalid}"
      @input="$v.user.name.$touch()"
      @blur="$v.user.name.$touch()"
      required
    ></v-text-field>

    <v-btn @click="handle_save">submit</v-btn>
  </form>
</template>


</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
   name: 'AddBuddy',
   data: function () {
       return {
           user: {
               title: '',
               name: '',
               alter: ''
           }
       }
   },
   methods: {
       handle_save() {
           alert(this.$auth.user());
           if (this.$v.$error == false) {
               var url = this.$config.SITE_URL + 'members/' + this.$auth.user().pid + '/Adressbook'
               this.$http.put(url, {title: this.user.title, name: this.user.name, alter: this.user.alter}
                   ).then(response => {
                       this.items = response.data.items
                       this.$router.push('/')
                   }).catch(e => {
                       console.log("ERRROR")
                       console.log(e)
                   })               
           }
       }
   },
   
   validations: {
       user: {
           name: {
               required,
               minLength: minLength(4)
           },
       },
   }
}
</script>
