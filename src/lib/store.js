import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    name: 'store',
    state: {
        key: 'value'
    }
});

export { store }