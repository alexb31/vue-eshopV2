import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/checkout";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: ProductDetails
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: {
        requiresAuth: true
      }
    }
  ]
});