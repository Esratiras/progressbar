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
            const api = process.env.VUE_BASE_URL
            console.log(api)
            return axios.post(`${api}/progresso/create`).then(({data}) => {

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
