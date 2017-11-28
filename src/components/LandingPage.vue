<template>
<div>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
	<h3> Herzlich Willkommen im Extranet </h3>
	<p class="lead">
	  Hier haben Sie die Möglichkeit unterschiedliche Dinge zu sehen
	</p>
      </v-flex>
  <v-flex xs5 offset1>
<v-card>
        <v-card-media src="https://www.vera-donna.eu/wp-content/uploads/2016/06/Adressbuch-Scrittura-klein-mit-bestem-Einschreibpapier-940x840.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Adressbuch</h3>
            <div>Verwalten Sie hier Ihre Adressen und Bekannten</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn route to="addBuddy" flat color="orange"> <v-icon>add</v-icon>  Hinzufügen</v-btn>
          <v-btn route to="dokumente/Adressbook" flat color="orange"> <v-icon>list</v-icon> Einträge</v-btn>
        </v-card-actions>
      </v-card>
	{{this.$auth.user()}}   
	{{this.$auth.user().name}}   
  </v-flex>
  </v-layout>
  </v-container>
</div>  
</template>

<script>
export default {
  name: "LandingPage",
  data: function() {
    return {
      products: []
    };
  }
};
</script>
