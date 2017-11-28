<template>
    <v-layout>
      <v-flex offset-sm2 xs8>
        <v-card>
          <v-card-title primary-title>
           <h3 class="headline mb-0"> {{$route.params.object_type}} </h3>
          </v-card-title>
          <v-card-text>
            <v-data-table
                v-bind:headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
            >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.titel }}</td>
      <td>{{ props.item.datum }}</td>
      <td>{{ props.item.status }}</td>
      <td>{{ props.item.author }}</td>
    </template>
  </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>


<script>
export default {
  name: "ProductFolder",

  data() {
    return {
      items: [],
      headers: [
        {
          text: "Titel",
          align: "left",
          sortable: true,
          value: "titel"
        },
        {
          text: "Datum",
          align: "left",
          sortable: true,
          value: "datum"
        },
        {
          text: "Status",
          align: "left",
          sortable: true,
          value: "status"
        },
        {
          text: "Author",
          align: "left",
          sortable: true,
          value: "author"
        }
      ]
    };
  },
  created() {
    var url =
      this.$config.SITE_URL +
      "/members/" +
      this.$auth.user().pid +
      "/" +
      this.$route.params.object_type;
    this.$http
      .get(url)
      .then(response => {
        console.log(response.data);
        this.items = response.data.items;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
