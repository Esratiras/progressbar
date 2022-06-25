import axios from "axios";

export default {
    namespaced: true,
    state: {
        data: {},
    },
    getters: {

    },
    actions: {
         updateProgressValue({commit }) {

             return axios.post(`https://523d-212-175-197-5.ngrok.io/progresso/32121212`,{
               value:23
            }).then(({data}) => {
                console.log(data)
                commit('SET_DATA',"")
            });
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    }
}