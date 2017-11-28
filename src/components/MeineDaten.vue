<template>
  <v-layout>
    <v-flex offset-sm2 xs8>
      <v-card>
        <v-card-title class="headline mb-0">
          <h3> Meine Daten </h3>
        </v-card-title>
        <v-card-text>
          <div>
            <p>Novareto GmbH</p>
            <p>Karonlinenstr. 17</p>
            <p>90763 Fürth</p>
	    
            <p>0911/7807252</p>
            <p>info@novareto.de</p>
          </div>
          <div>
            <table>
              <tr>
                <th>Veranlagung</th>
                <th>DEUV-Nummer</th>
              </tr>
              <tr>
                <td>Verwaltung</td>
                <td>6567</td>
              </tr>
            </table>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "MeineDaten"
};
</script>

<style scoped>

</style>
