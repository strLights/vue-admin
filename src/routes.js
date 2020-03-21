import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Application from './views/nav2/Application.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import SysLog from './views/nav3/SysLog.vue'
import AdminLog from './views/nav3/AdminLog.vue'
import UserLog from './views/nav3/UserLog.vue'
import GuidePageConfig from './views/nav4/GuidePageConfig.vue'
import IntegralConfig from './views/nav4/IntegralConfig.vue'
import SubscribeConfig from './views/nav4/SubscribeConfig.vue'
import PublishCenter from './views/nav5/PublishCenter.vue'
import RoleManage from './views/nav5/RoleManage.vue'
// const Login = () => import('./views/Login.vue')
// const NotFound = () => import('./views/404.vue')
// const Index = () => import('./views/Index.vue')
// const Home = () => import('./views/Home.vue')
// const Main = () => import('./views/Main.vue')
// const Form = () => import('./views/nav1/Form.vue')
// const user = () => import('./views/nav1/user.vue')
// const Application = () => import('./views/nav2/Application.vue')
// const Page4 = () => import('./views/nav2/Page4.vue')
// const Page5 = () => import('./views/nav2/Page5.vue')
// const SysLog = () => import('./views/nav3/SysLog.vue')
// const AdminLog = () => import('./views/nav3/AdminLog.vue')
// const UserLog = () => import('./views/nav3/UserLog.vue')
// const GuidePageConfig = () => import('./views/nav4/GuidePageConfig.vue')
// const IntegralConfig = () => import('./views/nav4/IntegralConfig.vue')
// const SubscribeConfig = () => import('./views/nav4/SubscribeConfig.vue')
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-menu',
        leaf: true,//只有一个节点
        children: [
            { path: '/Index', component: Index, name: 'Dashboard' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-menu',//图标样式class
        leaf: true,//只有一个节点
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/Application', component: Application, name: '应用管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '日志管理',
        iconCls: 'el-icon-date',
        children: [
            { path: '/SysLog', component: SysLog, name: '系统日志' },
            { path: '/AdminLog', component: AdminLog, name: '管理员操作日志' },
            { path: '/UserLog', component: UserLog, name: '用户使用日志' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '配置管理',
        iconCls: 'el-icon-setting',
        children: [
            { path: '/GuidePageConfig', component: GuidePageConfig, name: '引导页配置' },
            { path: '/IntegralConfig', component: IntegralConfig, name: '积分规则配置' },
            { path: '/SubscribeConfig', component: SubscribeConfig, name: '订阅栏目配置' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '权限管理',
        iconCls: 'el-icon-menu',
        children: [
            { path: '/page4', component: Page4, name: '权限组管理' },
            { path: '/Main', component: Main, name: '权限组权限管理' },
            { path: '/Form', component: Form, name: '权限组人员管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '账号管理',
        iconCls: 'el-icon-menu',
        children: [
            { path: '/user', component: user, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-menu',
        children: [
            { path: '/role', 
              z: '1',
              component: PublishCenter,
              name: '权限管理',
              children: [
                  {path: '/role/roleman', component: RoleManage, name: '角色管理',}
              ]
            }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;