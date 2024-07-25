import { createRouter, createWebHistory } from "vue-router";
import PassengerListView from "../views/PassengerListView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'passenger-list-view',
            component: PassengerListView,
            props: (route) => ({
                page: parseInt(route.query.page?.toString() || '1') })
        }
    ]
})
export default router