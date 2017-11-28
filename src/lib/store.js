import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    name: 'store',
    state: {
        key: 'value',
    },
    modules: {
	flash_message: {
	    namespaced: true,
	    state: {
		message: null
	    },
	    mutations: {
		flush: state => {
		    state.message = null;
		},
		add: (state, message) => {
		    state.message = message;
		}

	    }
	}
    }
});

export default store;

