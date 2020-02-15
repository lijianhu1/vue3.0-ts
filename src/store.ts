import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chatList: {
            root: [],
            admin: [],
            test: [],
        }
    },
    mutations: {
        SOCKET_chatList(state, data) {
            console.log(state, data)
        },
        SOCKET_sendChat(state: any, data) {
            state.chatList[data.toUser].push(data);
        },
        SOCKET_createToUser(state: any, toUser) {
            if (!state.chatList[toUser]) {
                Object.assign(state.chatList, {[toUser]: []});
            }
        }
    },
    actions: {},
});
