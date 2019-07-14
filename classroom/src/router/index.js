import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import Login from "@/components/Login";
import NotFound from "@/components/NotFound";
import ContentTable from "@/components/ContentTable";

Vue.use(Router);


// 登录网址之后直接尝试进入表格页
// 路由守卫中判断是否登录，如果不是，跳转到 注册页面
// 注册完成后再跳转到表格页
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "layout",
            component: Layout,
            children: [
                {
                    path: "login",
                    name: "login",
                    component: Login,
                },
                {
                    path: "content",
                    name: "contentTable",
                    component: ContentTable,
                },
            ],
        },

        { path: '*', component: NotFound },
    ]
});
