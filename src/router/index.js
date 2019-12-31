//1、创建5个组件
import Home from "../components/Home/Home.vue"
import Category from "../components/Category/Category.vue"
import Shopping from "../components/ShoppingCar/Shopping.vue"
import Mine from "../components/Mine/Mine.vue"
import VueRouter from "vue-router";
import Vue from "vue"
//全局注册两个组件 router-link 和 router-view
Vue.use(VueRouter)

//2、注册路由表
let routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopping',
        component: Shopping
    },
    {
        path: '/mine',
        component: Mine
    }
];
//3、定义路由
let router=new VueRouter({
    routes
});

//4、导出路由
export default router;