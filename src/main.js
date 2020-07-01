import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store'
// ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import login from './api/login/login'
import screen from './components/screen/data-screen.vue'
import user from './api/test/user'
//全局注册组件
// Vue.component("users", User);
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/screen'
    },
        {
            path: '/screen',
            component: screen
        },
        {
            path: '/login',
            component: login
        },{
            path:'/user',
            component:user
        }],
    mode:'history'
});

//路由配置
//如果需要加菜单，就在这里添加路由，并在UserMenu.vue添加入口router-link
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app');
