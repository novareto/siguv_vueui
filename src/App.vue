<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
       >
      <v-list dense>
           <router-link :to="link.route" tag="li"
			v-for="link in getLinks()" :key="link.route">
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon medium class="grey--text text--darken-2">
		  {{ link.icon }}
		</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="link.title" />
              </v-list-tile-content>
            </v-list-tile>
           </router-link>
           <v-list-tile @click="$auth.logout()" v-if="$auth.check()">
	      <v-list-tile-avatar>
                <v-icon medium class="grey--text text--darken-2">
		  cancel
		</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>UVCSite</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
	data: () => ({
	    drawer: true,
	    user_links: [
		{
		    title: 'Home',
		    icon: 'bookmark_border',
		    route: '/',
		},
		{
		    title: 'Add buddy',
		    icon: 'add',
		    route: '/addBuddy',
                },
	    ],
	    anon_links: [
		{
		    title: 'Login',
		    icon: 'person_outline',
		    route: '/login',
		    auth: false,
		},
	    ],
	}),
	methods: {
	    getLinks: function () {
		if (this.$auth.check()) {
		    return this.user_links
		} else {
		    return this.anon_links
		}
	    },
    },
    }
</script>

<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/main.styl'
</style>

