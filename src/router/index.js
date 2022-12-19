import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import DogsItemView from "../views/DogsItemView.vue";
import CatsItemView from "../views/CatsItemView.vue";
import tempattdrView from "../views/tempattdrView.vue";
import CattyStressView from "../views/CattyStressView.vue";
import MakananView from "../views/MakananView.vue";
import KeranjangView from "../views/KeranjangView.vue";
import WishlistView from "../views/WishlistView.vue";
import KASURView from "../views/KASURView.vue";
import TaganjingView from "../views/TaganjingView.vue";
import MangkukView from "../views/MangkukView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import product_edit from "../components/product_edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      name: "product",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductView,
    },
    {
      path: "/dogsitem",
      name: "dogsitem",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DogsItemView,
    },
    {
      path: "/catsitem",
      name: "catsitem",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CatsItemView,
    },
    {
      path: "/tempattdr",
      name: "tempattdr",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: tempattdrView,
    },
   {
      path: "/cattystress",
      name: "cattystress",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CattyStressView,
    },
    {
      path: "/makanan",
      name: "makanan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MakananView,
    },
    {
      path: "/keranjang",
      name: "keranjang",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: KeranjangView,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WishlistView,
    },
    {
      path: "/tempattdranjing",
      name: "tempattdranjing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: KASURView,
    },
    {
      path: "/talianjing",
      name: "talianjing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TaganjingView,
    },
    {
      path: "/mangkuk",
      name: "mangkuk",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MangkukView,
    },
    {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RegisterView,
  },
  {
    path: "/product_edit/:id",
    name: "produt_edit",
    component: product_edit,
  },
  {
    path: "/product_create",
    name: "produt_create",
    component: product_edit,
  }
  ],
});

export default router;
