import Vue from "vue";
import VueRouter from "vue-router";
// import taobao from '@/components/tbMain/taobao'
import store from "@/store/index";

Vue.use(VueRouter);
const taobao = () => import("@/components/tbMain/taobao");
const userLogin = () => import("@/components/tbLogin/userLogin");
const shoppingMain = () => import("@/components/tbShop/shopMain");
const shopInfo = () => import("@/components/tbShopInfo/shopInfo");
const orderMain = () => import("@/components/tbOrder/orderMain");
const orderInfo = () => import("@/views/tbOrder/orderInfo");
const userOrderMain = () => import("@/components/tbOrder/userOrderMain");
const userAddress = () => import("@/views/tbOrder/userAddress");
const tbCar = () => import("@/components/tbCar/tbCar");
const finishMain = () => import("@/components/tbOrder/finishMain");
const Rate = ()=>import("@/views/tbOrder/Rate")

const routes = [
  {
    path: "/",
    redirect: "/taobao"
  },
  {
    path: "/taobao",
    name: "taobao",
    component: taobao
  },
  {
    path: "/userLogin",
    name: "userLogin",
    component: userLogin
  },
  {
    path: "/shoppingMain/:shopName",
    name: "shoppingMain",
    component: shoppingMain,
    meta: {
      requestAuth: true //该路由需要权限校验
    }
  },
  {
    path: "/shopInfo/:id",
    name: "shopInfo",
    component: shopInfo
  },
  {
    path: "/orderMain",
    name: "orderMain",
    component: orderMain
  },
  {
    path: "/userOrderMain",
    name: "userOrderMain",
    component: userOrderMain,
    meta: {
      requestAuth: true //该路由需要权限校验
    }
  },
  {
    path: "/tbCar",
    name: "tbCar",
    component: tbCar,
    meta: {
      requestAuth: true //该路由需要权限校验
    }
  },
  {
    path: "/orderInfo",
    name: "orderInfo",
    component: orderInfo

  },
  {
    path: "/userAddress",
    name: "userAddress",
    component: userAddress

  },
  {
    path: "/finishMain",
    name: "finishMain",
    component: finishMain

  },
  {
    path: "/Rate",
    name: "Rate",
    component: Rate

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (from.path == "/") {
    next();
  } else {
    if (to.meta.requestAuth) {
      if (store.state.token) {
        next();
      } else {
        next("/userLogin");
      }
    } else {
      next();
    }
  }
});

export default router;
