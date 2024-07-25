import { createRouter, createWebHistory } from "vue-router";
import PassengerListView from "../views/Passenger/ListView.vue";
import PassengerDetailView from "../views/Passenger/DetailView.vue";
import NotFound from "../views/NotFound.vue";
import LayoutView from "../views/Passenger/LayoutView.vue";
import NetworkErrorView from "../views/NetworkErrorView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "passenger-list-view",
      component: PassengerListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || "1"),
      }),
    },
    {
      path: "/passenger/:id",
      name: "passenger-layout-view",
      component: LayoutView,
      props: true,
      children: [
        {
          path: "",
          name: "passenger-detail-view",
          component: PassengerDetailView,
          props: true,
        },
      ],
    },
    {
      path: "/404/:resource",
      name: "404-resource-view",
      component: NotFound,
      props: true,
    },
    {
      path: "/network-error",
      name: "network-error-view",
      component: NetworkErrorView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
