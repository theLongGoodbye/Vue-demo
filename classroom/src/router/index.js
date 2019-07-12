import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Layout",
            component: Layout,
            children: [
                {
                    path: "h",
                    component: HelloWorld
                }
            ]
        }
    ]
});
