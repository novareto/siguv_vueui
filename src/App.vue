<template>
  <v-app id="inspire">

  <v-navigation-drawer temporary v-model="sideNav">
    <v-list>
      <v-list-tile>
        <v-list-action v-for="item in user_links" :key="item.link">
          <v-icon>{{item.icon}}</v-icon>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar dark class="indigo">
    <v-toolbar-side-icon @click.native.stop="sideNav = ! sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>Extranet</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
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
	    sideNav: false,
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

