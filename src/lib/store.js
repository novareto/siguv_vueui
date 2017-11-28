import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        key: 'value',
	message: null
    },
    mutations: {
	flush_message: state => { state.message = null; },
	set_message: (state, message) => {
	    console.log('Setting message ' + message);
	    state.message = message;
	}
    }
});

export default store;
