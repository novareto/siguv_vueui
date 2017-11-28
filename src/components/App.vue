<template>
  <v-app id="inspire">
  <v-navigation-drawer app absolute mobile-break-point=1999 v-model="hans">
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
  <v-toolbar dark fixed app class="blue darken-4">
    <v-toolbar-side-icon @click.stop="hans = !hans" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>Extranet</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only" v-for="item in user_links" :key="item.link">
      
      <v-btn router flat :to="item.route"> <v-icon>{{item.icon}}</v-icon>  {{item.title}}</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
    <v-menu offset-y v-if="this.$auth.check()">
      <v-btn flat class="indigo" slot="activator">
        <span>Meine Einstellungen</span>
        <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
      <v-list>
        <v-list-tile v-for="item in pers_links" :key="item.title">
          <v-btn router flat :to="item.route"> <v-icon>{{item.icon}}</v-icon>  {{item.title}}</v-btn>
        </v-list-tile>
          <v-divider></v-divider>
        <v-list-tile>
          <v-btn v-on:click="logout()" flat href="javascript:void(0);"><v-icon>lock_open</v-icon> Abmelden </v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
  </v-toolbar>


  <v-container fluid fill-height>
      <v-content>
          <router-view></router-view>
      </v-content>
  </v-container>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      hans: false,
      pers_links: [
        {
          title: "Meine Daten",
          icon: "account_box",
          route: "logout"
        }
      ],
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
    };
  },
  methods: {
    getLinks: function() {
      if (this.$auth.check()) {
        return this.user_links;
      } else {
        return this.anon_links;
      }
    },
    logout() {
      this.$auth.logout({
        makeRequest: true,
        success() {
          console.log("success " + this.context);
          this.$router.push({ name: "login" });
        },
        error() {
          console.log("error " + this.context);
        }
      });
    }
  }
};
</script>

<style lang="stylus">
@require '../../node_modules/vuetify/src/stylus/main.styl';
</style>

