import Vue from 'vue'
import VueRouter from 'vue-router'//引入vue-router
import App from './App.vue'
import HelloWorld from './components/HelloWorld'//引入组件
import Home from './components/Home'//引入组件

Vue.config.productionTip = false
Vue.use(VueRouter)//使用vue-router

const  router =new VueRouter({//定义一个常量来配置路由
    routes:[
        {path:"/",component:Home},//配置路径与对应组件名
        {path:"/HelloWorld",component:HelloWorld},//配置路径与对应组件名
    ],
    mode:"history"//建议设置该属性，否则地址栏将出现“#”号，会影响后续编码
})
new Vue({
    router,//实例化路由
    render: h => h(App),
}).$mount('#app')
