import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/layouts'
  },
  {
    path: '/layouts',
    name: 'layouts',
    component: () => import("@/layouts/index.vue"),
    meta: {
      isShow: false
    }
  },
  {
    path: "/home",
    name: "name",
    component: () => import("@/views/home/index.vue"),
    meta: {
      isShow: true,
      title: "首页"
    }
  },
  {
    path: "/w_comps",
    name: "w_comps",
    meta: {
      isShow: true,
      title: "w_comps"
    },
    component: () => import("@/views/w_comps/index.vue"),
    children: [
      {
        path: "resource_selector",
        name: "resource_selector",
        meta: {
          isShow: true,
          title: "资源选择器"
        },
        component: () => import("@/views/w_comps/resourceSelector/index.vue")
      },
      {
        path: "resource_selector1",
        name: "resource_selector1",
        meta: {
          isShow: true,
          title: "资源选择器1"
        },
        component: () => import("@/views/w_comps/resourceSelector1/index.vue")
      },
    ]
  }
]


const router = new VueRouter({
  mode: "history",
  routes
})

export default router
