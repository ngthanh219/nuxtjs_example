import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        isLoadingLogin: false,
        notification: {
            success: 0,
            message: null,
            status: 0
        },
        auth: {
            user: null,
            accessToken: null,
            refreshToken: null
        },
    },
    actions,
    mutations,
    getters
});
