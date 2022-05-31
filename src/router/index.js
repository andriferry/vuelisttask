import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import App from '../views/App.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: '',
        component: Home,
    },
    {
        path: '/app',
        name: 'app',
        component: App,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
