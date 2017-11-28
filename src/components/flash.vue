<template>
  <v-snackbar
     :timeout="timeout"
     :color="color"
     :multi-line="mode === 'multi-line'"
     :vertical="mode === 'vertical'"
     v-model="show"
     >
    {{ message }}
    <v-btn dark flat @click.native="message = null">Close</v-btn>
  </v-snackbar>
</template>


<script>
export default {
    data() {
	return {
	    show: false,
	    color: '',
	    mode: '',
	    timeout: 6000,
	}
    },
    watch: {
	message: function(value, old) {
	    this.show = (value != null);
	}
    },
    computed: {
	message: {
	    get: function () {
		return this.$store.state.message;
	    },
	    set: function(value) {
		this.$store.commit('flush_message');
	    }
	}
    }
};
</script>

<style>
</style>
