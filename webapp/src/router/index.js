import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/CartView.vue";
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/cart",
        name: "Cart",
        component: CartView
    },
    {
        path: "/",
        name: "Home",
        component: Home,
         
        
        
    }
]

const router = createRouter({
    history: createWebHistory('/webapp/'),
    routes
})

export default router;