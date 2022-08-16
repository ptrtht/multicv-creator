import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { GenerateView, SelectView, SetView, LoginView, AboutView, HomeView } from '../views/index'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/generate',
    name: 'Generate CV',
    component: GenerateView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Logn',
    component: LoginView
  },
  {
    path: "/select",
    name: "CreateCv",
    component: SelectView
  },
  {
    path: "/set",
    name: "Set Options For Cv",
    component: SetView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
