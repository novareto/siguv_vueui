<template>
  <div>
  <h2> {{$route.params.object_type}} </h2>
  <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.titel }}</td>
      <td>{{ props.item.datum }}</td>
      <td>{{ props.item.author }}</td>
      <td>{{ props.item.status }}</td>
    </template>
  </v-data-table>
  </div>
</template>


<script>

export default {
  name: 'ProductFolder',

  data () {
    return {
        items: [],
        headers: [
          {
            text: 'Titel',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Datum',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Status',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Author',
            align: 'left',
            sortable: true,
            value: 'name'
          },
        ]
    }
  },
  created() {
      var url = this.$config.SITE_URL + '/members/' + this.$auth.user().pid + '/' + this.$route.params.object_type
      this.$http.get(url)
          .then(response => {
              console.log(response.data)
              this.items = response.data.items
          })
          .catch(e => {
              console.log(e)
          })

  }

}
</script>
