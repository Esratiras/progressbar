import axios from "../services/axios";
import { notify } from "@kyvg/vue3-notification";

export default {
    namespaced: true,
    state: {
        getProgress: {},
    },
    getters: {
        getProgress(state) {
            return state.getProgress.value
        }
    },
    actions: {
        updateProgressValue({commit}, data) {

            if (data.value < 100 || data.value === 100) {

                return axios.put(`http://backend.repiatx.com/progresso/${data.id}`, {

                    value: data.value
                }).then(() => {
                     data.value === 100 ? notify({
                        title: "Progress",
                        text: "You have reached 100%. Congratulations.😎",
                        type:"success"
                    }) : ''
                    commit("setProgress", data)
                });

            }
        },
        getProgresso({commit}, id) {
            return axios.get(`http://backend.repiatx.com/progresso/${id}`).then((data) => {
                commit("setProgress", data.data)
                return data.data
            })
        },
        resetValue({state}, id) {
            return axios.post(`http://backend.repiatx.com/progresso/${id}`).then(() => {
                state.getProgress.value = 0
                notify({
                    title: "Reset Value",
                    text: "Reset is successful.👌",
                    type:"info"
                });
            })
        }
    },
    mutations: {
        setProgress(state, payload) {
            state.getProgress = payload;
        },
    }
}