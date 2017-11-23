<template>
  <v-app id="inspire">
  <v-navigation-drawer app fixed v-model="drawer">
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          UVCSite
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile v-for="item in user_links" :key="item.link" :name="item.title">
        <v-list-tile-action >
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-container>
  <v-toolbar dark fixed app class="blue darken-4">
    <v-toolbar-side-icon @click.native.stop="drawer = ! drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>Extranet</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only" v-for="item in user_links" :key="item.link">
      
      <v-btn router flat :to="item.route"> <v-icon>{{item.icon}}</v-icon>  {{item.title}}</v-btn>
    </v-toolbar-items>

    <!--
    <v-toolbar-items>
    <v-menu offset-y>
      <v-btn flat class="indigo" slot="activator">
        <span>Meine Einstellungen</span>
        <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
    -->
  </v-toolbar>


      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    user_links: [
      {
        title: "Home",
        icon: "bookmark_border",
        route: "/"
      },
      {
        title: "Add buddy",
        icon: "add",
        route: "/addBuddy"
      }
    ],
    anon_links: [
      {
        title: "Login",
        icon: "person_outline",
        route: "/login",
        auth: false
      }
    ]
  }),
  methods: {
    getLinks: function() {
      if (this.$auth.check()) {
        return this.user_links;
      } else {
        return this.anon_links;
      }
    }
  }
};
</script>

<style lang="stylus">
@require '../node_modules/vuetify/src/stylus/main.styl';
</style>

