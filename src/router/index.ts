import { createRouter, createWebHistory } from "vue-router";
import PassengerListView from "@/views/Passenger/ListView.vue";
import PassengerDetailView from "@/views/Passenger/DetailView.vue";
import NotFound from "@/views/NotFound.vue";
import LayoutView from "@/views/Passenger/LayoutView.vue";
import NetworkErrorView from "@/views/NetworkErrorView.vue";

import nProgress from "nprogress";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
      }),
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout-view',
      component: LayoutView,

      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true,
        },
      ],
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(()=>{
  nProgress.start();
})
router.afterEach(()=>{
  nProgress.done();
})

export default router;
