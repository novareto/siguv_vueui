<template>
  <v-app id="inspire">
    <main>
      <v-content>
	<h3> Herzlich Willkommen im Extranet </h3>
	<p class="lead">
	  Hier haben Sie die Möglichkeit unterschiedliche Dinge zu sehen
	</p>

<v-layout>
  <v-flex xs12 sm6 offset1>
<v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
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
  </v-flex>
</v-layout>
	{{this.$auth.user()}}   
	{{this.$auth.user().name}}   
      </v-content>
    </main>
  </v-app>
</template>

<script>
import CardItem from './components/CardItem.vue'
export default {
    name: 'LandingPage',
    data: function() {
	return {
            products: []
	}
    },
    components: {CardItem}
}
</script>
