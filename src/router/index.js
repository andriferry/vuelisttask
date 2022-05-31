import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import App from '../views/App.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
    {
        path: '/App',
        name: 'app',
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
