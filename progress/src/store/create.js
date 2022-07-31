import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        newProgressId: null,
    },
    getters: {
        data: state => state.newProgressId,
    },
    actions: {
        createProgress({commit}) {

            return axios.post('http://backend.repiatx.com/progresso/create').then(({data}) => {

                const progressoId = data.user._id


                commit('SET_DATA', data.user._id)

                router.push({
                    name: 'UpdateProgressBar',
                    path: `/update/${progressoId}`,
                    params: {progressoId: progressoId}
                })
            });

        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.newProgressId = data;
        },
    }
}
