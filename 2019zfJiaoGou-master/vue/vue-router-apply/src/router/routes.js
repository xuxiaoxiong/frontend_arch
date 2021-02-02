import Home from '_v/Home.vue';
import Name from '_v/Name.vue';
import Version from '_v/Version.vue';
/*
有懒加载之后就不用配置这些了，因为如果用这些方法，访问一个页面的时候，其他页面也会被加载
import Login from '_v/Login.vue';
import Profile from '_v/Profile.vue';
import User from '_v/User.vue';*/
//默认情况下， 只有首页默认显示，其他点击时才加载组件，但如果数据大了的话可能会出现白屏的问题
export default [
    {
        path:'/',
        redirect:{path:'/ home'}
    },
    {
        path:'/home',
        name:'home',
        components:{
            default:Home,
            name:Name,
            version:Version
        }
    },
    {
        path:'/login',
        name:'login',
        //懒加载
        component:()=>import('_v/Login.vue')
    },
    {
        path:'/profile',
        name:'profile',
        component:()=>import('_v/Profile.vue')
    },
    {
        path:'/user',
        name:'user',
        component:()=>import('_v/User.vue'),
        children:[
            {
                path:'',//默认刚进入的时候，进的页面
                component:()=>import('_v/userAdd.vue')
            },
            {
                path:'add',//路径默认儿子不能加/
                name:'userAdd',
                component:()=>import('_v/userAdd.vue')
            },
            {
                path:'list',//路径默认儿子不能加/
                name:'userList',
                component:()=>import('_v/userList.vue')
            }
            ,
            {
                path:'detail/:id',//  /user/detail/id
                name:'userDetail',
                component:()=>import('_v/UserDetail.vue'),
                beforeEnter(to,from,next){
                    console.log('xxx');
                    next()
                }
            }
        ]
    },
    {
        path:"*",
        component:()=>import('_v/404.vue')
    }
]