import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
  },
  {
    path: "/layouts",
    name: "layouts",
    component: () => import("@/layouts/index.vue"),
    meta: {
      isShow: false,
    },
  },
  {
    path: "/home",
    name: "name",
    component: () => import("@/views/home/index.vue"),
    meta: {
      isShow: true,
      title: "首页",
    },
  },
  {
    path: "/w_comps",
    name: "w_comps",
    meta: {
      isShow: true,
      title: "w_comps",
    },
    component: () => import("@/views/w_comps/index.vue"),
    children: [
      {
        path: "fn_library",
        name: "fn_library",
        meta: {
          isShow: true,
          title: "常用函数库",
        },
        component: () => import("@/views/w_comps/fnLibrary/index.vue"),
      },
      {
        path: "resource_selector",
        name: "resource_selector",
        meta: {
          isShow: true,
          title: "资源选择器",
        },
        component: () => import("@/views/w_comps/resourceSelector/index.vue"),
      },
      {
        path: "tabs_animations",
        name: "tabs_animations",
        meta: {
          isShow: true,
          title: "导航条动画",
        },
        component: () => import("@/views/w_comps/tabsAnimations/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
