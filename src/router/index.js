import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login/Main')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/Main')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Main')
    },
    {
        path: '/profil',
        name: 'profil',
        component: () => import('@/views/profil/Main')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/Main')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('@/views/users/Main')
    },
    {
        path: '/users/:id/:username?',
        name: 'detailuser',
        component: () => import('@/views/users/DetailUser')
    },
    {
        path: '/create-user',
        name: 'createuser',
        component: () => import('@/views/users/FormCreate')
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;