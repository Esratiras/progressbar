import axios from "axios";
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

                return axios.put(`http://localhost:3000/progresso/${data.id}`, {
                    value: data.value
                }).then(() => {
                    commit("setProgress", data)
                    notify({
                        title: "Progress",
                        text: "You have reached 100%. Congratulations.😎",
                        type:"success"
                    });
                });

            }
        },
        getProgresso({commit}, id) {
            return axios.get(`http://localhost:3000/progresso/${id}`).then((data) => {
                commit("setProgress", data.data)
                return data.data
            })
        },
        resetValue({state}, id) {
            return axios.post(`http://localhost:3000/progresso/${id}`).then(() => {
                state.getProgress.value = 0

            })
        }
    },
    mutations: {
        setProgress(state, payload) {
            state.getProgress = payload;
        },
    }
}