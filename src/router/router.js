import Vue from "vue";
import VueRouter from "vue-router";

import Champions from "@/views/Champions.vue";
import Champion from "@/views/Champion.vue";

Vue.use(VueRouter);


const Router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "Champions",
            path: "/",
            component: Champions,
        },
        {
            name: "Champion",
            path: "/champions/:id",
            component: Champion,
        }
    ]
});

export default Router;