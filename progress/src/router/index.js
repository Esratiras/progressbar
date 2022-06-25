/* eslint-disable */
// eslint-disable-next-line
import {createWebHistory, createRouter} from 'vue-router';
import CreateProgressBar from "@/views/CreateProgressBar";
import UpdateProgressBar from "@/views/UpdateProgressBar";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: CreateProgressBar,
    },
    {
        path: '/update/:progressoId',
        name: 'UpdateProgressBar',
        component: UpdateProgressBar,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;